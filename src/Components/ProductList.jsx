import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/card/cartSlice";
import Product from "./Product";

const ProductList = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const additem = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="p-4 mx-auto lg:max-w-screen-xl">
      <div className="border-b border-gray-300 pb-4 text-center">
        <h2 className="text-slate-900 text-2xl font-bold">Hot list</h2>
        <p className="text-slate-600 mt-2">
          Out the most popular and trending products.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
        {products?.map((p) => (
         <Product  key={p.id} product={p} additem={additem} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
