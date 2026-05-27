
// Explicit type for all available views in Hitotoki app
export type AppView = 'home' | 'about' | 'dictionary' | 'store' | `product-${string}`;

export interface DictionaryItem {
  kanji: string;
  romaji: string;
  translation: string;
  description: string;
}