import React,{useContext} from "react";
import { plans, assets } from "../assets/assets";
import {AppContext} from '../context/AppContext'

const BuyCredit = () => {
  const {user}=useContext(AppContext)
  return (
    <div className="min-h-[80vh] text-center pt-14 mb-10 bg-gray-50">
      {/* Header */}
      <button className="border border-gray-400 px-10 py-2 rounded-full mb-6 hover:bg-gray-100 transition">
        Our Plans
      </button>
      <h1 className="text-3xl font-medium mb-6 sm:mb-10">
        Choose the plan
      </h1>

      {/* Plans Grid */}
      <div className="flex flex-wrap justify-center gap-6">
        {plans.map((item, index) => (
          <div
            key={index}
            className="bg-white drop-shadow-sm border text-gray-600 rounded-lg px-8 py-12 shadow hover:scale-105 transition-all duration-500"
          >
            {/* Icon */}
            <img
              width={40}
              src={assets.logo_icon}
              alt="plan icon"
              className="w-10 h-10 mx-auto mb-4"
            />

            {/* Plan Name & Description */}
            <p className="mt-3 mb-1 font-semibold">{item.id}</p>
            <p className="text-sm">{item.desc}</p>

            {/* Price and Button */}
            <div className="mt-6 flex flex-col items-center">
              <span className="text-3xl font-medium">${item.price}</span>
              <span className="text-gray-500 text-sm">{item.credits} credits</span>
              <button className="bg-gray-800 text-white mt-4 text-sm rounded-md py-2.5 min-w-[10rem] hover:bg-gray-700 transition">
               {user?'Purchase':'Get started'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCredit;
