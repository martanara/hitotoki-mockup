export interface Product {
  id: string;
  name: string;
  japaneseName: string;
  category: string;
  price: number;
  shortDescription: string;
  description: string;
  tastingNotes: string[];
  brewing: {
    temp: string;
    time: string;
    amount: string;
  };
  color: string;
  imageUrl: string; // 1. Add this new field to the interface
}

export const PRODUCTS: Product[] = [
  {
    id: 'matcha-hitotoki',
    name: 'Matcha Hitotoki',
    japaneseName: '抹茶',
    category: 'Matcha',
    price: 89,
    shortDescription: 'Nasza najbardziej wszechstronna propozycja. Idealny balans między umami a słodyczą.',
    description: 'Pochodząca z pierwszego zbioru matcha z regionu Chiran w Kagoshimie...',
    tastingNotes: ['Młody groszek', 'Słodka trawa', 'Kremowe umami'],
    brewing: { temp: '80°C', time: '1 min (whisking)', amount: '1.5g / 80ml' },
    color: 'bg-matcha',
    imageUrl: '/matcha.jpg'
  },
  {
    id: 'hojicha-chiran',
    name: 'Hojicha Chiran',
    japaneseName: '焙じ茶',
    category: 'Hojicha',
    price: 45,
    shortDescription: 'Prażona herbata o niskiej zawartości kofeiny i karmelowym aromacie.',
    description: 'Wyjątkowa hojicha z Kagoshimy, poddana procesowi mocnego prażenia...',
    tastingNotes: ['Orzech laskowy', 'Karmel', 'Ciemna czekolada'],
    brewing: { temp: '95°C', time: '30-60 sek', amount: '4g / 200ml' },
    color: 'bg-hojicha',
    imageUrl: '/hojicha.jpg'
  }
];