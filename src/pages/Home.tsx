import { PRODUCTS } from "../data/products";
import type { AppView } from "../types";

interface HomeProps {
  onNavigate: (page: AppView) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="space-y-24 py-10 md:py-16">
      {/* 1. SEKCJA HERO */}
      <section className="text-center max-w-3xl mx-auto space-y-6 py-12">
        <span className="text-xs tracking-[0.2em] text-matcha font-medium uppercase block">
          Kagoshima, Japan
        </span>
        <h1 className="text-4xl md:text-6xl font-light tracking-wide text-matcha leading-tight">
          Twoja japońska chwila wytchnienia.
        </h1>
        <p className="text-lg md:text-xl text-charcoal/80 font-serif italic max-w-2xl mx-auto leading-relaxed">
          Autentyczna herbata z serca Kagoshimy. Od naszych przyjaciół, prosto
          do Twojej filiżanki.
        </p>
        <div className="pt-4">
          <button
            onClick={() => onNavigate("about")}
            className="border border-matcha text-matcha px-8 py-3 text-sm tracking-widest uppercase hover:bg-matcha hover:text-cream transition-all duration-300 rounded-sm"
          >
            Poznaj naszą historię
          </button>
        </div>
      </section>

      {/* 2. SEKCJA INTRO (O nas w dwóch zdaniach) */}
      <section className="bg-matcha/5 border-y border-matcha/10 py-16 -mx-6 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-light tracking-wide text-matcha">
            Osobista więź
          </h2>
          <p className="text-base md:text-lg text-charcoal/90 leading-relaxed font-light">
            <strong className="font-medium text-matcha">Hitotoki</strong>{" "}
            powstało z miłości, która narodziła się w Japonii i przyjaźni, która
            przetrwała lata. Nie jesteśmy tylko sklepem – jesteśmy mostem między
            japońskim rzemiosłem a Twoim domem. Sprowadzamy dla Ciebie herbaty,
            które sami pijemy z naszą rodziną i przyjaciółmi w Japonii.
          </p>
        </div>
      </section>

      <section className="space-y-12">
        <div className="flex items-baseline justify-between border-b border-charcoal/10 pb-4">
          <h2 className="text-2xl font-light tracking-wide text-matcha">
            Nasze herbaty
          </h2>
          <button
            onClick={() => onNavigate("store")}
            className="text-xs tracking-widest uppercase hover:text-matcha transition-colors cursor-pointer"
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
              {/* Product Image Placeholder */}
              <div
                className={`aspect-4/3 ${product.color}/10 rounded-sm overflow-hidden mb-6 relative flex items-center justify-center`}
              >
                <span className="text-matcha/20 text-8xl font-serif">
                  {product.japaneseName}
                </span>
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/5 transition-colors duration-500" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xl font-light tracking-wide group-hover:text-matcha transition-colors">
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
      </section>

      {/* 3. SEKCJA VALUE PROPOSITION (Trzy kolumny) */}
      <section className="space-y-12">
        <div className="text-center">
          <h2 className="text-xs tracking-[0.2em] text-charcoal/50 font-medium uppercase">
            Dlaczego Hitotoki?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Cecha 1 */}
          <div className="space-y-3 p-4 rounded-sm hover:bg-matcha/5 transition-colors">
            <div className="text-matcha text-xl font-light">01</div>
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
          <div className="space-y-3 p-4 rounded-sm hover:bg-matcha/5 transition-colors">
            <div className="text-matcha text-xl font-light">02</div>
            <h3 className="text-lg font-medium tracking-wide">
              Jakość, którą czuć
            </h3>
            <p className="text-sm text-charcoal/70 leading-relaxed">
              Nasza matcha to wszechstronność. Zachwyca głębią jako klasyczna
              czarka herbaty i otula aksamitnym smakiem w formie idealnego
              latte.
            </p>
          </div>

          {/* Cecha 3 */}
          <div className="space-y-3 p-4 rounded-sm hover:bg-matcha/5 transition-colors">
            <div className="text-matcha text-xl font-light">03</div>
            <h3 className="text-lg font-medium tracking-wide">
              Chwila dla Ciebie
            </h3>
            <p className="text-sm text-charcoal/70 leading-relaxed">
              Wierzymy, że każdy zasługuje na{" "}
              <span className="font-serif italic text-matcha">hitotoki</span> –
              moment świadomego zatrzymania się w biegu dnia.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
