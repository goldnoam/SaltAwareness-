
import React from 'react';
import { I18nContent, Theme } from '../types';

interface HeaderProps {
  t: I18nContent;
  theme: Theme;
  onSpeak: (text: string) => void;
  isRTL: boolean;
}

const Header: React.FC<HeaderProps> = ({ t, theme, onSpeak, isRTL }) => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md border-b border-white/10 bg-inherit/80">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className={`flex items-center gap-2 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}>
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center shadow-lg animate-pulse">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:inline-block">HealthyHeart</span>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => onSpeak(t.title)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Speak Page Title"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
