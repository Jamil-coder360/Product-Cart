import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router";

const Navber = () => {
  const cart = useSelector((state) => state.cart);

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
      id: 3,
      text: "BLOG",
      link: "/blog",
    },
  ];
  console.log(cart);

  return (
    <header className=" border-b border-gray-300 tracking-wide relative z-50">
      <section className="py-3 bg-[#1d294f] text-white text-center px-10">
        <p className="text-sm">
          Summer Sale: Save up to 40% on select items. Limited-time offer!
        </p>
      </section>
      <div className="flex items-center gap-4 px-10 py-3 relative bg-white min-h-[65px]">
        <Link to="">
          <img src="../logo.png" alt="logo" className="w-36 h-20" />
        </Link>
        <div
          id="collapseMenu"
          className="w-full max-lg:hidden lg:!block max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
        >
          <div className="lg:flex max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
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
          </div>
        </div>
        <Link to="/cart">
          <div className="flex ml-auto">
            <button className="size-5 cursor-pointer relative">
              <img src="./cart.png" alt="Cart" />
              <span className="text-blue-400 text-sm absolute top-[-20px] left-0 rounded-3xl p-1">
                {cart.length}
              </span>
            </button>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Navber;
