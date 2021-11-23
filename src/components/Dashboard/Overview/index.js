import React from "react";
import YourAssets from "./YourAssets/main";
import FavoriteCoins from "./FavoriteCoins";
import Earnings from "./Earnings";
import { BiSearch } from "react-icons/bi";
import Notification from "./Notification";
import CrypCoins from "./CrypCoins";

export default function Overview() {
  return (
    <section className="flex flex-1">
      <div className="border-r-2 w-2/3">
        <h3 className="font-semibold text-2xl">Hi Nicole,</h3>
        <h2 className="font-bold text-6xl mt-4">Welcome back 👋</h2>
        <div className="mt-12 pr-8">
          <YourAssets />
        </div>
        <div className="mt-12 pr-8">
          <FavoriteCoins />
        </div>
      </div>
      <div className="flex flex-1 flex-col px-12">
        <div className="flex gap-4 items-center">
          <BiSearch className="text-2xl" />
          <p className="text-sm text-gray-400 font-semibold">Search</p>
          <div className="flex flex-1 justify-end">
            <Notification />
          </div>
        </div>
        <div className="mt-36">
          <Earnings />
        </div>
        <div className="mt-24">
          <CrypCoins />
        </div>
      </div>
    </section>
  );
}
