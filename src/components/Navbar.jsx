import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Hackathon
        </Link>

        <div>
          <Link to="/login" className="text-white text-xl bg-blue-800 px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
