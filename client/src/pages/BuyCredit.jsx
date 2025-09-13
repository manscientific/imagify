import React, { useContext } from "react";
import { plans, assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const BuyCredit = () => {
  const { user, backendUrl, loadCreditsData, token, setShowLogin } =
    useContext(AppContext);
  const navigate = useNavigate();

  // Initialize Razorpay Checkout
  const initPay = async (order, transactionId) => {
    if (!window.Razorpay) {
      toast.error("Razorpay SDK not loaded");
      return;
    }

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      description: "Credits Payment",
      order_id: order.id,
      handler: async function (response) {
        try {
          // ✅ Send transactionId along with Razorpay response
          const verifyRes = await axios.post(
            backendUrl + "/api/user/verify-razor",
            {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              transactionId, // ✅ important
            },
            { headers: { token } }
          );

          if (verifyRes.data.success) {
            toast.success("Payment successful! Credits added.");
            loadCreditsData();
            navigate("/");
          } else {
            toast.error("Payment verification failed.");
          }
        } catch (err) {
          toast.error(err.response?.data?.message || err.message);
        }
      },
      prefill: {
        name: user?.name,
        email: user?.email,
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  // Create order and start payment
  const paymentRazorpay = async (planId) => {
    try {
      if (!user) {
        setShowLogin(true);
        return;
      }

      const { data } = await axios.post(
        backendUrl + "/api/user/pay-razor",
        { planId },
        { headers: { token } }
      );

      if (data.success) {
        // ✅ Pass transactionId to initPay
        initPay(data.order, data.transactionId);
      } else {
        toast.error(data.message || "Payment initialization failed");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="min-h-[80vh] text-center pt-14 mb-10 bg-gray-50">
      <button className="border border-gray-400 px-10 py-2 rounded-full mb-6 hover:bg-gray-100 transition">
        Our Plans
      </button>
      <h1 className="text-3xl font-medium mb-6 sm:mb-10">Choose the plan</h1>

      <div className="flex flex-wrap justify-center gap-6">
        {plans.map((item, index) => (
          <div
            key={index}
            className="bg-white drop-shadow-sm border text-gray-600 rounded-lg px-8 py-12 shadow hover:scale-105 transition-all duration-500"
          >
            <img
              width={40}
              src={assets.logo_icon}
              alt="plan icon"
              className="w-10 h-10 mx-auto mb-4"
            />
            <p className="mt-3 mb-1 font-semibold">{item.id}</p>
            <p className="text-sm">{item.desc}</p>
            <div className="mt-6 flex flex-col items-center">
              <span className="text-3xl font-medium">₹{item.price}</span>
              <span className="text-gray-500 text-sm">
                {item.credits} credits
              </span>
              <button
                onClick={() => paymentRazorpay(item.id)}
                className="bg-gray-800 text-white mt-4 text-sm rounded-md py-2.5 min-w-[10rem] hover:bg-gray-700 transition"
              >
                {user ? "Purchase" : "Get started"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyCredit;
