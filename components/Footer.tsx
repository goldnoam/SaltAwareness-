
import React from 'react';
import { I18nContent } from '../types';

interface FooterProps {
  t: I18nContent;
  isRTL: boolean;
}

const Footer: React.FC<FooterProps> = ({ t, isRTL }) => {
  return (
    <footer className="mt-auto py-12 px-4 border-t border-white/10">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left opacity-60">
          <p>© {t.footerText}</p>
        </div>
        
        <div className="flex items-center gap-6">
          <a 
            href="mailto:goldnoamai@gmail.com" 
            className="group flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-60 group-hover:opacity-100" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span className="font-medium underline underline-offset-4">{t.feedbackText}</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
