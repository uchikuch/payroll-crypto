import React from "react";
import hero_img from "../assets/images/hero-cryp-img.png";
import Header from "./Header";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="z-20">
        <Header />
      </div>

      <div
        className="container flex flex-col-reverse lg:flex-row items-center
      gap-0 mt-14 lg:mt-28"
      >
        {/* content */}
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h2
            className="text-3xl md:text-4 lg:font-bold lg:text-5xl lg:leading-12
            text-center lg:text-left mb-b z-10"
          >
            {" "}
            Cryp
            <br />
            In<span className="text-crypto-purple"> ____</span>
            <br />
            Your <br />
            Area<span className="text-crypto-purple">.</span>
          </h2>
          <p
            className="text-gray-400 text-sm text-center lg:text-left
          mb-6 mt-6"
          >
            Quis nostrud exercitation ullamco <br /> laboris nisi ut aliquip ex
            ea commodo <br />
            consequat. 👋
          </p>
          <div className="flex justify-center flex-wrap gap-6">
            <button
              type="button"
              className="btn btn-purple hover:bg-bookmark-white hover:text-black"
            >
              Log In
            </button>
          </div>
        </div>
        {/* Image */}
        <div
          className="flex justify-center flex-1 mb-10 md:mb-1 lg:mb-0
        z-10"
        >
          <img
            className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
            src={hero_img}
            alt=""
          />
        </div>
      </div>
      {/* Absolute rounded rectangle */}
      <div
        className="hidden md:block overflow-hidden bg-crypto-purple
      rounded-full absolute h-screen w-screen bottom-0 left-2/3"
      ></div>
      <div
        className="hidden md:block overflow-hidden bg-crypto-pink
      rounded-full absolute h-10 w-10 top-1/2 left-32"
      ></div>
    </section>
  );
}
