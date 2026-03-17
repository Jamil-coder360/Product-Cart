import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../features/counter/counterSlice";
import ProductList from "../Components/ProductList";
import Navber from "../Components/Navber";

const HomePage = () => {
  const counter = useSelector((state) => state.counter.expert);
  console.log(counter);
  const dispatch = useDispatch();

  return (
    <>
      <ProductList />
    </>
  );
};

export default HomePage;
