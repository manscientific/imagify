import React, { useEffect, useState, useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Login = () => {
  const [state, setState] = useState("Login");
  const { setShowLogin } = useContext(AppContext);

  useEffect(() => {
    // Lock background scroll when login modal is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form className="relative bg-white p-10 rounded-xl text-slate-500 w-full max-w-md shadow-xl">
        <h1 className="text-center text-2xl text-neutral-700 font-medium mb-2">
          {state}
        </h1>
        <p className="text-center text-sm mb-5">
          {state === "Login"
            ? "Welcome back! Please sign in to continue"
            : "Create your account to get started"}
        </p>

        {/* Full Name (only in Sign Up) */}
        {state !== "Login" && (
          <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5">
            <img src={assets.profile_icon} alt="User icon" className="w-5 h-5" />
            <input
              type="text"
              placeholder="Full Name"
              required
              className="flex-1 outline-none text-slate-700"
            />
          </div>
        )}

        {/* Email */}
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.email_icon} alt="Email icon" className="w-5 h-5" />
          <input
            type="email"
            placeholder="Email"
            required
            className="flex-1 outline-none text-slate-700"
          />
        </div>

        {/* Password */}
        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
          <img src={assets.lock_icon} alt="Lock icon" className="w-5 h-5" />
          <input
            type="password"
            placeholder="Password"
            required
            className="flex-1 outline-none text-slate-700"
          />
        </div>

        {/* Forgot Password */}
        {state === "Login" && (
          <p className="text-sm text-blue-600 my-4 cursor-pointer">
            Forgot password?
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 w-full text-white py-2 rounded-full mt-2 hover:bg-blue-700 transition"
        >
          {state === "Login" ? "Login" : "Create Account"}
        </button>

        {/* Toggle between Login & Sign Up */}
        {state === "Login" ? (
          <p className="mt-5 text-center">
            Don’t have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Sign Up")}
            >
              Sign up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => setState("Login")}
            >
              Login
            </span>
          </p>
        )}

        {/* Close button */}
        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          alt="Close"
          className="absolute top-5 right-5 cursor-pointer w-5 h-5"
        />
      </form>
    </div>
  );
};

export default Login;
