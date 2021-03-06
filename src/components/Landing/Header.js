import React from "react";
import logo from "src/assets/images/logo-crypt.svg";
import { FaBars } from "react-icons/fa";

export default function Header() {
  return (
    <div className="relative">
      <header>
        <nav className="container flex items-center py-4 mt-2 sm:mt-4">
          <div className="py-1 z-10">
            <img
              className="w-1/2 h-5/6 sm:w-1/2 sm:h-3/4 md:w-1/2 md:h-full z-10"
              src={logo}
              alt=""
            ></img>
          </div>
          <ul
            className="hidden md:flex flex-1 justify-center items-center 
          gap-12 text-gray text-s z-10"
          >
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Rank</li>
            <li className="cursor-pointer">Reward</li>
            <li className="cursor-pointer">Farms (beta)</li>
            <li className="cursor-pointer">Pools</li>
          </ul>
          <div className="hidden md:flex justify-end">
            <button
              type="button"
              className="bg-crypto-pink text-crypto-blue-text rounded-2xl
              px-7 py-4 z-10"
            >
              Connect Wallet
            </button>
          </div>
          <div className="flex md:hidden flex-1 justify-end">
            <FaBars className="text-2xl" />
          </div>
        </nav>
        <div
          className="hidden md:block overflow-hidden bg-crypto-yellow
      rounded-full absolute h-96 w-96 -top-44 -left-40"
        ></div>
      </header>
    </div>
  );
}
