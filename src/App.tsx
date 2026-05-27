import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Dictionary from "./pages/Dictionary"; // Import the new Dictionary page
import Store from "./pages/Store";
import ProductDetail from "./pages/ProductDetail";
import { PRODUCTS } from "./data/products";
import type { AppView } from "./types";

function App() {
  // Local reactive state for views routing
  const [currentPage, setCurrentPage] = useState<AppView>("home");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", 
    });
  }, [currentPage]);

  return (
    <div className="min-h-screen flex flex-col bg-cream text-charcoal antialiased">
      {/* Global Navigation Header */}
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />

      {/* Dynamic Content Switching Layer */}
      <main className="grow max-w-5xl w-full mx-auto px-6">
        {currentPage === "home" && <Home onNavigate={setCurrentPage} />}
        {currentPage === "about" && <About />}
        {currentPage === "dictionary" && <Dictionary />}
        {currentPage === "store" && <Store onNavigate={setCurrentPage} />}

        {/* Dynamic Product Route Matching */}
        {currentPage.startsWith("product-") && (
          <ProductDetail
            product={
              PRODUCTS.find(
                (p) => p.id === currentPage.replace("product-", ""),
              )!
            }
          />
        )}
      </main>

      {/* Global Page Footer */}
      <Footer />
    </div>
  );
}

export default App;
