import { useState } from 'react'
import './App.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import HomePage from './pages/HomePage';
import Cart from './Components/Cart';
import SinglePage from './pages/SinglePage';

const router = createBrowserRouter([
  {
    path: "/",
    element:<HomePage />,
  },
  {
    path: "/product/:id",
    element:<SinglePage />,
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
