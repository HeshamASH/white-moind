import { GoogleGenAI, FunctionDeclaration, Type, Content } from '@google/genai';
import { ChatMessage, ModelType, ElasticResult, MessageRole } from '../types';
import { searchKnowledgeBase } from './elasticService';
import { mapHistoryToApi } from '../api/tools';

// Initialize the Gemini AI model
// The API key is expected to be set in the environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

const searchKnowledgeBaseTool: FunctionDeclaration = {
    name: 'searchKnowledgeBase',
    description: 'Searches the company knowledge base for specific information about services, fees, and policies. Use this for questions about company-specific topics.',
    parameters: {
        type: Type.OBJECT,
        properties: {
            query: {
                type: Type.STRING,
                description: 'A detailed search query to find relevant documents in the knowledge base.',
            },
        },
        required: ['query'],
    },
};

export const getAgenticResponse = async (
    messages: ChatMessage[],
    model: ModelType
): Promise<{ content: string; sources: ElasticResult[] }> => {
    const geminiModel = model;
    const history = mapHistoryToApi(messages.slice(0, -1));
    const latestMessage = messages[messages.length - 1];

    if (!latestMessage || !latestMessage.content) {
        return { content: "I'm sorry, I didn't receive a message.", sources: [] };
    }

    // FIX: Explicitly type latestMessageContent as Content to allow for multiple part types (text and inlineData).
    const latestMessageContent: Content = { role: 'user', parts: [{ text: latestMessage.content }] };
    if (latestMessage.image) {
        const [mimeType, data] = latestMessage.image.split(';base64,');
        latestMessageContent.parts.push({ inlineData: { mimeType: mimeType.replace('data:', ''), data } });
    }

    try {
        // First call to the model to see if it needs to use tools
        const initialResponse = await ai.models.generateContent({
            model: geminiModel,
            contents: [...history, latestMessageContent],
            config: {
                tools: [{ functionDeclarations: [searchKnowledgeBaseTool] }],
            }
        });

        const functionCalls = initialResponse.functionCalls;
        if (!functionCalls || functionCalls.length === 0) {
            return { content: initialResponse.text, sources: [] };
        }

        const fc = functionCalls[0];
        if (fc.name === 'searchKnowledgeBase' && fc.args.query) {
            // FIX: Cast fc.args.query to string to resolve type error.
            const searchResults = await searchKnowledgeBase(fc.args.query as string);
            
            const toolResponseContent: Content[] = [
                ...history,
                latestMessageContent,
                { role: 'model', parts: [{ functionCall: fc }] },
                {
                    role: 'tool',
                    parts: [{
                        functionResponse: {
                            name: 'searchKnowledgeBase',
                            response: {
                                result: searchResults.map(r => ({
                                    fileName: r.source.fileName,
                                    path: r.source.path,
                                    snippet: r.contentSnippet
                                })).slice(0, 3)
                            }
                        }
                    }]
                }
            ];

            const secondResponse = await ai.models.generateContent({
                model: geminiModel,
                contents: toolResponseContent,
            });

            return { content: secondResponse.text, sources: searchResults };

        } else {
             // If the tool call is malformed or not the one we support, return initial text
            return { content: initialResponse.text, sources: [] };
        }
    } catch (error) {
        console.error("Error generating agentic response:", error);
        if (error instanceof Error) {
            return { content: `An error occurred while processing your request: ${error.message}`, sources: [] };
        }
        return { content: "An unknown error occurred.", sources: [] };
    }
};
