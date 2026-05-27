import type { AppView } from "../types";

interface NavbarProps {
  currentPage: AppView; // 2. Update type here
  onNavigate: (page: AppView) => void; // 3. Update type here
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  return (
    <header className="border-b border-charcoal/10 sticky top-0 bg-cream/80 backdrop-blur-md z-50">
      <div className="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => onNavigate('home')} 
          className="text-2xl font-light tracking-widest text-matcha hover:opacity-80 transition-opacity"
        >
          hitotoki
        </button>

        {/* Nawigacja */}
        <nav className="flex gap-8 text-sm tracking-wide">
          <button 
            onClick={() => onNavigate('home')}
            className={`hover:text-matcha transition-colors ${currentPage === 'home' ? 'text-matcha font-medium' : 'text-charcoal/70'}`}
          >
            Strona Główna
          </button>
          <button 
            onClick={() => onNavigate('store')}
            className={`hover:text-matcha transition-colors ${currentPage === 'store' ? 'text-matcha font-medium' : 'text-charcoal/70'}`}
          >
            Sklep
          </button>
          <button 
            onClick={() => onNavigate('about')}
            className={`hover:text-matcha transition-colors ${currentPage === 'about' ? 'text-matcha font-medium' : 'text-charcoal/70'}`}
          >
            O nas & Herbata
          </button>
          <button 
            onClick={() => onNavigate('dictionary')}
            className={`hover:text-matcha transition-colors ${currentPage === 'dictionary' ? 'text-matcha font-medium' : 'text-charcoal/70'}`}
          >
            Słownik
          </button>
        </nav>
      </div>
    </header>
  );
}