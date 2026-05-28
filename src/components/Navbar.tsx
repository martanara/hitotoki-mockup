import { useState } from "react";
import type { AppView } from "../types";

interface NavbarProps {
  currentPage: AppView;
  onNavigate: (page: AppView) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { id: AppView; label: string }[] = [
    { id: "home", label: "Strona główna" },
    { id: "store", label: "Sklep" },
    { id: "about", label: "O nas i naszej herbacie" },
    { id: "dictionary", label: "Słownik herbaty" },
  ];

  const handleNavigation = (page: AppView) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <header className="border-b border-hojicha/10 sticky top-0 bg-light/80 backdrop-blur-md z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* LOGO - Responsive behavior */}
        <button
          onClick={() => handleNavigation("home")}
          className="flex items-center gap-2 sm:gap-2.5 hover:opacity-80 transition-opacity cursor-pointer group"
        >
          {/* Text 'hito' hidden on mobile, visible from sm (640px) */}
          <span className="hidden sm:inline text-xl font-light text-lino-black tracking-widest leading-none">
            hito
          </span>

          {/* Linocut image - perfectly sized for touch on mobile */}
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="hitotoki tea bowl logo"
            className="h-8 w-auto sm:h-9 object-contain"
          />

          {/* Text 'toki' hidden on mobile, visible from sm (640px) */}
          <span className="hidden sm:inline text-xl font-light text-lino-black tracking-widest leading-none">
            toki
          </span>
        </button>

        {/* DESKTOP NAVIGATION - Hidden on mobile, flex on md (768px) */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`text-sm tracking-widest uppercase transition-colors cursor-pointer ${
                currentPage === item.id
                  ? "text-hojicha font-medium"
                  : "text-hojicha/60 hover:text-hojicha"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON - Visible only on mobile/tablet (< 768px) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden p-2 text-hojicha hover:text-hojicha transition-colors cursor-pointer focus:outline-hidden"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              // X (Close) Icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger Icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* MOBILE DROPDOWN DRAWER - Slides down elegantly when open */}
      <div
        className={`md:hidden bg-light border-b border-hojicha/5 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`text-left py-2 text-sm tracking-widest uppercase transition-colors ${
                currentPage === item.id
                  ? "text-hojicha font-medium"
                  : "text-hojicha/60"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
