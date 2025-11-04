// context/ChatContext.tsx
import React, { createContext, useReducer, useContext, useCallback, useEffect, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ChatContextType, ChatSession, ChatMessage, MessageRole, ChatState, ChatAction, ElasticResult, ModelType } from '../types';
import * as chatHistoryService from '../services/chatHistoryService';
// FIX: The function 'streamAgenticResponse' does not exist. Changed to 'getAgenticResponse'
// to match the available implementation in the geminiService.
import { getAgenticResponse, textToSpeech } from '../services/geminiService';
import { playAudio } from '../services/audioUtils';
import { createDatasetFromFileList } from '../services/elasticService';

const initialState: ChatState = {
  sessions: {},
  activeSessionId: null,
  isLoading: false,
  appIsLoading: true,
};

const chatReducer = (state: ChatState, action: ChatAction): ChatState => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'STOP_LOADING':
      return { ...state, isLoading: false };
    case 'INITIAL_LOAD_COMPLETE':
      return { ...state, appIsLoading: false, sessions: action.payload.sessions, activeSessionId: action.payload.activeSessionId };
    case 'CREATE_SESSION':
      return { ...state, sessions: { ...state.sessions, [action.payload.id]: action.payload } };
    case 'DELETE_SESSION':
      const newSessions = { ...state.sessions };
      delete newSessions[action.payload.sessionId];
      return { ...state, sessions: newSessions, activeSessionId: action.payload.nextActiveId };
    case 'SET_ACTIVE_SESSION':
      return { ...state, activeSessionId: action.payload };
    case 'ADD_MESSAGE': {
      if (!action.payload.sessionId || !state.sessions[action.payload.sessionId]) return state;
      const session = state.sessions[action.payload.sessionId];
      const updatedMessages = [...session.messages, action.payload.message];
      return { ...state, sessions: { ...state.sessions, [session.id]: { ...session, messages: updatedMessages } } };
    }
    case 'UPDATE_LAST_MESSAGE': {
      if (!action.payload.sessionId || !state.sessions[action.payload.sessionId]) return state;
      const session = state.sessions[action.payload.sessionId];
      const updatedMessages = [...session.messages];
      const lastMessageIndex = updatedMessages.length - 1;
      if (lastMessageIndex >= 0) {
        updatedMessages[lastMessageIndex] = { ...updatedMessages[lastMessageIndex], ...action.payload.updatedMessage };
      }
      return { ...state, sessions: { ...state.sessions, [session.id]: { ...session, messages: updatedMessages } } };
    }
    case 'UPDATE_SESSION_DETAILS': {
       if (!action.payload.sessionId || !state.sessions[action.payload.sessionId]) return state;
       // Fix: Destructure payload to separate sessionId from the details to update.
       // This prevents adding a `sessionId` property to the ChatSession object in the state.
       const { sessionId, ...details } = action.payload;
       const session = state.sessions[sessionId];
       const updatedSession = { ...session, ...details };
       return { ...state, sessions: { ...state.sessions, [session.id]: updatedSession } };
    }
    case 'SET_SESSIONS':
        return {...state, sessions: action.payload };
    // FIX: Added a case to handle the save action. This performs the side effect of saving
    // to history. While side effects in reducers are an anti-pattern, this is the most
    // direct fix for the original code's intent without a major refactor.
    case 'SAVE_SESSION': {
      if (!action.payload.sessionId || !state.sessions[action.payload.sessionId]) return state;
      const sessionToSave = state.sessions[action.payload.sessionId];
      chatHistoryService.saveSession(sessionToSave);
      return state;
    }
    default:
      return state;
  }
};

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export const ChatProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(chatReducer, initialState);
  const { sessions, activeSessionId, isLoading } = state;

  // Fix: Changed default model to 'gemini-2.5-flash' to match ModelType definition.
  const createNewSession = useCallback(async (model: ModelType = 'gemini-2.5-flash', setActive = true): Promise<string> => {
    const newId = uuidv4();
    const newSession: ChatSession = { id: newId, title: `New Customer Chat`, messages: [], model };
    dispatch({ type: 'CREATE_SESSION', payload: newSession });
    if (setActive) dispatch({ type: 'SET_ACTIVE_SESSION', payload: newId });
    await chatHistoryService.saveSession(newSession);
    return newId;
  }, []);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        await chatHistoryService.initializeChatHistory();
        const loadedSessions = await chatHistoryService.loadAllSessions();
        
        if (loadedSessions && Object.keys(loadedSessions).length > 0) {
          const sortedIds = Object.keys(loadedSessions).sort((a,b) => loadedSessions[a].title.localeCompare(loadedSessions[b].title));
          dispatch({ type: 'INITIAL_LOAD_COMPLETE', payload: { sessions: loadedSessions, activeSessionId: sortedIds[0] } });
        } else {
          // No sessions found, create the very first one.
          const newId = uuidv4();
          // Fix: Changed default model to 'gemini-2.5-flash' to match ModelType definition.
          const newSession: ChatSession = { id: newId, title: `New Customer Chat`, messages: [], model: 'gemini-2.5-flash' };
          
          dispatch({ 
            type: 'INITIAL_LOAD_COMPLETE', 
            payload: { 
              sessions: { [newId]: newSession }, 
              activeSessionId: newId 
            } 
          });
          
          await chatHistoryService.saveSession(newSession);
        }
      } catch (error) {
        console.error("Failed to load or create initial session:", error);
        // If loading/saving fails, create a local fallback session so the app is still usable.
        const newId = uuidv4();
        // Fix: Changed default model to 'gemini-2.5-flash' to match ModelType definition.
        const newSession: ChatSession = { id: newId, title: `Fallback Chat Session`, messages: [], model: 'gemini-2.5-flash' };
        dispatch({ 
          type: 'INITIAL_LOAD_COMPLETE', 
          payload: { 
            sessions: { [newId]: newSession }, 
            activeSessionId: newId 
          } 
        });
      }
    };
    loadHistory();
  }, []); // Empty dependency array ensures this runs only once on mount.

  const handleSendMessage = async (query: string, image?: string) => {
    if ((!query.trim() && !image) || isLoading || !activeSessionId) return;

    dispatch({ type: 'START_LOADING' });

    const userMessage: ChatMessage = { id: uuidv4(), role: MessageRole.USER, content: query, image };
    dispatch({ type: 'ADD_MESSAGE', payload: { sessionId: activeSessionId, message: userMessage } });
    
    // The state update is async, so we need to get the session from the current state object.
    const currentSession = state.sessions[activeSessionId];
    if (!currentSession) {
        dispatch({ type: 'STOP_LOADING' });
        return;
    }

    const isFirstMessage = currentSession.messages.length === 0;
    if (isFirstMessage && query.trim()) {
        const newTitle = query.substring(0, 40) + (query.length > 40 ? '...' : '');
        dispatch({ type: 'UPDATE_SESSION_DETAILS', payload: { sessionId: activeSessionId, title: newTitle } });
    }

    const modelMessage: ChatMessage = { id: uuidv4(), role: MessageRole.MODEL, content: '', sources: [], groundingSources: [] };
    dispatch({ type: 'ADD_MESSAGE', payload: { sessionId: activeSessionId, message: modelMessage } });

    try {
      const historyForApi = [...currentSession.messages, userMessage];
      // FIX: Replaced streaming logic with a single call to the available getAgenticResponse.
      // This makes the AI response appear all at once, but fixes the error.
      const response = await getAgenticResponse(historyForApi, currentSession.model);
      
      dispatch({ 
        type: 'UPDATE_LAST_MESSAGE', 
        payload: { 
          sessionId: activeSessionId, 
          updatedMessage: { 
            content: response.content,
            sources: response.sources 
          } 
        } 
      });

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
      dispatch({ type: 'UPDATE_LAST_MESSAGE', payload: { sessionId: activeSessionId, updatedMessage: { content: `Sorry, I encountered an error: ${errorMessage}` } } });
    } finally {
      dispatch({ type: 'STOP_LOADING' });
      // FIX: The original code used a callback in dispatch, which is invalid.
      // Replaced with a 'SAVE_SESSION' action to correctly persist the final session state.
      if (activeSessionId) {
        dispatch({ type: 'SAVE_SESSION', payload: { sessionId: activeSessionId } });
      }
    }
  };

  const handleModelChange = (newModel: ModelType) => {
    if (!activeSessionId) return;
    const activeSession = sessions[activeSessionId];
    if (activeSession) {
       dispatch({ type: 'UPDATE_SESSION_DETAILS', payload: { sessionId: activeSessionId, model: newModel } });
       chatHistoryService.saveSession({ ...activeSession, model: newModel });
    }
  };
  
  const handleFilesUploaded = async (fileList: FileList) => {
    if (!fileList || fileList.length === 0) return;
    dispatch({ type: 'START_LOADING' });
    try {
        const newDataset = await createDatasetFromFileList(fileList);
        // Fix: Changed default model to 'gemini-2.5-flash' to match ModelType definition.
        const newId = await createNewSession('gemini-2.5-flash');
        const newTitle = "Custom Docs: " + Array.from(fileList).map(f => f.name).join(', ').substring(0, 30);

        dispatch({ type: 'UPDATE_SESSION_DETAILS', payload: { sessionId: newId, customDataset: newDataset, title: newTitle } });
        
        // FIX: The original code used a callback in dispatch, which is invalid.
        // Replaced with a 'SAVE_SESSION' action to correctly persist the new session state.
        dispatch({ type: 'SAVE_SESSION', payload: { sessionId: newId } });

    } catch (error) {
        console.error("Error processing uploaded files:", error);
    } finally {
        dispatch({ type: 'STOP_LOADING' });
    }
  };

  const handleSelectSession = (id: string) => {
    dispatch({ type: 'SET_ACTIVE_SESSION', payload: id });
  };
    
  const handleDeleteSession = async (id: string) => {
    const remainingIds = Object.keys(sessions).filter(sId => sId !== id);
    let nextActiveId = activeSessionId;
    if (activeSessionId === id) {
        nextActiveId = remainingIds.length > 0 ? remainingIds.sort((a,b) => sessions[a].title.localeCompare(sessions[b].title))[0] : null;
    }
    
    dispatch({ type: 'DELETE_SESSION', payload: { sessionId: id, nextActiveId } });
    await chatHistoryService.deleteSession(id);

    if (nextActiveId === null) {
        await createNewSession(undefined, true);
    }
  };

  const handlePlayAudio = async (text: string) => {
    try {
      const audioData = await textToSpeech(text);
      playAudio(audioData);
    } catch (error) {
      console.error("Error playing audio:", error);
    }
  };

  const value: ChatContextType = {
    state,
    dispatch,
    handleSendMessage,
    handleModelChange,
    handleFilesUploaded,
    handleSelectSession,
    handleDeleteSession,
    createNewSession,
    handlePlayAudio,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export const useChat = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChat must be used within a ChatProvider');
  }
  return context;
};
