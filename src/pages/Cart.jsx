import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  if (items.length === 0) {
    return (
      <div className="h-[70vh] flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold text-slate-700">
          Your cart is empty 🛒
        </h1>
        <p className="text-slate-500">
          Looks like you haven't added anything yet
        </p>
      </div>
    );
  }


  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10 text-slate-800">Shopping Cart</h1>

      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white shadow-md rounded-2xl p-5"
          >
            {/* Product */}
            <div className="flex items-center gap-5">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-xl"
                loading="lazy"
              />

              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-indigo-600 font-bold">${item.price}</p>
              </div>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => dispatch(decreaseQty(item.id))}
                className="px-3 py-1 bg-slate-200 rounded-lg hover:bg-slate-300"
              >
                −
              </button>

              <span className="font-semibold">{item.quantity}</span>

              <button
                onClick={() => dispatch(increaseQty(item.id))}
                className="px-3 py-1 bg-slate-200 rounded-lg hover:bg-slate-300"
              >
                +
              </button>
            </div>

            {/* Remove */}
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="text-red-500 font-semibold hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-12 flex justify-between items-center border-t pt-8">
        <button
          onClick={() => dispatch(clearCart())}
          className="px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600"
        >
          Clear Cart
        </button>

        <div className="text-right">
          <h2 className="text-2xl font-bold">Total: ${total.toFixed(2)}</h2>

          <button
            onClick={() => navigate("/checkout")}
            className="mt-3 px-8 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
