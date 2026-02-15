import { useLocation } from "react-router-dom";

export default function ProductDetails() {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <h1 className="text-center mt-20 text-2xl">No product data found</h1>;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">

      {/* Image */}
      <div className="bg-white rounded-3xl shadow-xl p-8">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-[420px] object-contain"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">{product.title}</h1>

        <p className="text-gray-600 text-lg mb-6">
          {product.description}
        </p>

        <div className="flex items-center gap-6 mb-6">
          <span className="text-3xl font-bold text-indigo-700">
            ${product.price}
          </span>

          <span className="text-yellow-500 text-lg font-semibold">
            ⭐ {product.rating}
          </span>
        </div>

        <button className="w-56 py-4 rounded-xl bg-black text-white text-lg font-semibold hover:scale-105 transition">
          Add To Cart
        </button>
      </div>

    </div>
  );
}

