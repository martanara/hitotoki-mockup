import type { Product } from "../data/products";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="py-10 md:py-16 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left: Product visual */}
        <div className="aspect-4/3 rounded-sm overflow-hidden mb-6 relative bg-charcoal/5">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          {/* Absolute overlay for the Japanese character vibe */}
          <div className="absolute top-4 left-4 bg-cream/90 backdrop-blur-sm px-2 py-1 text-xs font-serif rounded-xs">
            {product.japaneseName}
          </div>
        </div>

        {/* Right: Product Content */}
        <div className="space-y-10">
          <header className="space-y-4">
            <span className="text-xs tracking-[0.2em] text-matcha font-medium uppercase">
              {product.category}
            </span>
            <h1 className="text-4xl font-light tracking-wide">
              {product.name}
            </h1>
            <p className="text-2xl font-light">{product.price} zł</p>
          </header>

          <p className="text-charcoal/80 font-light leading-relaxed">
            {product.description}
          </p>

          {/* Tasting Notes */}
          <div className="space-y-4 pt-4">
            <h3 className="text-sm tracking-widest uppercase font-medium border-b border-charcoal/10 pb-2">
              Nuty smakowe
            </h3>
            <div className="flex flex-wrap gap-3">
              {product.tastingNotes.map((note) => (
                <span
                  key={note}
                  className="px-4 py-2 bg-charcoal/5 rounded-full text-xs tracking-wide"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>

          {/* Brewing Info */}
          <div className="grid grid-cols-3 gap-4 pt-6">
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-tighter text-charcoal/40">
                Temperatura
              </p>
              <p className="text-sm font-medium">{product.brewing.temp}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-tighter text-charcoal/40">
                Czas parzenia
              </p>
              <p className="text-sm font-medium">{product.brewing.time}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-tighter text-charcoal/40">
                Ilość / Woda
              </p>
              <p className="text-sm font-medium">{product.brewing.amount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
