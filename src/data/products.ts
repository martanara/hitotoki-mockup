// Product interface definition
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
  color: string; // Tailwind class for background/accents
}

// Mock database of Hitotoki products
export const PRODUCTS: Product[] = [
  {
    id: 'matcha-hitotoki',
    name: 'Matcha Hitotoki',
    japaneseName: '抹茶',
    category: 'Matcha',
    price: 89,
    shortDescription: 'Nasza najbardziej wszechstronna propozycja. Idealny balans między umami a słodyczą.',
    description: 'Pochodząca z pierwszego zbioru matcha z regionu Chiran w Kagoshimie. Dzięki starannemu procesowi zacieniania i mielenia w tradycyjnych kamiennych żarnach, charakteryzuje się intensywnym kolorem i głębokim smakiem. Jest na tyle szlachetna, by pić ją tradycyjnie, i na tyle wyrazista, by stworzyć idealne matcha latte.',
    tastingNotes: ['Młody groszek', 'Słodka trawa', 'Kremowe umami'],
    brewing: {
      temp: '80°C',
      time: '1 min (whisking)',
      amount: '1.5g / 80ml'
    },
    color: 'bg-matcha'
  },
  {
    id: 'hojicha-chiran',
    name: 'Hojicha Chiran',
    japaneseName: '焙じ茶',
    category: 'Hojicha',
    price: 45,
    shortDescription: 'Prażona herbata o niskiej zawartości kofeiny i karmelowym aromacie.',
    description: 'Wyjątkowa hojicha z Kagoshimy, poddana procesowi mocnego prażenia. Proces ten niemal całkowicie eliminuje kofeinę, czyniąc ją idealnym wyborem na wieczorne hitotoki. W smaku dominują nuty orzechowe, karmelowe i lekko dymne.',
    tastingNotes: ['Orzech laskowy', 'Karmel', 'Ciemna czekolada'],
    brewing: {
      temp: '95°C',
      time: '30-60 sek',
      amount: '4g / 200ml'
    },
    color: 'bg-hojicha'
  }
];