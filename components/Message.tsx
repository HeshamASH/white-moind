import React, { useRef, useEffect } from 'react';
import { ChatMessage, MessageRole, ElasticResult } from '../types';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import SourceDetailCard from './SourceDetailCard';

declare var hljs: any;

interface MessageProps {
  message: ChatMessage;
  onSelectSource: (source: ElasticResult) => void;
}

const UserIcon: React.FC = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" /></svg>);
const ModelIcon: React.FC = () => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9.603 13.689c.143.434.295.862.457 1.282a.75.75 0 0 1-1.42.498 9.003 9.003 0 0 1-.52-1.486.75.75 0 0 1 1.483-.594Zm4.137-.012a.75.75 0 0 1 1.42.498 9.003 9.003 0 0 1-.52 1.486.75.75 0 1 1-1.483-.594c.162-.42.314-.848.457-1.282ZM11.25 8.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z" /><path fillRule="evenodd" d="M12 21.75c-1.66 0-3.213-.42-4.596-1.182a.75.75 0 0 1 .598-1.415 7.502 7.502 0 0 0 8-10.425.75.75 0 0 1 1.415-.598A9.003 9.003 0 0 1 12 21.75Z" /></svg>);

const CodeBlock: React.FC<{ code: string; language?: string; }> = ({ code, language }) => {
  const codeRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (codeRef.current && typeof hljs !== 'undefined') {
      hljs.highlightElement(codeRef.current);
    }
  }, [code, language]);

  const langClass = language ? `language-${language}` : 'plaintext';

  return (
    <pre className="bg-gray-800 text-white rounded-md my-2">
      <code ref={codeRef} className={`text-sm font-mono block p-4 overflow-x-auto ${langClass}`}>
        {code}
      </code>
    </pre>
  );
};

// FIX: Updated renderer to match modern 'marked' API (v4+).
// This resolves type errors related to 'RendererObject' and 'Tokens'.
const renderer = {
    heading(text: string, level: number) {
        const baseClasses = "font-bold mt-4 mb-2";
        let sizeClass = "";
        const colorClass = "prose-headings:text-gray-800 dark:prose-headings:text-gray-100"; 
        
        switch (level) {
          case 1: sizeClass = "text-2xl border-b border-gray-200 dark:border-gray-600 pb-2"; break;
          case 2: sizeClass = "text-xl border-b border-gray-200 dark:border-gray-600 pb-2"; break;
          case 3: sizeClass = "text-lg"; break;
          default: sizeClass = "text-base";
        }
        return `<h${level} class="${baseClasses} ${sizeClass} ${colorClass}">${text}</h${level}>`;
    },
    table(header: string, body: string) {
        return `<div class="overflow-x-auto my-4"><table class="min-w-full divide-y divide-gray-200 dark:divide-gray-600 border border-gray-300 dark:border-gray-600">
                  <thead>${header}</thead>
                  <tbody>${body}</tbody>
                </table></div>`;
    },
    tablecell(content: string, flags: { header: boolean; align: 'center' | 'left' | 'right' | null; }) {
        const tag = flags.header ? 'th' : 'td';
        const alignClass = flags.align ? `text-${flags.align}` : 'text-left';
        const cellClasses = flags.header 
            ? `px-4 py-2 text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider ${alignClass}`
            : `px-4 py-2 text-sm text-gray-600 dark:text-gray-300 ${alignClass}`;
        
        return `<${tag} class="${cellClasses}">${content}</${tag}>`;
    },
    link(href: string, title: string | null | undefined, text: string) {
        const titleAttr = title ? `title="${title}"` : '';
        const linkColor = "text-blue-600 dark:text-blue-400 hover:underline";
        return `<a href="${href}" target="_blank" rel="noopener noreferrer" class="${linkColor}" ${titleAttr}>${text}</a>`;
    },
    list(body: string, ordered: boolean, start: number | '') {
        const tag = ordered ? 'ol' : 'ul';
        const listClasses = ordered ? "list-decimal list-inside space-y-1 my-2" : "list-disc list-inside space-y-1 my-2";
        const startAttr = (ordered && start && start !== 1) ? ` start="${start}"` : '';
        return `<${tag} class="${listClasses}"${startAttr}>${body}</${tag}>`;
    },
     listitem(text: string) {
        return `<li>${text}</li>`;
    },
    paragraph(text: string) {
        return `<p class="my-2">${text}</p>`;
    }
};


marked.use({ renderer, gfm: true });


const MarkdownRenderer: React.FC<{ text: string }> = ({ text }) => {
    const dirtyHtml = marked.parse(text) as string;
    const cleanHtml = DOMPurify.sanitize(dirtyHtml);
    return <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />;
};

const Message: React.FC<MessageProps> = ({ message, onSelectSource }) => {
  const isModel = message.role === MessageRole.MODEL;

  const renderContent = (content: string) => {
    // A simple check to ensure content is a string before processing
    if (typeof content !== 'string') {
        return null;
    }
    const parts = content.split(/(\`\`\`[\s\S]*?\`\`\`)/g);
    return parts.filter(Boolean).map((part, index) => {
      if (part.startsWith('```')) {
        const lines = part.trim().split('\n');
        const langMatch = lines[0].match(/\`\`\`(\w*)/);
        const language = langMatch ? langMatch[1] : '';
        const code = lines.slice(1, -1).join('\n');
        return <CodeBlock key={index} code={code} language={language} />;
      }
      return <MarkdownRenderer key={index} text={part} />;
    });
  };

  return (
    <div className={`flex items-start gap-4 ${!isModel && 'flex-row-reverse'}`}>
      <div className={`rounded-full p-2 flex-shrink-0 mt-1 ${isModel ? 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300' : 'bg-blue-100 text-blue-600'}`}>
        {isModel ? <ModelIcon /> : <UserIcon />}
      </div>
      <div className={`max-w-3xl w-full flex flex-col ${!isModel && 'items-end'}`}>
        <div className={`rounded-lg px-5 py-3 w-full prose prose-sm max-w-none ${isModel ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-600 dark:prose-invert' : 'bg-blue-600 text-white prose-invert'}`}>
           {message.image && (
                <img src={message.image} alt="user upload" className="rounded-md max-w-xs mb-3" />
            )}
           
          <div>
            {renderContent(message.content) || (isModel && <span className="w-2.5 h-2.5 bg-gray-400 dark:bg-gray-500 rounded-full inline-block animate-pulse"></span>)}
          </div>
          
          {isModel && message.sources && message.sources.length > 0 && (
            <div className="mt-4 border-t border-gray-300/60 dark:border-gray-500/60 pt-3">
                <h4 className={`text-xs font-bold uppercase ${isModel ? 'text-gray-500 dark:text-gray-400' : 'text-blue-200'} mb-2`}>Sources</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {message.sources.map((source, index) => (
                        <SourceDetailCard key={index} sourceResult={source} onSelectSource={() => onSelectSource(source)} />
                    ))}
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
