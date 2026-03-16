import { useSelector } from "react-redux";
import { Link } from "react-router";
import Product from "./Product";
const Cart = () => {

  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Cart Items: {cartItems.length}</h2>

      {cartItems.length === 0 && <p>Your cart is empty</p>}

      <div className="grid grid-cols-4 gap-5">
      {cartItems.map((product) => (

            <Product key={product.id} product={product} />
        ))}
        </div>
    </div>
  );
};

export default Cart;