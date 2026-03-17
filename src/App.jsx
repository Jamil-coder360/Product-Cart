import { useState } from "react";
import "./App.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from "./pages/HomePage";
import Cart from "./Components/Cart";
import SinglePage from "./pages/SinglePage";
import BlogPage from "./pages/BlogPage";
import ProductList from "./Components/ProductList";
import ShopPage from "./pages/ShopPage";
import NotfoundPage from "./pages/NotfoundPage";
import Mainlayout from "./Components/Mainlayout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/product/:id",
        element: <SinglePage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },
      {
        path: "/product",
        element: <ProductList />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "*",
        element: <NotfoundPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
