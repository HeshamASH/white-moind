// types.ts

export enum MessageRole {
  USER = 'user',
  MODEL = 'model',
  // FIX: Added TOOL role for function/tool calling
  TOOL = 'tool',
}

// FIX: Corrected model name for gemini flash lite.
export type ModelType = 'gemini-2.5-flash' | 'gemini-2.5-pro' | 'gemini-flash-lite-latest';

// FIX: Added and exported Source type for file/document sources.
export interface Source {
  fileName: string;
  path: string;
}

// FIX: Added and exported ElasticResult for search results.
export interface ElasticResult {
  source: Source;
  contentSnippet: string;
  score: number;
  highlightSnippet?: string;
}

// FIX: Added and exported Part type for Gemini API content.
export interface Part {
  text?: string;
  inlineData?: {
    mimeType: string;
    data: string;
  };
  functionCall?: any;
  functionResponse?: any;
}

// FIX: Added and exported Content type for Gemini API history.
export interface Content {
  role: 'user' | 'model' | 'tool';
  parts: Part[];
}

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  image?: string;
  // FIX: Added optional sources to store RAG results, resolving an error in ChatContext.
  sources?: ElasticResult[];
  // FIX: Added optional groundingSources for Google Search results.
  groundingSources?: any[];
  // FIX: Added optional toolCalls for function calling UI.
  toolCalls?: any[];
}

export interface ChatSession {
  id: string;
  title: string;
  messages: ChatMessage[];
  model: ModelType;
  // FIX: Added optional customDataset to handle user-uploaded files.
  customDataset?: ElasticResult[];
}
