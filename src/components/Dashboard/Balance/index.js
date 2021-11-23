import React from "react";
import BalanceCard from "./BalanceCard";
import current_balance from "src/assets/images/current-balance.png";
import total_earnings from "src/assets/images/total-earnings.png";
import withdrawal from "src/assets/images/withdrawal.png";
import YourAssets from "./YourAssets";
import Earnings from "./Earnings";

export default function Balance() {
  return (
    <section className="container flex flex-1 flex-col">
      <div>
        <h3 className="font-semibold text-2xl">
          Lorem ipsum dolor sit amet, consectetur,
        </h3>
        <h2 className="font-bold text-6xl mt-4">Balance</h2>
      </div>
      <div className="flex flex-1 mt-8 gap-8">
        <BalanceCard
          img={current_balance}
          title="Current Balance"
          amount="$23,023.00"
          period="$4,232 last year"
        />
        <BalanceCard
          img={total_earnings}
          title="Total Earnings"
          amount="$67,394.34"
          period="$40,232 last year"
        />
        <BalanceCard
          img={withdrawal}
          title="Withdrawal"
          amount="$23,980.00"
          period="Since Last Year"
        />
      </div>
      <div className="flex flex-1 gap-12 mt-12">
        <div className="w-2/3">
          <YourAssets className="flex-grow" />
        </div>
        <div className="w-1/3">
          <Earnings />
        </div>
      </div>
    </section>
  );
}
