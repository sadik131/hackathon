import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFirst(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className="bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          <img className="h-20 w-20 object-cover" src={Logo} alt="logo" />
        </Link>

        <div className="flex items-center gap-4">
          <div className="relative">
            <span className="text-white absolute bg-red-700 h-4 w-4 flex justify-center items-center rounded-full text-xs">
              3
            </span>
            <IoMdNotificationsOutline className="text-3xl" />
          </div>
          <button className="font-semibold text-red-500">Subscription</button>
          <Link to="/admin" className="text-blue-600 hover:underline">Admin</Link>
          <Link
            to="/login"
            className="text-white text-xl bg-blue-800 px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
