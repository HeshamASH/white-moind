// services/geminiService.ts
import { GoogleGenAI } from "@google/genai";
import { ChatMessage, ModelType, MessageRole, ElasticResult } from '../types';
import { searchKnowledgeBase } from './elasticService';

interface AgentResponse {
    content: string;
    sources: ElasticResult[]; 
}

// Helper to map our ChatMessage format to the Gemini API's `Content` format.
const mapHistoryToApi = (chatHistory: ChatMessage[]) => {
    return chatHistory.map(msg => {
      const parts: any[] = [];
      
      if (msg.content) {
          parts.push({ text: msg.content });
      }

      if (msg.image) {
          const [mimeType, data] = msg.image.split(';base64,');
          parts.push({ inlineData: { mimeType: mimeType.replace('data:', ''), data } });
      }
      
      const role = msg.role === MessageRole.USER ? 'user' : 'model';

      return { role, parts };
    }).filter(c => c.parts.length > 0);
};

/**
 * STEP 1: Fast Intent Classification (Router Agent)
 * This function uses a lightweight model to quickly determine if the user is asking
 * a question that requires a document search or just making a social comment.
 */
const classifyIntent = async (userQuery: string): Promise<'query_documents' | 'chit_chat'> => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const prompt = `You are an intent classifier for a chatbot. Your job is to determine if the user's message is a 'query_documents' (asking for specific information) or 'chit_chat' (a social comment, greeting, or statement).

Respond with only one word: 'query_documents' or 'chit_chat'.

User: "what are the fees for withdrawal?"
Assistant: query_documents

User: "Hello, how are you?"
Assistant: chit_chat

User: "my name is hesham"
Assistant: chit_chat

User: "Tell me about the marketing plan."
Assistant: query_documents

User: "That's great, thanks!"
Assistant: chit_chat

User: "List the critical points in this agreement"
Assistant: query_documents

User: "${userQuery}"
Assistant:`;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash-lite-preview-09-2025',
            contents: [{ role: 'user', parts: [{ text: prompt }] }],
        });

        const classification = response.text.trim().toLowerCase();
        
        if (classification.includes('query_documents')) {
            return 'query_documents';
        }
        return 'chit_chat';
    } catch (error) {
        console.error("Error in intent classification:", error);
        // Default to document search if classification fails
        return 'query_documents';
    }
};


export const getAgenticResponse = async (
    chatHistory: ChatMessage[],
    model: ModelType
): Promise<AgentResponse> => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    try {
        const latestUserQuery = [...chatHistory].reverse().find(m => m.role === MessageRole.USER)?.content || '';
        
        // --- ROUTER LOGIC ---
        const intent = await classifyIntent(latestUserQuery);

        // --- PATH 1: User is asking a question about the documents ---
        if (intent === 'query_documents') {
            const sources = await searchKnowledgeBase(latestUserQuery);
            
            const context = sources.length > 0
                ? sources.map(s => `Source File: ${s.source.fileName}\nPath: ${s.source.path}\nContent:\n${s.highlightSnippet}`).join('\n\n---\n\n')
                : "No relevant documents were found.";

            const systemInstruction = `You are a professional and helpful customer service AI agent. Your task is to answer the user's question based ONLY on the provided context below. Do not use any external knowledge.
- If the answer is in the context, provide a comprehensive answer and cite the source file name(s) you used.
- If the context does not contain the answer, you MUST state that you cannot find the information in the provided documents. Do not try to answer from memory or make up information.
- Format your answers clearly using markdown.

CONTEXT:
${context}
`;
            const contents = mapHistoryToApi(chatHistory);
            
            const response = await ai.models.generateContent({
                model: model,
                contents: contents,
                config: {
                  systemInstruction: systemInstruction,
                },
            });

            return {
                content: response.text,
                sources: sources,
            };
        } 
        
        // --- PATH 2: User is just making a social comment ---
        else { // intent is 'chit_chat'
            const prompt = `You are a helpful and friendly assistant whose main purpose is to answer questions about a specific set of documents.

The user is not asking a question about the documents, but is making a social comment.
Respond politely and conversationally. If appropriate, gently guide the user back to your main purpose.

User: "my name is hesham"
Assistant: "It's nice to meet you, Hesham! How can I help you with the provided documents today?"

User: "thanks"
Assistant: "You're welcome! Do you have any other questions about the documents?"

User: "hello"
Assistant: "Hello! I'm ready to answer your questions about the provided context."

User: "${latestUserQuery}"
Assistant:`;

            const response = await ai.models.generateContent({
                model: model,
                contents: [{ role: 'user', parts: [{ text: prompt }] }],
            });

            return {
                content: response.text,
                sources: [], // No sources for chit-chat
            };
        }

    } catch (error: any) {
        console.error("Error calling Gemini API:", error);
        const errorMessage = error.message?.includes("API key") 
            ? "The API key is invalid or not configured correctly. Please ensure it is set up in your environment."
            : `An error occurred while contacting the AI. ${error.message}`;
        throw new Error(errorMessage);
    }
};

export const textToSpeech = async (text: string): Promise<ArrayBuffer> => {
    console.warn("Text-to-speech functionality has been removed.");
    return new ArrayBuffer(0);
};