import type { Product } from "../data/products";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="py-10 md:py-16 animate-fade-in">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left: Product visual */}
        <div className="aspect-square rounded-sm overflow-hidden bg-hojicha/5 flex items-center justify-center relative group">
          {/* 1. The Main Product Image */}
          <img
            src={`${import.meta.env.BASE_URL}${product.imageUrl.slice(1)}`}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-light/10 group-hover:bg-light/15 transition-colors duration-700 pointer-events-none" />
          <span className="absolute left-6 top-1/2 -translate-y-1/2 w-[1em] text-center font-serif text-hojicha text-6xl md:text-7xl lg:text-8xl select-none pointer-events-none z-10 break-all leading-none tracking-[0.2em]">
            {product.japaneseName}
          </span>
          <div className="absolute bottom-8 right-8 text-xs tracking-[0.3em] text-light uppercase vertical-text select-none pointer-events-none z-10">
            Kagoshima Origin
          </div>
        </div>

        {/* Right: Product Content */}
        <div className="space-y-10">
          <header className="space-y-4">
            <span className="text-xs tracking-[0.2em] text-hojicha font-medium uppercase">
              {product.category}
            </span>
            <h1 className="text-4xl font-light tracking-wide">
              {product.name}
            </h1>
            <p className="text-2xl font-light">{product.price} zł</p>
          </header>

          <p className="text-hojicha/80 font-light leading-relaxed">
            {product.description}
          </p>

          {/* Tasting Notes */}
          <div className="space-y-4 pt-4">
            <h3 className="text-sm tracking-widest uppercase font-medium border-b border-hojicha/10 pb-2">
              Nuty smakowe
            </h3>
            <div className="flex flex-wrap gap-3">
              {product.tastingNotes.map((note) => (
                <span
                  key={note}
                  className="px-4 py-2 bg-hojicha/5 rounded-full text-xs tracking-wide"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>

          {/* Brewing Info */}
          <div className="grid grid-cols-3 gap-4 pt-6">
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-tighter text-hojicha/40">
                Temperatura
              </p>
              <p className="text-sm font-medium">{product.brewing.temp}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-tighter text-hojicha/40">
                Czas parzenia
              </p>
              <p className="text-sm font-medium">{product.brewing.time}</p>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-tighter text-hojicha/40">
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
