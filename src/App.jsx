import { useState } from 'react'
import './App.css'
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from './pages/HomePage';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import SingleProductpage from './pages/SingleProductpage';

const router = createBrowserRouter([
  {
    path: "/",
    element:<HomePage />,
  },
  {
    path: "/product/:id",
    element:<SingleProductpage />,
  },
  {
    path: "/cart",
    element:<Cart />,
  },
  // {
  //   path: "/",
  //   element:<HomePage />,
  // },
]);



function App() {
  return (
    <RouterProvider router={router} >

      </RouterProvider>
  );
}

export default App
