export default function About() {
  return (
    <div className="space-y-20 py-10 md:py-16 max-w-3xl mx-auto">
      {/* SECTION 1: Brand Story (Personal Roots) */}
      <section className="space-y-6">
        <span className="text-xs tracking-[0.2em] text-charcoal font-medium uppercase block">
          Our Journey
        </span>
        <h1 className="text-3xl md:text-4xl font-light tracking-wide text-charcoal">
          Więcej niż herbata. Rodzinna więź.
        </h1>
        <div className="text-charcoal/90 space-y-4 font-light leading-relaxed">
          <p>
            Hitotoki to historia, która zaczęła się na studiach w Japonii, a
            swój dom znalazła w Polsce. Jako japonistka i Japończyk, chcieliśmy
            dzielić się tym, co w Japonii najprawdziwsze – spokojem ukrytym w
            rytuale parzenia herbaty.
          </p>
          <p>
            Nasz eksporter i przyjaciel to rodzina, która od trzech pokoleń
            tworzy historię herbaty w Kagoshimie. Wszystko zaczęło się w 1958
            roku od Shigemitsu Yamaguchi, który całe życie poświęcił
            doskonaleniu upraw w regionie Chiran. Dziś, kontynuując jego wizję,
            dostarczamy Wam herbatę, która zdobyła uznanie nie tylko w Japonii,
            ale i rygorystyczne certyfikaty bezpieczeństwa żywności (JFS-B).
          </p>
        </div>

        {/* Highlighted USP Box: Packed in Japan */}
        <div className="mt-8 p-6 bg-charcoal/5 border-l-2 border-charcoal rounded-sm">
          <p className="text-sm text-charcoal/90 leading-relaxed font-medium">
            Co dla nas kluczowe – każda nasza herbata jest pakowana bezpośrednio
            w Japonii, w zaufanym rodzinnym chaho. Dzięki temu mamy pewność, że
            produkt, który trafia do Twoich rąk, zachowuje pełnię aromatu i
            świeżość dokładnie taką, jak w dniu zbiorów, bez zbędnych
            pośredników i ingerencji w proces.
          </p>
        </div>
      </section>
      {/* SECTION 2: Heritage & Region (Minoru-en Chaho) */}
      <section className="-mx-6 px-6">
        <div className="aspect-21/9 rounded-sm overflow-hidden bg-charcoal/5">
          <img
            src={`${import.meta.env.BASE_URL}about-us.jpg`}
            alt="Japońskie czarki z herbatą w rzędzie"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
      {/* SECTION 3: Heritage & Region (Minoru-en Chaho) */}
      <section className="space-y-6 pt-6 border-t border-charcoal/10">
        <span className="text-xs tracking-[0.2em] text-charcoal/50 font-medium uppercase block">
          Our Estate & Heritage
        </span>
        <h2 className="text-2xl font-light tracking-wide text-charcoal">
          Tradycja Minoru-en
        </h2>

        <div className="text-charcoal/90 space-y-4 font-light leading-relaxed">
          <h3 className="text-lg font-medium tracking-wide text-charcoal mt-4">
            Dziedzictwo smaku
          </h3>
          <p>
            Kiedyś herbata z Kagoshimy była jedynie dodatkiem do innych
            mieszanek. Dzięki pasji takich ludzi jak założyciel Minoru-en,
            region ten stał się drugim co do wielkości i jednym z najbardziej
            cenionych ośrodków herbacianych w Japonii. Nasza herbata Chiran-cha
            to symbol tej ewolucji – od skromnych początków po mistrzowską
            jakość.
          </p>

          <h3 className="text-lg font-medium tracking-wide text-charcoal mt-6">
            Proces i Jakość
          </h3>
          <p>
            Każda partia naszej Matchy, Hojichy i Gyokuro jest wykańczana (
            <span className="italic font-serif">shiage</span>) z niezwykłą
            starannością w Japonii. Łączymy rzemieślnicze metody z nowoczesnymi
            standardami, aby każda filiżanka była bezpieczna, świeża i
            powtarzalna w swojej doskonałości.
          </p>
        </div>

        {/* Closing statement */}
        <p className="text-base font-serif italic text-charcoal text-center pt-8">
          „W Hitotoki nie znajdziesz anonimowych produktów. Znajdziesz herbatę
          od ludzi, których znamy, cenimy i z którymi wspólnie pijemy napar przy
          jednym stole.”
        </p>
      </section>
    </div>
  );
}
