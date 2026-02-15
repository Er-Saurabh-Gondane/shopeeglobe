import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      {/* send product object in state */}
      <Link to={`/product/${product.id}`} state={{ product }}>

        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-44 w-full object-cover rounded-xl"
          loading="lazy"
        />

        <h3 className="mt-4 font-semibold text-lg line-clamp-1">
          {product.title}
        </h3>

        <p className="text-slate-500 text-sm line-clamp-2">
          {product.description}
        </p>

      </Link>

      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-bold text-indigo-700">
          ${product.price}
        </span>

        <span className="text-yellow-500 font-medium">
          ⭐ {product.rating}
        </span>
      </div>

      <button className="mt-5 w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 active:scale-95 transition-all duration-200 shadow-md hover:shadow-lg">
        Add to Cart
      </button>

    </div>
  );
}
