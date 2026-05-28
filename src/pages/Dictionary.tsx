import { useState } from 'react';
import type { DictionaryItem } from '../types';

// Array containing all tea terms with Japanese cultural vocabulary
const DICTIONARY_DATA: DictionaryItem[] = [
  {
    kanji: '茶',
    romaji: 'Cha',
    translation: 'Herbata',
    description: 'Po prostu herbata. W Japonii to słowo-klucz, które otwiera drzwi do całej kultury celebracji naparu.'
  },
  {
    kanji: '茶舗',
    romaji: 'Chaho',
    translation: 'Tradycyjny sklep z herbatą',
    description: 'To tutaj mistrzowie herbaty (Chashi) dbają o to, by liście były idealnie wyselekcjonowane i zapakowane. Nasza herbata pochodzi prosto z takiego miejsca w Kagoshimie.'
  },
  {
    kanji: '茶碗',
    romaji: 'Chawan',
    translation: 'Czarka do herbaty',
    description: 'W przypadku matchy jest ona szeroka i głęboka, by swobodnie operować w niej bambusową miotełką.'
  },
  {
    kanji: '茶筅',
    romaji: 'Chasen',
    translation: 'Bambusowa miotełka',
    description: 'Niezbędna do przygotowania Matchy. To dzięki niej uzyskasz idealną, sztywną piankę na powierzchni naparu.'
  },
  {
    kanji: '抹茶',
    romaji: 'Matcha',
    translation: 'Sproszkowana zielona herbata',
    description: 'Herbata w formie drobno zmielonego pyłu. Liście przed zbiorem są zacieniane, co nadaje im intensywny zielony kolor i mnóstwo drogocennych składników.'
  },
  {
    kanji: '焙じ茶',
    romaji: 'Hojicha',
    translation: 'Herbata prażona',
    description: 'Ma dymny, orzechowo-karmelowy aromat i bardzo niską zawartość kofeiny – idealna na wieczorne hitotoki.'
  },
  {
    kanji: '玉露',
    romaji: 'Gyokuro',
    translation: 'Szlachetna kropla rosy',
    description: 'Jedna z najszlachetniejszych herbat. Dzięki procesowi zacieniania krzewów, napar jest gęsty, słodki i pełen smaku umami.'
  },
  {
    kanji: '煎茶',
    romaji: 'Sencha',
    translation: 'Najpopularniejsza herbata w Japonii',
    description: 'Charakteryzuje się idealnym balansem między słodyczą a orzeźwiającą gładką goryczką.'
  },
  {
    kanji: '薄茶',
    romaji: 'Usucha',
    translation: 'Cienka herbata',
    description: 'To najczęstszy sposób przygotowania Matchy – lekki, codzienny, czysty i orzeźwiający.'
  }
];

export default function Dictionary() {
  // Local state to track the search input value
  const [searchQuery, setSearchQuery] = useState('');

  // Filter dictionary array based on user input (matching romaji or translation)
  const filteredItems = DICTIONARY_DATA.filter(item => 
    item.romaji.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.translation.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-12 py-10 md:py-16 max-w-3xl mx-auto">
      
      {/* Header section */}
      <section className="space-y-4 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-light tracking-wide text-hojicha">
          Słownik Hitotoki
        </h1>
        <p className="text-hojicha/70 font-light max-w-xl">
          Twój podręczny przewodnik po japońskich terminach herbacianych. Poznaj język tradycji, którą sprowadzamy do Twojego domu.
        </p>
      </section>

      {/* Interactive Search Bar Component */}
      <div className="relative">
        <input 
          type="text"
          placeholder="Szukaj terminu (np. Matcha, Chawan)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-transparent border-b border-hojicha/20 focus:border-hojicha outline-none py-3 text-sm tracking-wide transition-colors font-light placeholder:text-hojicha/40"
        />
        {searchQuery && (
          <button 
            onClick={() => setSearchQuery('')}
            className="absolute right-0 top-3 text-xs text-hojicha/40 hover:text-hojicha transition-colors"
          >
            Clear
          </button>
        )}
      </div>

      {/* Dictionary Items Grid/List layout */}
      <div className="space-y-8 pt-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div 
              key={item.romaji} 
              className="group border-b border-hojicha/5 pb-8 flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-8"
            >
              {/* Left Column: Language and naming tokens */}
              <div className="md:w-1/3 space-y-1">
                <div className="flex items-baseline gap-3">
                  <h3 className="text-xl font-medium tracking-wide text-hojicha group-hover:text-hojicha transition-colors">
                    {item.romaji}
                  </h3>
                  <span className="text-sm font-light text-hojicha/40 font-serif">
                    {item.kanji}
                  </span>
                </div>
                <p className="text-xs text-hojicha tracking-wide font-medium">
                  {item.translation}
                </p>
              </div>

              {/* Right Column: Descriptions */}
              <div className="md:w-2/3">
                <p className="text-sm text-hojicha/80 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))
        ) : (
          // Empty state placeholder
          <div className="text-center py-12 text-hojicha/40 text-sm font-light italic">
            Nie znaleźliśmy terminu pasującego do "{searchQuery}"
          </div>
        )}
      </div>

    </div>
  );
}