
import React, { useState, useMemo } from 'react';
import { I18nContent, Language, SaltFact } from '../types';
import { getSaltFacts } from '../data';

interface SodiumCalculatorProps {
  language: Language;
  t: I18nContent;
  isRTL: boolean;
}

const LIMIT = 2000;

const SodiumCalculator: React.FC<SodiumCalculatorProps> = ({ language, t, isRTL }) => {
  const [intake, setIntake] = useState<SaltFact[]>([]);
  const allFoods = useMemo(() => getSaltFacts(language).filter(f => f.category === 'food'), [language]);

  const totalSodium = intake.reduce((sum, item) => sum + (item.sodiumMg || 0), 0);
  const percentage = Math.min((totalSodium / LIMIT) * 100, 100);

  const getStatusColor = () => {
    if (totalSodium > LIMIT) return 'bg-red-500';
    if (totalSodium > LIMIT * 0.75) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getStatusText = () => {
    if (totalSodium > LIMIT) return t.calcStatusDanger;
    if (totalSodium > LIMIT * 0.75) return t.calcStatusWarn;
    return t.calcStatusSafe;
  };

  const addItem = (food: SaltFact) => {
    setIntake([...intake, { ...food, id: `${food.id}-${Date.now()}` }]);
  };

  const removeItem = (id: string) => {
    setIntake(intake.filter(item => item.id !== id));
  };

  return (
    <div className="my-12 p-8 rounded-3xl bg-black/10 backdrop-blur-md border border-white/10 shadow-xl overflow-hidden relative">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl -z-10 rounded-full"></div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side: Stats */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-black tracking-tight">{t.calcTitle}</h2>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-bold opacity-70">
              <span>{t.calcIntake}</span>
              <span>{totalSodium} / 2,000 mg</span>
            </div>
            <div className="h-4 w-full bg-white/10 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-700 ease-out ${getStatusColor()}`}
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
            <p className={`text-sm font-medium transition-all ${totalSodium > LIMIT ? 'text-red-400' : 'opacity-80'}`}>
              {getStatusText()}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {allFoods.map(food => (
              <button
                key={food.id}
                onClick={() => addItem(food)}
                className="group flex items-center gap-3 p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/15 active:scale-95 transition-all text-left overflow-hidden relative"
              >
                {food.imageUrl && (
                  <img 
                    src={food.imageUrl} 
                    alt={food.title} 
                    className="w-10 h-10 rounded-lg object-cover grayscale group-hover:grayscale-0 transition-all"
                  />
                )}
                <div>
                  <div className="text-[11px] font-black leading-tight">{food.title}</div>
                  <div className="text-[10px] opacity-40">{food.sodiumMg}mg</div>
                </div>
                {/* Visual Tooltip inside button for Add action */}
                <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                   </svg>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: List */}
        <div className="md:w-64 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold opacity-60 text-sm uppercase tracking-widest">{t.calcIntake}</h3>
            {intake.length > 0 && (
                <button 
                  onClick={() => setIntake([])} 
                  className="text-xs text-blue-400 hover:text-blue-300 font-bold underline underline-offset-4 decoration-2"
                >
                    {t.clearBtn}
                </button>
            )}
          </div>
          <div className="max-h-64 overflow-y-auto space-y-2 pr-2 no-scrollbar">
            {intake.length === 0 ? (
                <div className="h-32 flex flex-col items-center justify-center border-2 border-dashed border-white/5 rounded-2xl text-xs opacity-30 gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Track your daily sodium</span>
                </div>
            ) : (
                intake.map(item => (
                    <div key={item.id} className="flex justify-between items-center p-3 rounded-xl bg-white/5 group animate-in slide-in-from-right-4 duration-300 border border-white/5 hover:border-white/10">
                      <div className="flex items-center gap-3">
                        {item.imageUrl && (
                          <img src={item.imageUrl} alt="" className="w-8 h-8 rounded-lg object-cover" />
                        )}
                        <div>
                          <div className="text-sm font-bold">{item.title}</div>
                          <div className="text-[10px] opacity-40">{item.sodiumMg}mg</div>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="p-1 hover:bg-red-500/20 text-red-400 rounded transition-colors opacity-0 group-hover:opacity-100"
                        title="Remove"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SodiumCalculator;
