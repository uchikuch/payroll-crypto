import React from "react";
import YourAssets from "../Balance/YourAssets";
import FavoriteCoins from "./FavoriteCoins";
import Earnings from "./Earnings";
import { BiSearch } from "react-icons/bi";
import Notification from "./Notification";
import CrypCoins from "./CrypCoins";

export default function Overview() {
  return (
    <section className="container flex flex-col lg:flex-row flex-1">
      <div className="lg:border-r-2 lg:w-2/3">
        <h3 className="font-semibold text-xl sm:text-2xl">Hi Nicole,</h3>
        <h2 className="font-bold text-3xl sm:text-6xl mt-4">Welcome back 👋</h2>
        <div className="mt-12 sm:pr-8">
          <YourAssets />
        </div>
        <div className="mt-12 sm:pr-8">
          <FavoriteCoins />
        </div>
      </div>
      <div className="flex flex-1 flex-col sm:px-12 mt-10 lg:mt-0">
        <div className="flex gap-4 items-center">
          <BiSearch className="text-2xl" />
          <input
            className="pl-5 bg-transparent outline-none flex-grow
          text-gray-600 placeholder-gray-400"
            type="text"
            placeholder="Search"
          />
          <div className="flex flex-1 justify-end">
            <Notification />
          </div>
        </div>
        <div className="mt-12 sm:mt-36">
          <Earnings />
        </div>
        <div className="mt-12 sm:mt-24">
          <CrypCoins />
        </div>
      </div>
    </section>
  );
}
