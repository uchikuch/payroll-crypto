import React from "react";
import CoinCard from "./CoinCard";
import CoinCardMinus from "./CoinCardMinus";

import bitcoin_sm from "src/assets/images/bitcoin-sm.png";
import xrp_sm from "src/assets/images/xrp-sm.png";
import dogecoin from "src/assets/images/dogecoin.png";

export default function index() {
  return (
    <section>
      <h2 className="text-xl font-semibold py-6">Favorite Coins 🔥</h2>

      <div
        className="flex space-x-7 overflow-scroll 
        p-3 -ml-3 scrollbar-hide scrollbar-hide"
      >
        <CoinCard
          img={bitcoin_sm}
          title="Bitcoin / BTC"
          total="$6,325.00"
          period="Last 24h - 1.25"
          difference="+7,24 %"
        />
        <CoinCardMinus
          img={xrp_sm}
          title="XRP / XRP"
          total="$4,750.00"
          period="Last 24h - 2.1"
          difference="-12.23 %"
        />
        <CoinCard
          img={dogecoin}
          title="Doge / DOGE"
          total="$7,325.00"
          period="Last 24h - 1.25"
          difference="+4.12 %"
        />
        <CoinCard
          img={bitcoin_sm}
          title="Bitcoin / BTC"
          total="$6,325.00"
          period="Last 24h - 1.25"
          difference="+7,24 %"
        />
        <CoinCardMinus
          img={xrp_sm}
          title="XRP / XRP"
          total="$4,750.00"
          period="Last 24h - 2.1"
          difference="-12.23 %"
        />
        <CoinCard
          img={dogecoin}
          title="Doge / DOGE"
          total="$7,325.00"
          period="Last 24h - 1.25"
          difference="+4.12 %"
        />
      </div>
    </section>
  );
}
