import React from "react";
import token_sm from "src/assets/images/token-sm.png";
import { RiArrowUpSLine } from "react-icons/ri";

export default function CoinUp() {
  return (
    <section className="flex flex-col bg-white rounded-lg p-3">
      <div className="flex justify-between">
        <img src={token_sm} alt="" className="w-8" />
        <div className="flex items-center gap-2 text-crypto-green">
          <div className="bg-crypto-lightgreen rounded-full">
            <RiArrowUpSLine className="text-md " />
          </div>
          <p className="text-sm">18.23%</p>
        </div>
      </div>
      {/* Lower Half */}
      <div className="flex mt-2">
        <div className="flex flex-col items-between">
          <p>76.82$</p>
          <p className="text-xs text-gray-400">Token</p>
        </div>
      </div>
    </section>
  );
}
