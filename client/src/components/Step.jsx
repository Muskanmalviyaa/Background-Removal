import React from "react";
import { assets } from "../assets/assets";

const Step = () => {
  return (
    <div className="mx-4 lg:mx-44  py-20 lg:py-40">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent">
        Steps to remove background <br /> image in second
      </h1>

      <div className="flex items-center flex-wrap gap-3 mt-15 xl:mt-24 justify-center">
        <div className="flex items-start gap-4 bg-white border border-transparent hover:border-gray-300 drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500 will-change-transform cursor-pointer">
          <img
            src={assets.upload_icon}
            alt="Upload Icon"
            className="max-w-9"
          />
          <div>
            <p className="font-medium text-xl">Upload Image</p>
            <p className="text-neutral-500 tetx-sm mt-1">
              This is a demo text, will replace it later.<br /> This is a demo.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white border border-transparent hover:border-gray-300 drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500 will-change-transform cursor-pointer">
          <img
            src={assets.remove_bg_icon}
            alt="Upload Icon"
            className="max-w-9"
          />
          <div>
            <p className="font-medium text-xl">Remove background</p>
            <p className="text-neutral-500 tetx-sm mt-1">
              This is a demo text, will replace it later.<br /> This is a demo.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white border border-transparent hover:border-gray-300 drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500 will-change-transform cursor-pointer">
          <img
            src={assets.download_icon}
            alt="Upload Icon"
            className="max-w-9"
          />
          <div>
            <p className="font-medium text-xl">Dowload Image</p>
            <p className="text-neutral-500 tetx-sm mt-1">
              This is a demo text, will replace it later.<br /> This is a demo.
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Step;
