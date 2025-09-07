import React from "react";
import { testimonialsData, assets } from "../assets/assets";

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center my-20 py-12">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        Customer testimonials
      </h1>
      <p className="text-gray-500 mb-12">What Our Users Are Saying</p>

      <div className="flex flex-wrap gap-6 justify-center">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white/20 p-12 shadow-md rounded-lg w-80 m-auto cursor-pointer transform transition duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            <div className="flex flex-col items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-full w-14 h-14 object-cover"
              />
              <div>
                <h2 className="text-xl mt-3 font-semibold">{testimonial.name}</h2>
                <p className="mb-4 text-gray-500">{testimonial.role}</p>
              </div>
            </div>

            {/* Stars */}
            <div className="flex mb-4">
              {[...Array(testimonial.stars)].map((_, index) => (
                <img
                  key={index}
                  src={assets.rating_star}
                  alt="star"
                  className="w-5 h-5"
                />
              ))}
            </div>

            {/* Testimonial text */}
            <p className="text-gray-600">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
