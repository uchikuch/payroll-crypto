import React from "react";
import CoinUp from "./CoinUp";
import CoinDown from "./CoinDown";

export default function CrypCoins() {
  return (
    <div className="flex flex-col bg-crypto-purple justify-between shadow-xl rounded-2xl flex-1 pt-8 pb-2 px-2">
      <p className="text-white text-xl pl-8">CRYP Coins</p>
      <div className="mt-6">
        <CoinUp />
      </div>
      <div className="mt-2">
        <CoinDown />
      </div>
    </div>
  );
}
