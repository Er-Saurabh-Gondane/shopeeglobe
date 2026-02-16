import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { useEffect, useState } from "react";

function ProductDetails() {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // product comes from navigation OR fetch fallback
  const [product, setProduct] = useState(state?.product || null);
  const [loading, setLoading] = useState(!state?.product);

  // Fetch product if page refreshed
  useEffect(() => {
    if (!product) {
      setLoading(true);
      fetch(`https://dummyjson.com/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [id, product]);

  if (loading || !product) {
    return (
      <h1 className="text-center mt-20 text-2xl font-semibold">
        Loading product...
      </h1>
    );
  }

  // Correct discount calculation (NUMBER)
  const discountedPrice = Number(
    (product.price - (product.price * product.discountPercentage) / 100).toFixed(2)
  );

  // Add to cart
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: discountedPrice,
        thumbnail: product.thumbnail,
        stock: product.stock,
      })
    );
  };

  // Buy now (add + redirect)
  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/cart");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-16">

      {/* LEFT - IMAGES */}
      <div className="space-y-6">
        <div className="bg-white rounded-3xl shadow-xl p-10">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-105 object-contain"
          />
        </div>

        {/* thumbnails */}
        <div className="flex gap-4 overflow-x-auto">
          {product.images?.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="preview"
              className="h-24 w-24 object-cover rounded-xl border hover:scale-105 transition cursor-pointer"
            />
          ))}
        </div>
      </div>

      {/* RIGHT - DETAILS */}
      <div className="flex flex-col justify-center">

        {/* title */}
        <h1 className="text-4xl font-bold mb-3 text-slate-800">
          {product.title}
        </h1>

        {/* brand & category */}
        <p className="text-indigo-600 font-medium mb-2">
          {product.brand} • {product.category}
        </p>

        {/* rating */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-yellow-500 text-xl">
            {"⭐".repeat(Math.round(product.rating))}
          </span>
          <span className="text-gray-500">({product.rating})</span>
        </div>

        {/* price */}
        <div className="mb-6">
          <span className="text-4xl font-bold text-indigo-700 mr-4">
            ${discountedPrice}
          </span>
          <span className="line-through text-gray-400 text-xl">
            ${product.price}
          </span>
          <span className="ml-3 text-green-600 font-semibold">
            {product.discountPercentage}% OFF
          </span>
        </div>

        {/* stock */}
        <p className={`mb-6 font-medium ${product.stock > 0 ? "text-green-600" : "text-red-500"}`}>
          {product.stock > 0 ? `In Stock (${product.stock})` : "Out of Stock"}
        </p>

        {/* description */}
        <p className="text-gray-600 leading-relaxed mb-8">
          {product.description}
        </p>

        {/* buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleAddToCart}
            className="px-8 py-4 bg-indigo-600 text-white rounded-xl text-lg font-semibold hover:bg-indigo-700 hover:scale-105 transition"
          >
            Add To Cart
          </button>

          <button
            onClick={handleBuyNow}
            className="px-8 py-4 border border-slate-300 rounded-xl text-lg font-semibold hover:bg-slate-100 transition"
          >
            Buy Now
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProductDetails;
