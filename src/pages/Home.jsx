import { useState } from "react";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import ProductList from "../components/ProductList.jsx";
import useProducts from "../hooks/useProducts.js";

function Home() {
  const { products, loading, error } = useProducts();
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-sm">
        <Header />
      </div>

      <div className="max-w-7xl mx-auto px-4 pt-10 pb-16">
        <Hero />
        <div className="text-center mt-14 mb-6">
          <h2 className="text-3xl font-semibold text-slate-800">
            What are you looking for today? 🔍
          </h2>
          <p className="text-slate-500 mt-2">
            Type a product name and we’ll find it instantly
          </p>
        </div>

        {/* SEARCH BAR */}
        <div className="mt-12 flex justify-center">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full max-w-xl p-4 rounded-2xl border focus:ring-2 focus:ring-indigo-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* STATES */}
        {loading && <p className="text-center mt-10">Loading products...</p>}
        {error && <p className="text-center text-red-500 mt-10">{error}</p>}

        <ProductList products={filteredProducts} />
      </div>
    </div>
  );
}

export default Home;
