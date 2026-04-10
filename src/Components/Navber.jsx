import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import menu from "../assets/hemberger.png";
import { Divide, X } from "lucide-react";
// import { cart } from "../features/card/cartSlice";
function Navber() {
  const cartItems = useSelector((state) => state.cart?.cart || []);
  const [menuOpen, setMenuOpen] = useState(false);
  function handleMenuOPen() {
    setMenuOpen(!menuOpen);
  }
  const menuItem = [
    {
      id: 1,
      text: "HOME",
      link: "/",
    },
    {
      id: 2,
      text: "SHOP",
      link: "/shop",
    },
    {
      id: 3,
      text: "PRODUCT",
      link: "/product",
    },
    {
      id: 4,
      text: "PAGES",
      link: "/pages",
    },
    {
      id: 5,
      text: "BLOG",
      link: "/blog",
    },
  ];
  // console.log(cart);

  return (
    <header className=" border-b border-gray-300 tracking-wide relative z-50">
      <section className="py-3 bg-[#1d294f] text-white text-center">
        <p className="text-sm">
          Summer Sale: Save up to 40% on select items. Limited-time offer!
        </p>
      </section>
      <div className="flex items-center justify-between gap-4 px-10 py-3 relative bg-white min-h-[65px]">
        <div className=" lg:hidden" onClick={handleMenuOPen}>
          {menuOpen ? (
            <X className="text-red-500 size-10" />
          ) : (
            <img src={menu} alt="menuber" />
          )}
        </div>

        <Link to="">
          <img src="../logo.png" alt="logo" className="w-36 h-20" />
        </Link>

        {/* desktop mode */}
        <div  className="hidden lg:flex items-center justify-center w-full   ">
          {/* <div className="lg:flex max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50"> */}
          <ul className="lg:flex lg:gap-x-8 max-lg:space-y-2">
            {menuItem?.map((items) => (
              <li
                key={items.id}
                className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3"
              >
                <Link
                  to={items.link}
                  className="hover:text-blue-700 font-medium text-blue-700 block text-[15px]"
                >
                  {items.text}
                </Link>
              </li>
            ))}
          </ul>
          {/* </div> */}
        </div>
        {/* desktop mode close */}
        {/* cart icon link */}
        <Link to="/cart">
          <div className="flex ml-auto">
            <button className="size-10 cursor-pointer relative">
              <img src="./cart.png" alt="Cart" />
              <span className="text-blue-400 text-sm absolute top-[-20px] left-0 rounded-3xl p-1 bg-amber-500/30 p-2">
               {cartItems?.length}
              </span>
            </button>
          </div>
        </Link>
      </div>
      {/* MObile mode */}
      <div
        className={`lg:hidden absolute top-[140px] left-0 w-[300px] bg-white rounded-2xl z-50 transform transition-all duration-300 ease-in-out 
  ${menuOpen ? "translate--0 opacity-100" : "-translate-x-full opacity-0 pointer-events-none"}`}
      >
        <ul className="space-y-2 p-4">
          {menuItem?.map((items) => (
            <li key={items.id} className="border-b border-gray-300 py-3">
              <Link
                to={items.link}
                className="hover:text-blue-700 font-medium text-red-500 block text-[15px]"
              >
                {items.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* mobile mode close */}
    </header>
  );
}

export default Navber;
