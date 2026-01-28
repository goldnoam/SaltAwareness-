
import React from 'react';
import { I18nContent, Language, SaltFact } from '../types';
import { getSaltFacts } from '../data';

interface SaltGuideProps {
  language: Language;
  searchQuery: string;
  t: I18nContent;
  onSpeak: (text: string) => void;
}

const SaltGuide: React.FC<SaltGuideProps> = ({ language, searchQuery, t, onSpeak }) => {
  const allFacts = getSaltFacts(language);
  
  const filteredFacts = allFacts.filter(fact => 
    fact.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    fact.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const dangers = filteredFacts.filter(f => f.category === 'danger');
  const alternatives = filteredFacts.filter(f => f.category === 'alternative');
  const foods = filteredFacts.filter(f => f.category === 'food');

  const handleShare = async (item: SaltFact) => {
    const shareText = `${item.title}: ${item.content} #SaltAwareness #HealthyHeart`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: t.title,
          text: shareText,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Error sharing", err);
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(shareText);
      alert("Fact copied to clipboard!");
    }
  };

  const Section = ({ title, items, colorClass }: { title: string, items: SaltFact[], colorClass: string }) => (
    <div className="space-y-4">
      <h3 className={`text-xl font-bold border-l-4 pl-3 py-1 ${colorClass} transition-all duration-500`}>
        {title}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, idx) => (
          <div 
            key={item.id} 
            style={{ animationDelay: `${idx * 150}ms` }}
            className="animate-card-mount group relative flex flex-col sm:flex-row gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 card-bounce-transition hover:bg-white/10 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-2xl hover:shadow-black/40 overflow-hidden"
          >
            {item.imageUrl && (
              <div className="shrink-0 w-full sm:w-24 h-24 rounded-xl overflow-hidden bg-white/5 border border-white/5">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
            )}
            
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-bold text-lg leading-tight group-hover:text-blue-400 transition-colors duration-300">{item.title}</h4>
                  <div className="flex items-center gap-1">
                    {/* Tooltip Wrapper */}
                    <div className="relative group/tooltip">
                      <button 
                        onClick={() => onSpeak(`${item.title}. ${item.content}`)}
                        className="p-2 text-slate-400 hover:text-blue-400 hover:bg-blue-400/10 rounded-full transition-all active:scale-90"
                        aria-label="Listen to fact"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.983 5.983 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.984 3.984 0 00-1.172-2.828a1 1 0 010-1.415z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-white text-[10px] rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                        Listen
                      </span>
                    </div>

                    <div className="relative group/tooltip">
                      <button 
                        onClick={() => handleShare(item)}
                        className="p-2 text-slate-400 hover:text-green-400 hover:bg-green-400/10 rounded-full transition-all active:scale-90"
                        aria-label={t.shareBtn}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                        </svg>
                      </button>
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-slate-800 text-white text-[10px] rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                        {t.shareBtn}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="opacity-70 text-sm leading-relaxed mb-3 group-hover:opacity-100 transition-opacity duration-300">{item.content}</p>
              </div>

              {item.sodiumMg && (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-red-500/10 text-red-400 text-[10px] font-bold uppercase tracking-wider w-fit group-hover:bg-red-500/20 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 012.345-2.509c.537-.05 1.054.046 1.517.222.441.168.812.438 1.077.774a3.032 3.032 0 01.577 1.233c.368.12.72.28 1.053.479.294.175.567.382.812.614a4.39 4.39 0 01.998 1.341 4.706 4.706 0 01.373 1.055 3.996 3.996 0 01.115 1.012c0 .408-.06.804-.17 1.173a1.002 1.002 0 01-.614.614 1 1 0 01-1.173.17 3.996 3.996 0 01-1.012-.115 4.706 4.706 0 01-1.055-.373 4.39 4.39 0 01-1.341-.998c-.232-.245-.439-.518-.614-.812a3.033 3.033 0 01-.479-1.053 3.033 3.033 0 01-1.233-.577 3.032 3.032 0 01-.774-1.077 2.64 2.64 0 01-.222-1.517 2.64 2.64 0 012.509-2.345c.231.02.457.075.666.162.22-.162.435-.333.64-.51a1.001 1.001 0 011.236 0c.205.177.42.348.64.51.209-.087.435-.142.666-.162z" clipRule="evenodd" />
                  </svg>
                  {item.sodiumMg}mg Sodium
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {items.length === 0 && <p className="text-sm opacity-40 italic">No items found.</p>}
    </div>
  );

  return (
    <div className="space-y-12">
      <Section title={t.dangersTitle} items={dangers} colorClass="border-red-500" />
      <Section title={t.alternativesTitle} items={alternatives} colorClass="border-green-500" />
      <Section title={t.foodsTitle} items={foods} colorClass="border-yellow-500" />
    </div>
  );
};

export default SaltGuide;
