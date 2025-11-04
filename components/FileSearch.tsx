import React, { useState, useEffect } from 'react';
import { Source, ElasticResult } from '../types';
import { getAllFiles } from '../services/elasticService';


interface FileSearchProps {
  onClose: () => void;
  onSelectFile: (file: Source, highlight: string) => void;
  customDataset?: ElasticResult[];
}

const FileIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-gray-500">
        <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h6.89a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 1 .439 1.061v5.758A1.5 1.5 0 0 1 12.5 13H3.5A1.5 1.5 0 0 1 2 11.5v-8Z" />
    </svg>
);

const CloseIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const FileSearch: React.FC<FileSearchProps> = ({ onClose, onSelectFile, customDataset }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [files, setFiles] = useState<Source[]>([]);

  useEffect(() => {
    getAllFiles(customDataset).then(setFiles);
  }, [customDataset]);

  const filteredFiles = files.filter(file => {
    const fullPath = `${file.path}/${file.fileName}`.toLowerCase();
    return fullPath.includes(searchTerm.toLowerCase());
  });

  return (
    <aside className="bg-white/80 backdrop-blur-sm border-l border-gray-200 flex flex-col h-full w-full">
      <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
        <h2 className="text-lg font-semibold text-gray-800">Search Knowledge Base</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-900 transition-colors" aria-label="Close file search">
            <CloseIcon />
        </button>
      </div>
      <div className="p-4 flex-shrink-0">
        <input
          type="text"
          placeholder="Search by name or path..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-gray-100 border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200 placeholder-gray-500"
        />
      </div>
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        {files.length === 0 ? (
            <p className="text-center text-gray-500 pt-8">No files available in the knowledge base.</p>
        ) : filteredFiles.length > 0 ? (
          <ul className="space-y-1">
            {filteredFiles.map((file, index) => (
              <li key={index}>
                <button onClick={() => onSelectFile(file, '')} className="w-full text-left p-2.5 rounded-md hover:bg-gray-100 cursor-pointer transition-colors group">
                    <div className="flex items-center gap-3">
                    <FileIcon />
                    <div className="overflow-hidden">
                        <p className="text-sm font-medium text-gray-700 truncate group-hover:text-blue-600">{file.fileName}</p>
                        <p className="text-xs text-gray-500 truncate">{file.path}</p>
                    </div>
                    </div>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500 pt-8">No files found.</p>
        )}
      </div>
    </aside>
  );
};

export default FileSearch;