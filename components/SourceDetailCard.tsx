import React from 'react';
import { ElasticResult } from '../types';

interface SourceDetailCardProps {
  sourceResult: ElasticResult;
  onSelectSource: () => void;
}

const FileIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 text-gray-500 dark:text-gray-400 flex-shrink-0">
        <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h6.89a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 1 .439 1.061v5.758A1.5 1.5 0 0 1 12.5 13H3.5A1.5 1.5 0 0 1 2 11.5v-8Z" />
    </svg>
);

const SourceDetailCard: React.FC<SourceDetailCardProps> = ({ sourceResult, onSelectSource }) => {
  return (
    <div 
      onClick={onSelectSource}
      className="bg-white dark:bg-gray-700/50 p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-200 cursor-pointer shadow-sm"
    >
        <div className="flex items-start gap-2">
            <FileIcon />
            <div className="overflow-hidden">
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 truncate" title={sourceResult.source.fileName}>
                    {sourceResult.source.fileName}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400" title={sourceResult.source.path}>
                    {sourceResult.source.path}
                </p>
            </div>
        </div>
        <div className="mt-2 pl-1">
            <p className="text-xs text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 p-2 rounded-md whitespace-pre-wrap max-h-24 overflow-y-auto">
                ...{sourceResult.highlightSnippet || sourceResult.contentSnippet}...
            </p>
        </div>
    </div>
  );
};

export default SourceDetailCard;