import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import Product from "./Product";
import {addToCart} from "../features/card/cartSlice";
const Cart = () => {
  
  const dispatch = useDispatch();
  
  const additem = (product) => {
    dispatch(addToCart(product));
  };

  const cartItems = useSelector((state) => state.cart);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Cart Items: {cartItems.length}</h2>

      {cartItems.length === 0 && <p>Your cart is empty</p>}

      <div className="grid grid-cols-4 gap-5">
      {cartItems.map((product) => (

            <Product key={product.id} product={product} additem={additem} />
        ))}
        </div>
    </div>
  );
};

export default Cart;
{/* <div className="mt-4">
  <Link
    to="/shop"
    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
  >
    Continue Shopping
  </Link>
</div> */}