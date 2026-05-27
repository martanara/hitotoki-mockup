export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-charcoal text-cream py-8 mt-24">
      <div className="max-w-5xl mx-auto px-6 text-center text-sm tracking-wider opacity-80">
        © {new Date().getFullYear()} hitotoki. ひととき。
      </div>
    </footer>
  );
}