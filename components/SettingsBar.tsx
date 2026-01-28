
import React from 'react';
import { Theme, FontSize, Language } from '../types';

interface SettingsBarProps {
  theme: Theme;
  setTheme: (t: Theme) => void;
  fontSize: FontSize;
  setFontSize: (s: FontSize) => void;
  language: Language;
  setLanguage: (l: Language) => void;
  isRTL: boolean;
}

const SettingsBar: React.FC<SettingsBarProps> = ({ 
  theme, setTheme, fontSize, setFontSize, language, setLanguage, isRTL 
}) => {
  const toggleDarkBright = () => {
    if (theme === Theme.DARK) setTheme(Theme.BRIGHT);
    else setTheme(Theme.DARK);
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[95%] max-w-2xl bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-4 flex flex-wrap items-center justify-between gap-4 z-50">
      
      {/* Theme Toggle & Switch */}
      <div className="flex items-center gap-3">
        <div className="relative group/tooltip">
          <button 
            onClick={toggleDarkBright}
            className="w-10 h-6 bg-white/10 rounded-full relative transition-colors border border-white/20"
            aria-label="Toggle Dark/Bright Theme"
          >
            <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${theme === Theme.BRIGHT ? 'right-1' : 'left-1'}`}></div>
          </button>
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-2 py-1 bg-slate-800 text-white text-[10px] rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            Switch Mode
          </span>
        </div>
        
        <div className="flex items-center bg-white/10 rounded-xl p-1">
          {[Theme.DARK, Theme.BRIGHT, Theme.COLORFUL].map((t) => (
            <div key={t} className="relative group/tooltip">
              <button
                onClick={() => setTheme(t)}
                className={`px-3 py-1 rounded-lg capitalize transition-all text-xs font-bold ${
                  theme === t ? 'bg-white text-black shadow-md' : 'opacity-60 hover:opacity-100'
                }`}
                aria-label={`Set ${t} theme`}
              >
                {t[0].toUpperCase()}
              </button>
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-2 py-1 bg-slate-800 text-white text-[10px] rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {t} Theme
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Font Size */}
      <div className="flex items-center gap-2">
        <span className="text-[10px] uppercase font-bold opacity-50">Size</span>
        <div className="flex items-center bg-white/10 rounded-xl p-1">
            {[FontSize.SMALL, FontSize.MEDIUM, FontSize.LARGE].map((s) => (
              <div key={s} className="relative group/tooltip">
                <button
                    onClick={() => setFontSize(s)}
                    className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all ${
                    fontSize === s ? 'bg-white text-black' : 'opacity-60 hover:opacity-100'
                    }`}
                    aria-label={`Set font size to ${s}`}
                >
                    <span style={{ fontSize: s === FontSize.SMALL ? '10px' : s === FontSize.MEDIUM ? '14px' : '18px' }}>A</span>
                </button>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-2 py-1 bg-slate-800 text-white text-[10px] rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                  {s}
                </span>
              </div>
            ))}
        </div>
      </div>

      {/* Language Switcher */}
      <div className="relative group/tooltip">
        <select 
          value={language}
          onChange={(e) => setLanguage(e.target.value as Language)}
          className="bg-white/10 border-none rounded-xl px-3 py-2 text-xs font-bold outline-none cursor-pointer hover:bg-white/20 transition-all appearance-none text-center min-w-[120px] focus:ring-2 focus:ring-white/20"
          dir="ltr"
          aria-label="Change Language"
        >
          <option value={Language.EN}>English</option>
          <option value={Language.HE}>עברית</option>
          <option value={Language.ZH}>中文</option>
          <option value={Language.HI}>हिन्दी</option>
          <option value={Language.DE}>Deutsch</option>
          <option value={Language.ES}>Español</option>
          <option value={Language.FR}>Français</option>
          <option value={Language.JA}>日本語</option>
          <option value={Language.PT}>Português</option>
        </select>
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-2 py-1 bg-slate-800 text-white text-[10px] rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Language
        </span>
      </div>
    </div>
  );
};

export default SettingsBar;
