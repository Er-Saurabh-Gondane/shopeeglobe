function Loader() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-6 bg-white">

      {/* Animated Spinner */}
      <div className="relative">
        <div className="w-16 h-16 border-4 border-indigo-200 rounded-full"></div>
        <div className="w-16 h-16 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
      </div>

      {/* Text */}
      <h2 className="text-xl font-semibold text-indigo-700 tracking-wide animate-pulse">
        Loading ShopeeGlobe...
      </h2>

      <p className="text-slate-500 text-sm">
        Preparing your shopping experience
      </p>

    </div>
  );
}

export default Loader;
