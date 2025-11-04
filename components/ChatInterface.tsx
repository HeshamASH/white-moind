
// components/ChatInterface.tsx
import React, { useState, useRef, useEffect } from 'react';
import { MessageRole, ChatSession, ElasticResult } from '../types';
import Message from './Message';

const WelcomeBlock: React.FC<{ onSendMessage: (query: string) => void }> = ({ onSendMessage }) => {
    const examplePrompts = [
        "What are the fees for receiving international payments?",
        "How much does it cost to withdraw my balance?",
        "How do you use my personal data?",
        "What is the standard rate for commercial transactions?",
    ];

    return (
        <div className="flex flex-col items-center justify-center h-full p-8 text-center">
            <div className="max-w-3xl">
                <h2 className="text-4xl font-bold text-gray-800 mb-2">Welcome to your helpful AI assistant</h2>
                <p className="text-lg text-gray-500 mb-10">
                    Ask any question about our services, fees, and policies.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    {examplePrompts.map((prompt, index) => (
                        <button
                            key={index}
                            onClick={() => onSendMessage(prompt)}
                            className="bg-white p-4 rounded-lg border border-gray-200 hover:bg-gray-100 hover:border-blue-500 transition-all duration-200 cursor-pointer text-gray-700 shadow-sm"
                        >
                            <p className="font-semibold">{prompt}</p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};


const SendIcon: React.FC = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" /></svg>);
const AttachmentIcon: React.FC = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.122 2.122l7.81-7.81" /></svg>);
const CloseIcon: React.FC = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>);

interface ChatInterfaceProps {
  activeSession: ChatSession | null;
  isLoading: boolean;
  onSendMessage: (query: string, image?: string) => void;
  onSelectSource: (source: ElasticResult) => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ activeSession, isLoading, onSendMessage, onSelectSource }) => {
  const [input, setInput] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [activeSession?.messages, isLoading]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => setImagePreview(reader.result as string);
        reader.readAsDataURL(file);
    }
    event.target.value = '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() || imagePreview) {
      onSendMessage(input, imagePreview || undefined);
      setInput('');
      setImagePreview(null);
    }
  };
  
  if (!activeSession) {
    return (
        <div className="flex items-center justify-center h-full text-gray-500">
            <p>Select or create a new chat to begin.</p>
        </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex-1 overflow-y-auto p-6">
        {activeSession.messages.length === 0 ? (
            <WelcomeBlock onSendMessage={onSendMessage} />
        ) : (
          <div className="space-y-6">
            {activeSession.messages.map((msg) => (
              <Message key={msg.id} message={msg} onSelectSource={onSelectSource} />
            ))}
             {isLoading && activeSession.messages.length > 0 && activeSession.messages[activeSession.messages.length-1].role === MessageRole.USER && (
              <Message 
                message={{ id: 'loading', role: MessageRole.MODEL, content: '' }}
                onSelectSource={onSelectSource}
              />
            )}
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="px-6 py-4 border-t border-gray-200 bg-white">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            {imagePreview && (
                <div className="relative self-start">
                    <img src={imagePreview} alt="upload preview" className="h-20 w-auto rounded-md object-cover" />
                    <button 
                        type="button" 
                        onClick={() => setImagePreview(null)}
                        className="absolute -top-2 -right-2 bg-gray-700 text-white rounded-full p-0.5 border-2 border-white hover:bg-gray-600"
                        aria-label="Remove image"
                    ><CloseIcon /></button>
                </div>
            )}
            <div className="flex items-center gap-3">
                <button 
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isLoading}
                    className="p-2 text-gray-500 hover:text-gray-800 disabled:text-gray-300 disabled:cursor-not-allowed transition-colors"
                    aria-label="Attach file"
                ><AttachmentIcon /></button>
                <input
                    type="text" value={input} onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask a question..."
                    className="flex-1 w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 placeholder-gray-500"
                    disabled={isLoading}
                />
                <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
                <button
                    type="submit"
                    disabled={isLoading || (!input.trim() && !imagePreview)}
                    className="bg-blue-600 text-white rounded-lg p-3 hover:bg-blue-500 disabled:bg-gray-300 disabled:text-gray-500 transition-colors duration-200"
                    aria-label="Send message"
                ><SendIcon /></button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;
