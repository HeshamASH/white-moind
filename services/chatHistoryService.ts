// services/chatHistoryService.ts
import { ChatSession } from '../types';

const HISTORY_KEY = 'customer-ai-chat-history';

// No initialization needed for localStorage
export const initializeChatHistory = async (): Promise<void> => {
  return Promise.resolve();
};

export const saveSession = async (session: ChatSession): Promise<void> => {
  try {
    const allSessions = await loadAllSessions();
    allSessions[session.id] = session;
    localStorage.setItem(HISTORY_KEY, JSON.stringify(allSessions));
  } catch (error) {
    console.error(`Failed to save session ${session.id}:`, error);
  }
};

export const loadSession = async (sessionId: string): Promise<ChatSession | null> => {
    try {
        const allSessions = await loadAllSessions();
        return allSessions[sessionId] || null;
    } catch (error) {
         console.error(`Failed to load session ${sessionId}:`, error);
         return null;
    }
};

export const loadAllSessions = async (): Promise<Record<string, ChatSession>> => {
  try {
    const sessionsJson = localStorage.getItem(HISTORY_KEY);
    return sessionsJson ? JSON.parse(sessionsJson) : {};
  } catch (error) {
    console.error("Failed to load all sessions from localStorage:", error);
    // If parsing fails, clear the corrupted data
    localStorage.removeItem(HISTORY_KEY);
    return {};
  }
};

export const deleteSession = async (sessionId: string): Promise<void> => {
    try {
        const allSessions = await loadAllSessions();
        delete allSessions[sessionId];
        localStorage.setItem(HISTORY_KEY, JSON.stringify(allSessions));
    } catch (error) {
         console.error(`Failed to delete session ${sessionId}:`, error);
    }
};