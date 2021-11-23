import React from "react";
import token_sm from "src/assets/images/token-sm.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { BsArrowRightShort } from "react-icons/bs";
import LineChart from "../FavoriteCoins/LineChart";

export default function CoinUp() {
  return (
    <section className="flex flex-col bg-white rounded-lg p-3">
      <div className="flex justify-between">
        <img src={token_sm} alt="" className="w-8" />

        <div className="flex items-center gap-2 text-crypto-red">
          <div className="bg-crypto-lightred rounded-full">
            <RiArrowDownSLine className="text-md " />
          </div>
          <p className="text-sm">0.24%</p>
        </div>
      </div>
      {/* Lower Half */}
      <div className="flex mt-2 justify-between items-end">
        <div className="flex flex-col items-between">
          <p>76.82$</p>
          <p className="text-xs text-gray-400">Token</p>
        </div>
        <LineChart height={40} width={100} />
        <BsArrowRightShort className="text-md " />
      </div>
    </section>
  );
}
