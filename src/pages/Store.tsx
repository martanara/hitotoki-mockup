import { PRODUCTS } from "../data/products";
import type { AppView } from "../types";

interface StoreProps {
  onNavigate: (page: AppView) => void;
}

export default function Store({ onNavigate }: StoreProps) {
  return (
    <div className="grow max-w-5xl w-full mx-auto space-y-12 py-10 md:py-16">
      {/* Header section */}
      <section className="space-y-4 text-center md:text-left">
        <span className="text-xs tracking-[0.2em] text-hojicha font-medium uppercase block">
          Kolekcja Hitotoki
        </span>
        <h1 className="text-3xl md:text-4xl font-light tracking-wide text-hojicha">
          Nasze japońskie herbaty
        </h1>
        <p className="text-hojicha/70 font-light max-w-xl">
          Starannie wyselekcjonowane liście, pakowane bezpośrednio w Japonii.
          Znajdź swoją idealną odmianę na każdą porę dnia.
        </p>
      </section>

      {/* Grid containing all products in the database */}
      <div className="grid md:grid-cols-2 gap-12 pt-6">
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            className="group cursor-pointer"
            onClick={() => onNavigate(`product-${product.id}`)}
          >
            {/* Image container box */}
            <div className="aspect-4/3 rounded-sm overflow-hidden mb-6 relative group bg-hojicha/5">
              <img
                src={`${import.meta.env.BASE_URL}${product.imageUrl.slice(1)}`}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-light/10 group-hover:bg-light/20 transition-colors duration-700 pointer-events-none" />
              <div className="absolute top-4 left-4 bg-cream/90 backdrop-blur-sm px-2 py-1 text-xs font-serif rounded-xs z-10 text-lino-black select-none pointer-events-none">
                {product.japaneseName}
              </div>
            </div>

            {/* Title & metadata footer */}
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <h3 className="text-xl font-light tracking-wide group-hover:text-hojicha transition-colors">
                  {product.name}
                </h3>
                <span className="text-sm font-medium">{product.price} zł</span>
              </div>
              <p className="text-sm text-hojicha/60 font-light">
                {product.shortDescription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
