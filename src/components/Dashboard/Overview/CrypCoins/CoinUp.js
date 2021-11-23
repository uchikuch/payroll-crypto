import React from "react";
import v_stable from "src/assets/images/v-stable.png";
import { RiArrowUpSLine } from "react-icons/ri";
import { BsArrowRightShort } from "react-icons/bs";
import LineChart from "../FavoriteCoins/LineChart";

export default function CoinUp() {
  return (
    <section className="flex flex-col bg-white rounded-lg p-3">
      <div className="flex justify-between">
        <img src={v_stable} alt="" className="w-8" />
        <div className="flex items-center gap-2 text-crypto-green">
          <div className="bg-crypto-lightgreen rounded-full">
            <RiArrowUpSLine className="text-md " />
          </div>
          <p className="text-sm">18.23%</p>
        </div>
      </div>
      {/* Lower Half */}
      <div className="flex mt-2 justify-between items-end">
        <div className="flex flex-col items-between">
          <p>983.04$</p>
          <p className="text-xs text-gray-400">V Stable</p>
        </div>
        <LineChart height={40} width={100} />
        <BsArrowRightShort className="text-md " />
      </div>
    </section>
  );
}
