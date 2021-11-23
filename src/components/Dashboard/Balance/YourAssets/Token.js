import React from "react";
import token from "src/assets/images/token.png";
import { FaAngleRight } from "react-icons/fa";

export default function Bitcoin() {
  return (
    <div className="flex gap-4 bg-white rounded-xl p-2">
      <div>
        <img src={token} alt="" className="w-24" />
      </div>
      <div className="flex flex-col justify-around">
        <p className="font-semibold">Tokens</p>
        <p className="text-xs">458.09324</p>
        <div className="text-white py-1 px-2 text-xs bg-crypto-paleblue rounded-lg">
          $3,984.22
        </div>
      </div>
      <div className="flex flex-grow w-24 justify-end pr-2 pt-2">
        <FaAngleRight className="text-2xl cursor-pointer" />
      </div>
    </div>
  );
}
