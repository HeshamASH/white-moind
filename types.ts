// types.ts

// FIX: Added React import for React.Dispatch used in ChatContextType
import React from 'react';

export enum MessageRole {
  USER = 'user',
  MODEL = 'model',
  // FIX: Added TOOL role for function/tool calling
  TOOL = 'tool',
}

export type ModelType = 'gemini-2.5-flash' | 'gemini-2.5-pro' | 'gemini-2.5-flash-lite-preview-09-2025';

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

// --- Chat Context, State, and Actions for React Context API ---

// FIX: Added and exported ChatState interface for the chat reducer state.
export interface ChatState {
  sessions: Record<string, ChatSession>;
  activeSessionId: string | null;
  isLoading: boolean;
  appIsLoading: boolean;
}

// FIX: Added and exported ChatAction type for the chat reducer actions.
export type ChatAction =
  | { type: 'START_LOADING' }
  | { type: 'STOP_LOADING' }
  | { type: 'INITIAL_LOAD_COMPLETE'; payload: { sessions: Record<string, ChatSession>; activeSessionId: string | null } }
  | { type: 'CREATE_SESSION'; payload: ChatSession }
  | { type: 'DELETE_SESSION'; payload: { sessionId: string; nextActiveId: string | null } }
  | { type: 'SET_ACTIVE_SESSION'; payload: string | null }
  | { type: 'ADD_MESSAGE'; payload: { sessionId: string; message: ChatMessage } }
  | { type: 'UPDATE_LAST_MESSAGE'; payload: { sessionId: string; updatedMessage: Partial<ChatMessage> } }
  | { type: 'UPDATE_SESSION_DETAILS'; payload: { sessionId: string } & Partial<ChatSession> }
  | { type: 'SET_SESSIONS', payload: Record<string, ChatSession> }
  | { type: 'SAVE_SESSION', payload: { sessionId: string } };

// FIX: Added and exported ChatContextType for the ChatContext.
export interface ChatContextType {
  state: ChatState;
  dispatch: React.Dispatch<ChatAction>;
  handleSendMessage: (query: string, image?: string) => Promise<void>;
  handleModelChange: (newModel: ModelType) => void;
  handleFilesUploaded: (fileList: FileList) => Promise<void>;
  handleSelectSession: (id: string) => void;
  handleDeleteSession: (id: string) => Promise<void>;
  createNewSession: (model?: ModelType, setActive?: boolean) => Promise<string>;
  handlePlayAudio: (text: string) => Promise<void>;
}