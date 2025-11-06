// App.tsx
import React, { useState, useCallback, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ChatSession, ChatMessage, MessageRole, ModelType, ElasticResult, Source } from './types';
// FIX: Corrected import paths for services.
import { getAgenticResponse } from './services/geminiService';
import { getFileContent } from './services/elasticService';
import Header from './components/Header';
import ChatInterface from './components/ChatInterface';
import FileViewer from './components/FileViewer';

type Theme = 'light' | 'dark';

const App: React.FC = () => {
  // --- STATE MANAGEMENT ---
  const [activeSession, setActiveSession] = useState<ChatSession | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [appIsLoading, setAppIsLoading] = useState(true);
  const [viewingFile, setViewingFile] = useState<{ source: Source; content: string; highlight: string; } | null>(null);
  const [theme, setTheme] = useState<Theme>('light');

  // --- THEME MANAGEMENT ---
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // --- INITIALIZATION ---
  useEffect(() => {
    const newId = uuidv4();
    const initialSession: ChatSession = {
      id: newId,
      title: `Customer Support Chat`,
      messages: [],
      // FIX: Corrected model name from 'gemini-2.5-flash-lite-preview-09-2025' to 'gemini-flash-lite-latest' as per guidelines.
      model: 'gemini-flash-lite-latest'
    };
    setActiveSession(initialSession);
    setAppIsLoading(false);
  }, []);

  // --- CORE CHAT LOGIC ---
  const handleModelChange = useCallback(async (newModel: ModelType) => {
    if (activeSession) {
      setActiveSession({ ...activeSession, model: newModel });
    }
  }, [activeSession]);

  const handleSendMessage = useCallback(async (query: string, image?: string) => {
    if ((!query.trim() && !image) || isLoading || !activeSession) return;

    setIsLoading(true);

    const userMessage: ChatMessage = { id: uuidv4(), role: MessageRole.USER, content: query, image };
    const newMessages = [...activeSession.messages, userMessage];
    setActiveSession({ ...activeSession, messages: newMessages });

    try {
      const response = await getAgenticResponse(newMessages, activeSession.model);

      const finalModelMessage: ChatMessage = {
        id: uuidv4(),
        role: MessageRole.MODEL,
        content: response.content,
        sources: response.sources,
      };

      setActiveSession(prev => {
        if (!prev) return null;
        return { ...prev, messages: [...newMessages, finalModelMessage] };
      });

    } catch (error) {
      console.error(error);
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
      const errorModelMessage: ChatMessage = {
        id: uuidv4(),
        role: MessageRole.MODEL,
        content: `Sorry, I encountered an error: ${errorMessage}`
      };

      setActiveSession(prev => {
        if (!prev) return null;
        return { ...prev, messages: [...newMessages, errorModelMessage] };
      });

    } finally {
      setIsLoading(false);
    }
  }, [activeSession, isLoading]);

  const handleSelectSource = useCallback(async (sourceResult: ElasticResult) => {
    // Immediately show viewer with a loading state
    setViewingFile({ source: sourceResult.source, content: 'Loading...', highlight: sourceResult.highlightSnippet || sourceResult.contentSnippet });
    
    // Fetch full content
    const fullContent = await getFileContent(sourceResult.source);
    if (fullContent) {
        setViewingFile({ source: sourceResult.source, content: fullContent, highlight: sourceResult.highlightSnippet || sourceResult.contentSnippet });
    } else {
        setViewingFile({ source: sourceResult.source, content: 'Could not load file content.', highlight: '' });
    }
  }, []);

  if (appIsLoading || !activeSession) {
    return (
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border-4 border-t-blue-500 border-gray-200 dark:border-gray-700 rounded-full animate-spin"></div>
          <span className="text-xl text-gray-500 dark:text-gray-400">Loading Chat...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans">
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header
            activeModel={activeSession?.model}
            onModelChange={handleModelChange}
            theme={theme}
            onToggleTheme={handleToggleTheme}
          />
          <div className="flex-1 flex overflow-hidden relative">
            <main className="flex-1 overflow-hidden">
              <ChatInterface
                activeSession={activeSession}
                isLoading={isLoading}
                onSendMessage={handleSendMessage}
                onSelectSource={handleSelectSource}
              />
            </main>
          </div>
        </div>
      </div>
      {viewingFile && (
        <FileViewer 
          file={viewingFile.source}
          content={viewingFile.content}
          onClose={() => setViewingFile(null)}
          highlightText={viewingFile.highlight}
        />
      )}
    </>
  );
};

export default App;