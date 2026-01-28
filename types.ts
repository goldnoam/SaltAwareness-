
export enum Theme {
  DARK = 'dark',
  BRIGHT = 'bright',
  COLORFUL = 'colorful'
}

export enum FontSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

export enum Language {
  EN = 'en',
  HE = 'he',
  ZH = 'zh',
  HI = 'hi',
  DE = 'de',
  ES = 'es',
  FR = 'fr',
  JA = 'ja',
  PT = 'pt'
}

export interface SaltFact {
  id: string;
  title: string;
  content: string;
  category: 'danger' | 'alternative' | 'food';
  sodiumMg?: number; // Optional sodium content for foods
  imageUrl?: string; // Thumbnail image URL
}

export interface I18nContent {
  title: string;
  subtitle: string;
  searchPlaceholder: string;
  exportBtn: string;
  clearBtn: string;
  aboutTitle: string;
  aboutText: string;
  dangersTitle: string;
  alternativesTitle: string;
  foodsTitle: string;
  footerText: string;
  feedbackText: string;
  calcTitle: string;
  calcIntake: string;
  calcLimit: string;
  calcAdd: string;
  calcStatusSafe: string;
  calcStatusWarn: string;
  calcStatusDanger: string;
  shareBtn: string;
  disclaimer: string;
}
