
import React, { useRef } from 'react';
import { I18nContent } from '../types';

interface SearchBarProps {
  query: string;
  setQuery: (q: string) => void;
  t: I18nContent;
  onExport: () => void;
  suggestions?: string[];
}

const SearchBar: React.FC<SearchBarProps> = ({ query, setQuery, t, onExport, suggestions = [] }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    if (data) setQuery(data);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div className="w-full space-y-4 mb-8">
      <div className="relative group">
        <input 
          ref={inputRef}
          list="salt-suggestions"
          type="text" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          placeholder={t.searchPlaceholder}
          className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/20 focus:bg-white/20 focus:ring-4 focus:ring-blue-500/20 transition-all outline-none text-lg pr-12"
          aria-label={t.searchPlaceholder}
          autoComplete="off"
        />
        <datalist id="salt-suggestions">
          {suggestions.map((s, idx) => (
            <option key={idx} value={s} />
          ))}
        </datalist>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
           {query && (
             <button 
                onClick={() => setQuery('')}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
                title={t.clearBtn}
                aria-label={t.clearBtn}
             >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
             </button>
           )}
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex gap-2">
            <button 
                onClick={onExport}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors text-sm"
                aria-label={t.exportBtn}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                {t.exportBtn}
            </button>
        </div>
        <div className="text-xs opacity-40 italic hidden sm:block">
            Supports drag & drop text for search
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
