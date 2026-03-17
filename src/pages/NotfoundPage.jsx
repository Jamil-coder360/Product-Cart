import React from "react";
import { Link } from "react-router";
const NotfoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-red-500">404</h1>{" "}
        <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
          Page Not Found
        </h2>
        <p className="text-gray-500 mt-2">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link to="/">
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotfoundPage;
