import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart, removeFromCart } from "../features/card/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart) || [];

  const removeitem = (product) => {
    dispatch(removeFromCart(product.id));
    toast.success("Product removed from cart 🗑️");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">
        Cart Items: {cartItems.length}
      </h2>

      {cartItems.length === 0 && <p>Your cart is empty</p>}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {cartItems.map((product) => (
          <div key={product.id} className="border p-3 rounded">
            <img src={product.thumbnail} className="w-full h-40 object-cover" />

            <h3 className="font-semibold">{product.description}</h3>

            <p>${product.price}</p>

            <button
              onClick={() => removeitem(product)}
              className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;