import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white p-10 md:p-16">

      {/* Glow background */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/30 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-500/30 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-3xl animate-fadeIn">

        <h2 className="text-5xl md:text-6xl font-bold leading-tight">
          Welcome to  
          <span className="block bg-gradient-to-r from-blue-300 via-indigo-300 to-slate-200 bg-clip-text text-transparent">
            ShopeeGlobe
          </span>
        </h2>

        <p className="mt-6 text-lg text-slate-200 max-w-xl">
          Discover trending products, unbeatable prices, and a seamless
          shopping experience — all in one place.
        </p>

        <div className="mt-8 flex gap-4">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-white text-blue-900 font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Shop Now
          </Link>

          <Link
            to="/cart"
            className="px-6 py-3 rounded-xl border border-white/40 hover:bg-white/10 transition"
          >
            View Cart
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Hero;
