import React from 'react';
import { ModelType } from '../types';

const CustomerServiceLogo: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-600">
        <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h.75a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3h-.75Z" />
    </svg>
);

interface HeaderProps {
    activeModel?: ModelType;
    onModelChange: (model: ModelType) => void;
}

const Header: React.FC<HeaderProps> = ({ activeModel, onModelChange }) => {
  const model = activeModel || 'gemini-2.5-flash';

  return (
    <header className="px-4 py-3 border-b border-gray-200 bg-white/80 backdrop-blur-sm flex items-center justify-between flex-shrink-0">
      <div className="flex items-center gap-3">
        <CustomerServiceLogo />
        <div>
          <h1 className="text-lg font-bold text-gray-800">Customer Service AI</h1>
        </div>
      </div>
      <div className="flex items-center gap-3">
         <select 
            value={model} 
            onChange={(e) => onModelChange(e.target.value as ModelType)}
            className="bg-gray-100 border border-gray-300 rounded-lg px-3 py-2 text-gray-700 text-sm font-semibold focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 appearance-none"
            aria-label="Select AI Model"
          >
            <option value="gemini-2.5-flash-lite-preview-09-2025">Gemini 2.5 Flash Lite</option>
            <option value="gemini-2.5-flash">Gemini 2.5 Flash</option>
            <option value="gemini-2.5-pro">Gemini 2.5 Pro</option>
         </select>
      </div>
    </header>
  );
};

export default Header;