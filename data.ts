
import { SaltFact, Language } from './types';

export const getSaltFacts = (lang: Language): SaltFact[] => {
  const isHe = lang === Language.HE;
  const isZh = lang === Language.ZH;
  const isHi = lang === Language.HI;
  const isDe = lang === Language.DE;
  const isEs = lang === Language.ES;
  const isFr = lang === Language.FR;
  const isJa = lang === Language.JA;
  const isPt = lang === Language.PT;

  const t = (en: string, he: string, zh: string, hi: string, de: string, es: string, fr: string, ja: string, pt: string) => {
    if (isHe) return he;
    if (isZh) return zh;
    if (isHi) return hi;
    if (isDe) return de;
    if (isEs) return es;
    if (isFr) return fr;
    if (isJa) return ja;
    if (isPt) return pt;
    return en;
  };

  return [
    {
      id: '1',
      category: 'danger',
      title: t('Hypertension', 'יתר לחץ דם', '高血压', 'उच्च रक्तचाप', 'Hypertonie', 'Hipertensión', 'Hypertension', '高血圧', 'Hipertensão'),
      imageUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=200&h=200',
      content: t(
        'High salt intake significantly raises blood pressure.',
        'צריכת מלח גבוהה מעלה את לחץ הדם באופן משמעותי.',
        '过量摄入盐分会显着升高血压。',
        'नमक का अधिक सेवन रक्तचाप को काफी बढ़ा देता है।',
        'Ein hoher Salzkonsum erhöht den Blutdruck signifikant.',
        'La ingesta elevada de sal aumenta significativamente la presión arterial.',
        'Une consommation élevée de sel augmente considérablement la pression artérielle.',
        '高い塩分摂取は血圧を著しく上昇させます。',
        'A ingestão elevada de sal aumenta significativamente a pressão arterial.'
      )
    },
    {
      id: '2',
      category: 'danger',
      title: t('Kidney Disease', 'מחלות כליה', '肾脏疾病', 'गुर्दे की बीमारी', 'Nierenerkrankung', 'Enfermedad Renal', 'Maladie Rénale', '腎臓病', 'Doença Renal'),
      imageUrl: 'https://images.unsplash.com/photo-1628150175881-285652599607?auto=format&fit=crop&q=80&w=200&h=200',
      content: t(
        'Excess sodium puts strain on kidneys and impairs filtration.',
        'עודף נתרן גורם לעומס על הכליות ומקשה על סינון הרעלים.',
        '过量的钠会增加肾脏负担并损害过滤功能。',
        'अतिरिक्त सोडियम गुर्दे पर दबाव डालता है और निस्पंदन को बाधित करता है।',
        'Überschüssiges Natrium belastet die Nieren und beeinträchtigt die Filtration.',
        'El exceso de sodio ejerce presión sobre los riñones y dificulta la filtración.',
        'L\'excès de sodium fatigue les reins et altère la filtration.',
        '過剰なナトリウムは腎臓に負担をかけ、ろ過機能を低下させます。',
        'O excesso de sódio sobrecarrega os rins e prejudica a filtração.'
      )
    },
    {
      id: '3',
      category: 'alternative',
      title: t('Fresh Lemon', 'לימון טרי', '新鲜柠檬', 'ताजा नींबू', 'Frische Zitrone', 'Limón Fresco', 'Citron Frais', '新鮮なレモン', 'Limão Fresco'),
      imageUrl: 'https://images.unsplash.com/photo-1590502593747-42a996133562?auto=format&fit=crop&q=80&w=200&h=200',
      content: t(
        'Lemon juice adds tang and flavor that reduces the need for salt.',
        'מיץ לימון מוסיף חמיצות וטעם שמחליפים את הצורך במליחות.',
        '柠檬汁增加酸味和风味，减少对盐的需求。',
        'नींबू का रस तीखापन और स्वाद जोड़ता है जिससे नमक की आवश्यकता कम हो जाती है।',
        'Zitronensaft sorgt für Würze und Aroma, was den Bedarf an Salz reduziert.',
        'El jugo de limón agrega acidez y sabor que reduce la necesidad de sal.',
        'Le jus de citron ajoute du peps et de la saveur, ce qui réduit le besoin de sel.',
        'レモン汁は酸味と風味を加え、塩の必要性を減らします。',
        'O suco de limão adiciona acidez e sabor, reduzindo a necessidade de sal.'
      )
    },
    {
      id: '4',
      category: 'alternative',
      title: t('Herbs & Spices', 'עשבי תיבול', '香草和香料', 'जड़ी-बूटियाँ और मसाले', 'Kräuter & Gewürze', 'Hierbas y Especias', 'Herbes & Épices', 'ハーブとスパイス', 'Ervas e Especiarias'),
      imageUrl: 'https://images.unsplash.com/photo-1599940824399-b87987cb9723?auto=format&fit=crop&q=80&w=200&h=200',
      content: t(
        'Garlic, onion, rosemary, and cumin enrich dishes without sodium.',
        'שום, בצל, רוזמרין וכמון מעשירים את המנה ללא נתרן.',
        '大蒜、洋葱、迷迭香和孜然可以在不含钠的情况下丰富菜肴。',
        'लहसुन, प्याज, मेंहदी और जीरा सोडियम के बिना व्यंजनों को समृद्ध करते हैं।',
        'Knoblauch, Zwiebeln, Rosmarin und Kreuzkümmel bereichern Gerichte ohne Natrium.',
        'El ajo, la cebolla, el romero y el comino enriquecen los platos sin sodio.',
        'L\'ail, l\'oignon, le romarin et le cumin enrichissent les plats sans sodium.',
        'にんにく、玉ねぎ、ローズマリー、クミンはナトリウムなしで料理を豊かにします。',
        'Alho, cebola, alecrim e cominho enriquecem os pratos sem sódio.'
      )
    },
    {
      id: '5',
      category: 'food',
      title: t('Canned Foods', 'שימורים', '罐装食品', 'डिब्बाबंद खाद्य पदार्थ', 'Konserven', 'Alimentos Enlatados', 'Aliments en Conserve', '缶詰食品', 'Alimentos Enlatados'),
      imageUrl: 'https://images.unsplash.com/photo-1534483509719-3feaee7c30da?auto=format&fit=crop&q=80&w=200&h=200',
      content: t(
        'Canned vegetables and soups contain massive amounts of salt for preservation.',
        'ירקות ומרקים משומרים מכילים כמויות אדירות של מלח לשימור.',
        '罐装蔬菜和汤含有大量用于防腐的盐。',
        'डिब्बाबंद सब्जियों और सूप में संरक्षण के लिए भारी मात्रा में नमक होता है।',
        'Gemüsekonserven und Suppen enthalten massive Mengen an Salz zur Konservierung.',
        'Las verduras y sopas enlatadas contienen cantidades masivas de sal para su conservación.',
        'Les légumes et soupes en conserve contiennent des quantités massives de sel pour la conservation.',
        '缶詰の野菜やスープには保存のために大量の塩が含まれています。',
        'Vegetais e sopas enlatados contêm quantidades maciças de sal para conservação.'
      ),
      sodiumMg: 800
    },
    {
      id: '6',
      category: 'food',
      title: t('Processed Meat', 'בשר מעובד', '加工肉类', 'प्रसंस्कृत मांस', 'Verarbeitetes Fleisch', 'Carne Procesada', 'Viande Transformée', '加工肉', 'Carne Processada'),
      imageUrl: 'https://images.unsplash.com/photo-1532186773960-85649e5cb70b?auto=format&fit=crop&q=80&w=200&h=200',
      content: t(
        'Sausages and deli meats are among the highest sources of sodium in diet.',
        'נקניקים ופסטרמות הם מהמקורות הגדולים ביותר לנתרן בתזונה.',
        '香肠和熟肉是饮食中钠含量最高来源之一。',
        'सॉसेज और डेली मीट आहार में सोडियम के उच्चतम स्रोतों में से हैं।',
        'Würste und Aufschnitt gehören zu den größten Natriumquellen in der Ernährung.',
        'Los embutidos y carnes frías se encuentran entre las fuentes más altas de sodio en la dieta.',
        'Les saucisses et les charcuteries sont parmi les sources les plus élevées de sodium dans l\'alimentation.',
        'ソーセージやデリミートは、食事の中で最もナトリウムが多い食品の一つです。',
        'Salsichas e frios estão entre as maiores fontes de sódio na dieta.'
      ),
      sodiumMg: 1200
    },
    {
      id: '7',
      category: 'food',
      title: t('Frozen Pizza', 'פיצה', '冷冻披萨', 'फ्रोजन पिज्जा', 'Tiefkühlpizza', 'Pizza Congelada', 'Pizza Surgelée', '冷凍ピザ', 'Pizza Congelada'),
      imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=200&h=200',
      content: t(
        'A single serving of frozen pizza can contain half of the recommended daily intake.',
        'מנה אחת של פיצה קפואה יכולה להכיל מחצית מהצריכה היומית המומלצת.',
        '一份冷冻披萨可能含有建议每日摄入量的一半。',
        'फ्रोजन पिज्जा की एक सर्विंग में अनुशंसित दैनिक सेवन का आधा हिस्सा हो सकता है।',
        'Eine einzige Portion Tiefkühlpizza kann die Hälfte der empfohlenen Tagesdosis enthalten.',
        'Una sola porción de pizza congelada puede contener la mitad de la ingesta diaria recomendada.',
        'Une seule portion de pizza surgelée peut contenir la moitié de l\'apport quotidien recommandé.',
        '冷凍ピザ1人前で、1日の推奨摂取量の半分が含まれていることがあります。',
        'Uma única porção de pizza congelada pode conter metade da ingestão diária recomendada.'
      ),
      sodiumMg: 1000
    },
    {
      id: '8',
      category: 'food',
      title: t('Soy Sauce', 'רוטב סויה', '酱油', 'सोया सॉस', 'Sojasauce', 'Salsa de Soja', 'Sauce Soja', '醤油', 'Molho de Soja'),
      imageUrl: 'https://images.unsplash.com/photo-1622325514013-10bc302636f2?auto=format&fit=crop&q=80&w=200&h=200',
      content: t(
        'One tablespoon of soy sauce contains nearly 1000mg of sodium.',
        'כף אחת של רוטב סויה מכילה כמעט 1000 מ״ג נתרן.',
        '一汤匙酱油含有近 1000 毫克的钠。',
        'एक बड़ा चम्मच सोया सॉस में लगभग 1000 मिलीग्राम सोडियम होता है।',
        'Ein Esslöffel Sojasauce enthält fast 1000 mg Natrium.',
        'Una cucharada de salsa de soja contiene casi 1000 mg de sodio.',
        'Une cuillère à soupe de sauce soja contient près de 1000 mg de sodium.',
        '醤油大さじ1杯には、約1000mgのナトリウムが含まれています。',
        'Uma colher de sopa de molho de soja contém quase 1000mg de sódio.'
      ),
      sodiumMg: 900
    },
    {
      id: '9',
      category: 'food',
      title: t('Salty Snacks', 'חטיפים מלוחים', '咸味零食', 'नमकीन स्नैक्स', 'Salzige Snacks', 'Snacks Salados', 'Snacks Salés', '塩辛いスナック', 'Snacks Salgados'),
      imageUrl: 'https://images.unsplash.com/photo-1599490659213-e2b9527bb087?auto=format&fit=crop&q=80&w=200&h=200',
      content: t(
        'Chips and pretzels are loaded with salt to enhance thirst and flavor.',
        'צ׳יפס ובייגלה עמוסים במלח כדי להגביר את תחושת הצימאון והטעם.',
        '薯片和椒盐脆饼富含盐分，以增强口渴感和风味。',
        'चिप्स और प्रेट्ज़ेल प्यास और स्वाद बढ़ाने के लिए नमक से भरे होते हैं।',
        'Chips und Brezeln sind voller Salz, um Durst und Geschmack zu verstärken.',
        'Las papas fritas y los pretzels están cargados de sal para aumentar la sed y el sabor.',
        'Les chips et les bretzels sont chargés de sel pour accentuer la soif et la saveur.',
        'チップスやプレッツェルは喉の渇きと風味を高めるために塩がたっぷり入っています。',
        'Chips e pretzels são carregados de sal para aumentar a sede e o sabor.'
      ),
      sodiumMg: 500
    }
  ];
};
