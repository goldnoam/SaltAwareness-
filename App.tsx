
import React, { useState, useMemo, useEffect } from 'react';
import { Theme, FontSize, Language } from './types';
import { translations } from './i18n';
import Header from './components/Header';
import Footer from './components/Footer';
import SaltGuide from './components/SaltGuide';
import SettingsBar from './components/SettingsBar';
import SearchBar from './components/SearchBar';
import SodiumCalculator from './components/SodiumCalculator';
import { getSaltFacts } from './data';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(Theme.DARK);
  const [fontSize, setFontSize] = useState<FontSize>(FontSize.MEDIUM);
  const [language, setLanguage] = useState<Language>(Language.EN);
  const [searchQuery, setSearchQuery] = useState('');

  const t = useMemo(() => translations[language], [language]);
  const isRTL = language === Language.HE;
  
  // Memoize fact titles for autocomplete
  const factTitles = useMemo(() => {
    return Array.from(new Set(getSaltFacts(language).map(f => f.title)));
  }, [language]);

  // Effects to handle body classes for global styles
  useEffect(() => {
    const root = document.documentElement;
    
    // Theme application
    if (theme === Theme.DARK) {
      root.className = 'bg-slate-900 text-slate-100 transition-colors duration-300';
    } else if (theme === Theme.BRIGHT) {
      root.className = 'bg-stone-50 text-stone-900 transition-colors duration-300';
    } else {
      root.className = 'bg-indigo-600 text-white transition-colors duration-300';
    }

    // Font size application
    const sizeMap = { [FontSize.SMALL]: '14px', [FontSize.MEDIUM]: '16px', [FontSize.LARGE]: '20px' };
    root.style.fontSize = sizeMap[fontSize];

    // Language Direction
    root.dir = isRTL ? 'rtl' : 'ltr';
    root.lang = language;
  }, [theme, fontSize, language, isRTL]);

  // SEO and Schema.org implementation
  useEffect(() => {
    document.title = `${t.title} | HealthyHeart`;
    
    // JSON-LD for SEO
    const scriptId = 'seo-schema-jsonld';
    let script = document.getElementById(scriptId) as HTMLScriptElement;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": t.title,
      "description": t.subtitle,
      "url": window.location.origin,
      "author": {
        "@type": "Person",
        "name": "Noam Gold"
      }
    });
  }, [t]);

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleExport = () => {
    const data = JSON.stringify({
      report: "Salt Awareness Hub User Export",
      language,
      timestamp: new Date().toISOString(),
      searchQuery: searchQuery
    }, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `salt-awareness-export-${language}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-all duration-300`}>
      <Header 
        t={t} 
        theme={theme} 
        onSpeak={handleSpeak}
        isRTL={isRTL}
      />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-5xl">
        {/* Google AdSense Area */}
        <div className="w-full h-24 bg-black/10 border border-dashed border-white/20 flex items-center justify-center mb-8 rounded-xl overflow-hidden">
          <ins className="adsbygoogle"
               style={{ display: 'block' }}
               data-ad-client="ca-pub-0274741291001288"
               data-ad-slot="auto"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
          <script>
               (adsbygoogle = window.adsbygoogle || []).push({});
          </script>
        </div>

        <section className="mb-12 text-center" aria-labelledby="main-heading">
          <h1 id="main-heading" className="text-4xl md:text-7xl font-black mb-4 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            {t.title}
          </h1>
          <p className="text-lg md:text-xl opacity-70 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            {t.subtitle}
          </p>
        </section>

        <SodiumCalculator language={language} t={t} isRTL={isRTL} />

        <SearchBar 
          query={searchQuery} 
          setQuery={setSearchQuery} 
          t={t} 
          onExport={handleExport}
          suggestions={factTitles}
        />

        <SaltGuide 
          language={language} 
          searchQuery={searchQuery} 
          t={t} 
          onSpeak={handleSpeak}
        />

        <div className="mt-12 p-8 rounded-3xl bg-black/5 backdrop-blur-sm border border-white/5 animate-in fade-in duration-1000 delay-500">
          <h2 className="text-2xl font-black mb-4 tracking-tight">{t.aboutTitle}</h2>
          <p className="text-lg opacity-70 leading-relaxed font-medium">{t.aboutText}</p>
        </div>

        {/* Disclaimer Section */}
        <div className="mt-8 p-4 rounded-2xl bg-red-500/5 border border-red-500/10 text-center animate-in fade-in duration-1000 delay-700">
          <p className="text-xs opacity-50 font-medium italic">{t.disclaimer}</p>
        </div>
      </main>

      <SettingsBar 
        theme={theme} 
        setTheme={setTheme} 
        fontSize={fontSize} 
        setFontSize={setFontSize} 
        language={language} 
        setLanguage={setLanguage}
        isRTL={isRTL}
      />

      <Footer t={t} isRTL={isRTL} />
    </div>
  );
};

export default App;
