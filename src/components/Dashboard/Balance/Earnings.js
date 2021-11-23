import React from "react";
import BarChartArea from "./BarChartArea";

export default function Earnings() {
  return (
    <div className="flex flex-col justify-between items-center shadow-xl rounded-2xl flex-1 py-8 px-6 flex-grow">
      <div className="pb-4 mt-4">
        <BarChartArea />
      </div>
      <p className="font-semibold">Your earning this month</p>
      <h2 className="font-bold text-crypto-purple text-6xl mt-6">479.4</h2>
      <p className="text-gray-400 text-sm mt-6">
        Update your payout <br />
        method in Settings
      </p>
      <div
        type="button"
        className="flex text-sm md:text-lg justify-center cursor-pointer gap-2 btn text-crypto-purple hover:bg-crypto-purple hover:text-white mt-4"
      >
        Withdraw All Earning
      </div>
    </div>
  );
}
