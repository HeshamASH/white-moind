// api/gemini-proxy.ts

// This is a Vercel-specific file for serverless functions.
// We use the VercelRequest and VercelResponse types for compatibility.
import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from "@google/genai";
import { mapHistoryToApi } from './tools';
import { ModelType } from '../types';

// --- !!! ACTION REQUIRED !!! ---
// --- Replace this placeholder with your actual Google API key ---
const GOOGLE_API_KEY = "PASTE_YOUR_GOOGLE_API_KEY_HERE";
// --- End of Action Required ---

export default async function handler(req: VercelRequest, res: VercelResponse) {
    console.log("Gemini proxy handler invoked.");

    if (req.method !== 'POST') {
        console.log("Method not allowed:", req.method);
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        console.log("Checking API key...");
        if (!GOOGLE_API_KEY || GOOGLE_API_KEY === "PASTE_YOUR_GOOGLE_API_KEY_HERE") {
            console.error("API key is not configured.");
            throw new Error("API key is not configured. Please edit api/gemini-proxy.ts and add your key.");
        }
        
        const { chatHistory, model } = req.body;
        
        if (!chatHistory || !Array.isArray(chatHistory)) {
             console.error("Invalid chatHistory received:", chatHistory);
             throw new Error("chatHistory is required and must be an array.");
        }

        console.log("Initializing GoogleGenAI...");
        const ai = new GoogleGenAI({ apiKey: GOOGLE_API_KEY });

        console.log("Mapping history for API...");
        const historyForApi = mapHistoryToApi(chatHistory);
        const modelName: ModelType = model || 'gemini-2.5-flash';
        
        console.log(`Generating content with model: ${modelName}`);
        const result = await ai.models.generateContent({
            model: modelName,
            contents: historyForApi,
        });

        const content = result.text;
        console.log("Successfully received content from Gemini.");
        
        const payload = {
            content: content,
            sources: [], // RAG is disabled, so sources is always empty.
        };

        console.log("Sending successful response to client.");
        return res.status(200).json(payload);

    } catch (error: any) {
        // This is a critical catch block to prevent the function from crashing silently.
        console.error('--- FATAL ERROR IN GEMINI PROXY ---');
        console.error('Error Object:', error);
        console.error('Error Message:', error.message);
        console.error('--- END OF ERROR ---');
        
        const errorMessage = error.message || 'An internal server error occurred on the backend.';
        
        // Send a detailed error response back to the frontend.
        return res.status(500).json({ message: errorMessage });
    }
}
