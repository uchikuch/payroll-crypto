import React from "react";
import laptop from "../../assets/images/laptop.png";
import tri_circles from "../../assets/images/tri-circles.png";

export default function Workflow() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="container flex flex-col justify-between lg:flex-row
      gap-0 mt-12 lg:mt-48 mb-24"
      >
        {/* Title Section */}
        <div className="flex flex-1 flex-col items-start z-10">
          <p className="text-crypto-green text-xs lg:leading-12 mb-8 lg:mb-0 z-10">
            Cryp is fast, super fast.
          </p>
          <h2 className="font-medium text-4xl lg:text-7xl">
            Speed up <br /> your <br />
            workflow<span className="text-crypto-purple">.</span>
          </h2>
          <p
            className="text-gray-400 text-left
                mb-6 mt-6"
          >
            Quis nostrud exercitation ullamco <br />
            laboris nisi ut aliquip ex ea commodo <br />
            consequat. 🎉
          </p>
          <button
            type="button"
            className="btn btn-pink hover:bg-crypto-purple hover:text-white mb-12"
          >
            Sign Up
          </button>
        </div>

        <div className="flex-grow flex justify-center content-center lg:-mr-48">
          <img src={laptop} alt="" />
        </div>
      </div>
      {/* Absolute Image Backgrounds */}
      <div
        className="hidden md:block overflow-hidden
         absolute top-72 left-44 w-96"
      >
        <img src={tri_circles} alt="" className="w-full" />
      </div>
    </section>
  );
}
