import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { user, setShowLogin, logout, credit } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between py-4">
      <Link to="/">
        <img
          src={assets.logo}
          alt="Logo"
          className="w-28 sm:w-32 lg:w-40 cursor-pointer"
        />
      </Link>

      <div>
        {user ? (
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => navigate("/buy")}
              className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700"
            >
              <img className="w-5" src={assets.credit_star} alt="" />
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Credits left : {credit}
              </p>
            </button>

            <p className="text-gray-600 max-sm:hidden pl-4">
              Hi, {user.name}
            </p>

            <div className="relative group">
              <img
                src={assets.profile_icon}
                className="w-10 drop-shadow"
                alt=""
              />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                  {/* ✅ Fixed logout */}
                  <li
                    onClick={logout}
                    className="py-1 px-2 cursor-pointer pr-10 hover:bg-gray-100"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            <p
              onClick={() => navigate("/buy")}
              className="text-gray-600 cursor-pointer hover:text-gray-900"
            >
              Pricing
            </p>
            <button
              onClick={() => setShowLogin(true)}
              className="px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-blue-700"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
