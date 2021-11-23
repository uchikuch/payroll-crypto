import React from "react";
import Bitcoin from "./Bitcoin";
import Token from "./Token";
import Ethereum from "./Ethereum";
import CircularProgress from "./CircularProgress";
import { FiEye } from "react-icons/fi";

export default function YourAssets() {
  return (
    <section className="rounded-xl px-6 py-6 shadow-xl">
      <h2>Your Assets</h2>
      <div className="flex flex-col md:flex-row gap-2 mt-4 justify-between">
        {/* Tokens */}
        <div className="flex flex-col">
          <div>
            <Token />
          </div>
          <div className="mt-4">
            <Bitcoin />
          </div>
          <div className="mt-4">
            <Ethereum />
          </div>
        </div>
        {/* Circular Progress */}
        <div className="flex flex-col justify-center mt-10 md:mt-0 items-center sm:pr-10">
          <CircularProgress />
          <div className="font-semibold mt-2">Bitcoin</div>
          <div className="text-xs text-gray-400 mt-2">BTC</div>
          <div
            type="button"
            className="flex justify-center cursor-pointer gap-2 btn btn-purple hover:bg-crypto-pink hover:text-black mt-4"
          >
            <FiEye className="text-2xl" /> See all Coins
          </div>
        </div>
      </div>
    </section>
  );
}
