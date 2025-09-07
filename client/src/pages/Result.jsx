import React, { useState } from "react";
import { assets } from "../assets/assets";

const Result = () => {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const[input,setInput]=useState('');
 

  const onSubmitHandler = async(e)=>
  {

  }

  return (
    <form
      className="flex flex-col min-h-[90vh] justify-center items-center"
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        // simulate API call
        setTimeout(() => {
          setImage(assets.sample_img_1); // replace with generated image
          setIsImageLoaded(true);
          setLoading(false);
        }, 3000);
      }}
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
          <input onChange={e=>setInput(e.target.value)} value={input}
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
            onClick={() => setIsImageLoaded(false)}
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
