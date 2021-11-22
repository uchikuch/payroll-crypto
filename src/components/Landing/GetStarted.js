import React from "react";
import get_started from "src/assets/images/get-started.png";
import right_arm from "src/assets/images/right-arm.png";
import mail from "src/assets/images/mail.svg";

export default function GetStarted() {
  return (
    <div>
      <section className="relative overflow-hidden bg-crypto-gray-bg">
        <div
          className="container flex flex-col items-center
            gap-0 mt-12 lg:mt-12 mb-20"
        >
          <img src={get_started} alt="" />
          <p>
            Ready to get started? <br />
            Sign up with your email
          </p>
        </div>
        {/* Absolute Image Backgrounds */}
        <div
          className="hidden md:block overflow-hidden
         absolute bottom-0 left-2/3"
        >
          <img src={right_arm} alt="" className="w-full" />
        </div>
      </section>
      <div className="flex justify-center mt-10 items-center mb-32 md:-mt-10 ">
        <div
          className="flex items-center justify-center content-evenly bg-white border-2 md:border-0
            rounded-2xl py-2 pr-2 pl-6 md:shadow-xl md:w-1/3 z-10"
        >
          <div className="lg:flex hidden flex-1">
            <img src={mail} alt="" />
          </div>
          <input
            className="pl-5 bg-transparent outline-none flex-grow
          text-gray-600 placeholder-gray-400"
            type="text"
            placeholder="Email Address"
          />
          <button
            type="button"
            className="btn btn-purple hover:bg-crypto-pink hover:text-crypto-blue-text"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
