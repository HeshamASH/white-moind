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


export const getAgenticResponse = async (
    chatHistory: ChatMessage[],
    model: ModelType
): Promise<AgentResponse> => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    try {
        // FIX: The 'findLast' method is not available in the target JavaScript environment.
        // Replaced with a compatible alternative that reverses a copy of the array and
        // uses 'find' to get the last user query.
        const latestUserQuery = [...chatHistory].reverse().find(m => m.role === MessageRole.USER)?.content || '';
        
        // 1. Perform RAG search to get context
        const sources = await searchKnowledgeBase(latestUserQuery);
        
        // 2. Construct the context for the model
        const context = sources.length > 0
            ? sources.map(s => `Source File: ${s.source.fileName}\nPath: ${s.source.path}\nContent:\n${s.highlightSnippet}`).join('\n\n---\n\n')
            : "No relevant documents were found.";

        // 3. Create the system instruction prompt
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