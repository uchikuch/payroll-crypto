import React from "react";
import hero_img from "../../assets/images/hero-cryp-img.png";
import send_message from "../../assets/images/send-message.svg";
import scroll_icon from "../../assets/images/scroll-icon.svg";
import Header from "./Header";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="z-20">
        <Header />
      </div>

      <div
        className="container flex flex-col lg:flex-row items-center
      gap-0 mt-12 lg:mt-12 mb-8"
      >
        {/* content */}
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h2
            className="font-bold text-5xl lg:leading-12
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
            className="text-gray-400 text-center lg:text-left
          mb-6 mt-6"
          >
            Quis nostrud exercitation ullamco <br /> laboris nisi ut aliquip ex
            ea commodo <br />
            consequat. 👋
          </p>
          <div className="flex justify-center flex-wrap gap-6">
            <button
              type="button"
              className="btn btn-purple hover:bg-white hover:text-black"
            >
              Log In
            </button>
            <div className="flex justify-items-center gap-4">
              <img className="w-6" src={send_message} alt="" />
              <div className="text-gray-400 flex flex-col justify-items-center justify-center content-center">
                <p>Send us a message!</p>
              </div>
            </div>
          </div>
          {/* Scroll to expolore */}
          <div className="flex justify-items-center gap-4 mt-12 mb-12">
            <img className="w-6" src={scroll_icon} alt="" />
            <div className="text-gray-400 flex flex-col justify-items-center justify-center content-center">
              <p>Scroll to explore</p>
            </div>
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
      rounded-full absolute h-screen w-screen -bottom-4 left-2/3"
      ></div>
      <div
        className="hidden md:block overflow-hidden bg-crypto-pink
      rounded-full absolute h-7 w-7 top-1/2 left-16"
      ></div>
    </section>
  );
}
