import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Checkout() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleOrder = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
    dispatch(clearCart());

    setTimeout(() => {
      navigate("/");
    }, 2500);
  };

  if (orderPlaced) {
    return (
      <div className="h-[70vh] flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-bold text-green-600">
          Order Placed Successfully 🎉
        </h1>
        <p className="text-slate-500">
          Thank you for shopping with ShopeeGlobe
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10">

      {/* Billing Form */}
      <form
        onSubmit={handleOrder}
        className="bg-white shadow-lg rounded-2xl p-8 space-y-5"
      >
        <h2 className="text-3xl font-bold mb-6">Billing Details</h2>

        <input required placeholder="Full Name" className="w-full border p-3 rounded-lg" />
        <input required placeholder="Email Address" className="w-full border p-3 rounded-lg" />
        <input required placeholder="Phone Number" className="w-full border p-3 rounded-lg" />
        <input required placeholder="Address" className="w-full border p-3 rounded-lg" />
        <input required placeholder="City" className="w-full border p-3 rounded-lg" />
        <input required placeholder="ZIP Code" className="w-full border p-3 rounded-lg" />

        <button className="w-full py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700">
          Place Order
        </button>
      </form>

      {/* Order Summary */}
      <div className="bg-slate-50 rounded-2xl p-8 shadow-md">
        <h2 className="text-3xl font-bold mb-6">Order Summary</h2>

        <div className="space-y-4 max-h-80 overflow-auto">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between">
              <span>
                {item.title} × {item.quantity}
              </span>
              <span className="font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        <div className="border-t mt-6 pt-6 flex justify-between text-xl font-bold">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
