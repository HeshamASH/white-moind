import React, { useMemo } from 'react';
import { Source } from '../types';

interface FileViewerProps {
  file: Source;
  content: string;
  onClose: () => void;
  highlightText?: string;
}

const CloseIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const FileViewer: React.FC<FileViewerProps> = ({ file, content, onClose, highlightText }) => {

  const highlightedContent = useMemo(() => {
    if (!highlightText || content === 'Loading...') {
      return <span>{content}</span>;
    }
    const parts = content.split(new RegExp(`(${highlightText})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === highlightText.toLowerCase() ? (
            <mark key={i} className="bg-yellow-200 text-black px-1 rounded">
              {part}
            </mark>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </span>
    );
  }, [content, highlightText]);

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white border border-gray-200 rounded-lg w-full max-w-4xl max-h-[80vh] flex flex-col shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
          <div>
            <h3 className="font-bold text-lg text-blue-600">{file.fileName}</h3>
            <p className="text-sm text-gray-500">{file.path}</p>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-900 transition-colors" aria-label="Close file viewer">
            <CloseIcon />
          </button>
        </header>
        <main className="p-6 overflow-auto">
          <div className="bg-gray-50 rounded-md p-4">
            <div className="text-base text-gray-800 whitespace-pre-wrap leading-relaxed">
              {content === 'Loading...' ? 'Loading...' : highlightedContent}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default FileViewer;