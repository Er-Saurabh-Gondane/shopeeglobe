import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../store/cartSlice";

export default function Cart() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // total price
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // empty cart
  if (items.length === 0) {
    return (
      <div className="text-center mt-24">
        <h1 className="text-3xl font-semibold text-gray-600">
          Your Cart is Empty 🛒
        </h1>
        <p className="text-gray-400 mt-2">
          Looks like you haven't added anything yet
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">

      <h1 className="text-4xl font-bold mb-10">Shopping Cart</h1>

      {/* ITEMS */}
      <div className="space-y-6">
        {items.map(item => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row md:items-center justify-between bg-white shadow-md rounded-2xl p-6"
          >

            {/* Left - product */}
            <div className="flex items-center gap-6">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-28 w-28 object-cover rounded-xl"
              />

              <div>
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-500">${item.price}</p>
              </div>
            </div>

            {/* Middle - quantity */}
            <div className="flex items-center gap-4 mt-6 md:mt-0">
              <button
                onClick={() => dispatch(decreaseQty(item.id))}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                −
              </button>

              <span className="text-lg font-semibold">{item.quantity}</span>

              <button
                onClick={() => dispatch(increaseQty(item.id))}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                +
              </button>
            </div>

            {/* Right - subtotal & remove */}
            <div className="text-right mt-6 md:mt-0">
              <p className="text-xl font-bold mb-2">
                ${(item.price * item.quantity).toFixed(2)}
              </p>

              <button
                onClick={() => dispatch(removeItem(item.id))}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* TOTAL */}
      <div className="mt-12 text-right border-t pt-6">
        <h2 className="text-3xl font-bold">
          Total: ${total.toFixed(2)}
        </h2>

        <button className="mt-6 px-8 py-4 bg-indigo-600 text-white rounded-xl text-lg font-semibold hover:bg-indigo-700 transition">
          Proceed to Checkout
        </button>
      </div>

    </div>
  );
}
