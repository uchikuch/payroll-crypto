import React from "react";
import bitcoin from "src/assets/images/bitcoin.png";
import { FaAngleRight } from "react-icons/fa";

export default function Bitcoin() {
  return (
    <div className="flex gap-4 bg-crypto-lightblue text-white rounded-xl p-2">
      <div>
        <img src={bitcoin} alt="" className="w-24" />
      </div>
      <div className="flex flex-col justify-around">
        <p className="font-semibold">Bitcoin</p>
        <p className="text-xs">0.9834</p>
        <div className="bg-white py-1 px-2 text-xs text-crypto-lightblue rounded-lg">
          $9,258.90
        </div>
      </div>
      <div className="flex flex-grow w-24 justify-end pr-2 pt-2">
        <FaAngleRight className="text-2xl" />
      </div>
    </div>
  );
}
