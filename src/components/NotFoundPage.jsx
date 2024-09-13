import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Oops! The page you're looking for doesn't exist.</p>
      
      <Link to="/" className="text-blue-600 hover:underline text-lg">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
