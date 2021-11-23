import React from "react";
import v_stable from "src/assets/images/v-stable.png";
import { RiArrowDownSLine } from "react-icons/ri";

export default function CoinUp() {
  return (
    <section className="flex flex-col bg-white rounded-lg p-3">
      <div className="flex justify-between">
        <img src={v_stable} alt="" className="w-8" />
        <div className="flex items-center gap-2 text-crypto-red">
          <div className="bg-crypto-lightred rounded-full">
            <RiArrowDownSLine className="text-md " />
          </div>
          <p className="text-sm">0.24%</p>
        </div>
      </div>
      {/* Lower Half */}
      <div className="flex mt-2">
        <div className="flex flex-col items-between">
          <p>983.04$</p>
          <p className="text-xs text-gray-400">Token</p>
        </div>
      </div>
    </section>
  );
}
