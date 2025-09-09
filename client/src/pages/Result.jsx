import React, { useState, useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const { generateImage } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (input) {
      const newImage = await generateImage(input);
      if (newImage) {
        setIsImageLoaded(true);
        setImage(newImage);
      }
    }
    setLoading(false);
  };

  return (
    <form
      className="flex flex-col min-h-[90vh] justify-center items-center"
      onSubmit={onSubmitHandler}
    >
      <div>
        <div className="relative">
          <img src={image} alt="" className="max-w-sm rounded" />
          {/* Progress bar */}
          <div
            className={`absolute bottom-0 left-0 h-1 bg-blue-500 transition-all duration-[3s] ${
              loading ? "w-full" : "w-0"
            }`}
          ></div>
        </div>
        {loading && <p>Loading.....</p>}
      </div>

      {/* Input + Generate button (show only when not loaded yet) */}
      {!isImageLoaded && !loading && (
        <div className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Describe what you want to generate"
            className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-gray-400"
          />
          <button
            type="submit"
            className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full"
          >
            Generate
          </button>
        </div>
      )}

      {/* Download Section */}
      {isImageLoaded && !loading && (
        <div className="mt-6 flex items-center gap-4">
          <p
            onClick={() => {
              setIsImageLoaded(false);
              setInput("");
              setImage(null);
            }}
            className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer"
          >
            Generate Another
          </p>
          <a
            href={image}
            download
            className="bg-zinc-900 px-10 py-3 rounded-full cursor-pointer inline-block text-center text-white"
          >
            Download
          </a>
        </div>
      )}
    </form>
  );
};

export default Result;
