import { motion } from "framer-motion";
import { PRODUCTS } from "../data/products";
import type { AppView } from "../types";

interface HomeProps {
  onNavigate: (page: AppView) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="space-y-24 py-10 md:py-16">
      {/* 1. SEKCJA HERO */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid md:grid-cols-2 gap-12 md:gap-16 items-center pt-12 pb-0 md:pt-20 md:pb-0"
      >
        {/* Left Column: Brand Catch Copy & Introduction */}
        <div className="space-y-6 text-center md:text-left">
          <span className="text-xs tracking-[0.2em] text-charcoal font-medium uppercase block">
            Kagoshima, Japan
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-charcoal leading-tight">
            Twoja japońska chwila wytchnienia.
          </h1>
          <p className="text-lg md:text-xl text-charcoal/80 font-serif italic max-w-2xl mx-auto md:mx-0 leading-relaxed pt-2">
            Autentyczna herbata z serca Kagoshimy. Od naszych przyjaciół, prosto
            do Twojej filiżanki.
          </p>
          <div className="pt-6">
            <button
              onClick={() => onNavigate("about")}
              className="border border-charcoal text-charcoal px-8 py-3 text-sm tracking-widest uppercase hover:bg-charcoal hover:text-cream transition-all duration-300 rounded-sm cursor-pointer"
            >
              Poznaj naszą historię
            </button>
          </div>
        </div>

        {/* Right Column: Hero Visual - Using the image from public/hero.jpg */}
        <div className="aspect-4/5 rounded-sm overflow-hidden bg-matcha/5 animate-fade-in delay-100 relative group">
          <img
            src={`${import.meta.env.BASE_URL}hero.jpg`}
            alt="Mglista japońska plantacja herbaty w Kagoshimie"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-700 pointer-events-none" />
        </div>
      </motion.section>

      {/* Scroll Down Indicator Button */}
      <div className="flex justify-center">
        <button
          onClick={() => {
            const element = document.getElementById("products-section");
            if (element) {
              element.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
          className="group flex flex-col items-center gap-2 text-[10px] tracking-[0.3em] uppercase text-charcoal/50 hover:text-matcha transition-colors duration-300 cursor-pointer focus:outline-hidden"
        >
          <span className="font-light">Eksploruj Hitotoki</span>

          {/* Minimalist pulsing arrow icon */}
          <svg
            className="w-4 h-4 text-charcoal/40 group-hover:text-matcha transition-colors duration-300 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>

      {/* 2. SEKCJA INTRO (O nas w dwóch zdaniach) */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-hojicha/80 rounded-sm py-16 -mx-6 px-6"
      >
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-light tracking-wide text-white">
            Osobista więź
          </h2>
          <p className="text-base md:text-lg text-white/90 leading-relaxed font-light">
            <strong className="font-medium text-white">Hitotoki</strong>{" "}
            powstało z miłości, która narodziła się w Japonii i przyjaźni, która
            przetrwała lata. Nie jesteśmy tylko sklepem – jesteśmy mostem między
            japońskim rzemiosłem a Twoim domem. Sprowadzamy dla Ciebie herbaty,
            które sami pijemy z naszą rodziną i przyjaciółmi w Japonii.
          </p>
        </div>
      </motion.section>

      <motion.section
        id="products-section"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-12"
      >
        <div className="flex items-baseline justify-between border-b border-charcoal/10 pb-4">
          <h2 className="text-2xl font-light tracking-wide text-charcoal">
            Nasze herbaty
          </h2>
          <button
            onClick={() => onNavigate("store")}
            className="text-xs tracking-widest uppercase hover:text-charcoal transition-colors cursor-pointer"
          >
            Zobacz wszystkie
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onClick={() => onNavigate(`product-${product.id}`)}
            >
              {/* Product Image */}
              <div className="aspect-4/3 rounded-sm overflow-hidden mb-6 relative group bg-charcoal/5">
                <img
                  src={`${import.meta.env.BASE_URL}${product.imageUrl.slice(1)}`}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-700 pointer-events-none" />
                <div className="absolute top-4 left-4 bg-cream/90 backdrop-blur-sm px-2 py-1 text-xs font-serif rounded-xs z-10 text-lino-black select-none pointer-events-none">
                  {product.japaneseName}
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xl font-light tracking-wide group-hover:text-charcoal transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-sm font-medium">
                    {product.price} zł
                  </span>
                </div>
                <p className="text-sm text-charcoal/60 font-light line-clamp-2">
                  {product.shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* 3. SEKCJA VALUE PROPOSITION (Trzy kolumny) */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-12"
      >
        <div className="text-center">
          <h2 className="text-xs tracking-[0.2em] text-charcoal/50 font-medium uppercase">
            Dlaczego Hitotoki?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Cecha 1 */}
          <div className="space-y-3 p-4 rounded-sm hover:bg-charcoal/5 transition-colors">
            <div className="text-charcoal text-xl font-light">01</div>
            <h3 className="text-lg font-medium tracking-wide">
              Z Kagoshimy, bez pośredników
            </h3>
            <p className="text-sm text-charcoal/70 leading-relaxed">
              Pakowana w Japonii przez zaufane{" "}
              <span className="italic font-serif">chaho</span> – sklepy
              herbaciane z tradycjami, z którymi łączą nas osobiste więzi.
            </p>
          </div>

          {/* Cecha 2 */}
          <div className="space-y-3 p-4 rounded-sm hover:bg-charcoal/5 transition-colors">
            <div className="text-charcoal text-xl font-light">02</div>
            <h3 className="text-lg font-medium tracking-wide">
              Jakość, którą czuć
            </h3>
            <p className="text-sm text-charcoal/70 leading-relaxed">
              Nasza charcoal to wszechstronność. Zachwyca głębią jako klasyczna
              czarka herbaty i otula aksamitnym smakiem w formie idealnego
              latte.
            </p>
          </div>

          {/* Cecha 3 */}
          <div className="space-y-3 p-4 rounded-sm hover:bg-charcoal/5 transition-colors">
            <div className="text-charcoal text-xl font-light">03</div>
            <h3 className="text-lg font-medium tracking-wide">
              Chwila dla Ciebie
            </h3>
            <p className="text-sm text-charcoal/70 leading-relaxed">
              Wierzymy, że każdy zasługuje na{" "}
              <span className="font-serif italic text-charcoal">hitotoki</span>{" "}
              – moment świadomego zatrzymania się w biegu dnia.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
