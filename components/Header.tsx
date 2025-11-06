import React from 'react';
import { ModelType } from '../types';

const CustomerServiceLogo: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-blue-600">
        <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h.75a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3h-.75Z" />
    </svg>
);

const SunIcon: React.FC = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" /></svg>);
const MoonIcon: React.FC = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25c0 5.385 4.365 9.75 9.75 9.75 2.572 0 4.92-.99 6.752-2.648Z" /></svg>);

interface HeaderProps {
    activeModel?: ModelType;
    onModelChange: (model: ModelType) => void;
    theme: 'light' | 'dark';
    onToggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeModel, onModelChange, theme, onToggleTheme }) => {
  const model = activeModel || 'gemini-2.5-flash';

  return (
    <header className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm flex items-center justify-between flex-shrink-0">
      <div className="flex items-center gap-3">
        <CustomerServiceLogo />
        <div>
          <h1 className="text-lg font-bold text-gray-800 dark:text-gray-200">Customer Service AI</h1>
        </div>
      </div>
      <div className="flex items-center gap-3">
         <select 
            value={model} 
            onChange={(e) => onModelChange(e.target.value as ModelType)}
            className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-100 text-sm font-semibold focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 appearance-none"
            aria-label="Select AI Model"
          >
            {/* FIX: Corrected model name from 'gemini-2.5-flash-lite-preview-09-2025' to 'gemini-flash-lite-latest'. */}
            <option value="gemini-flash-lite-latest">Gemini Flash Lite</option>
            <option value="gemini-2.5-flash">Gemini 2.5 Flash</option>
            <option value="gemini-2.5-pro">Gemini 2.5 Pro</option>
         </select>
         <button
            onClick={onToggleTheme}
            className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
         </button>
      </div>
    </header>
  );
};

export default Header;