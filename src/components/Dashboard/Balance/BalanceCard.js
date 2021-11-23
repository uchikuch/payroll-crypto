import React from "react";

export default function BalanceCard({ img, title, amount, period }) {
  return (
    <section className="rounded-xl shadow-xl px-28 py-8 text-center mt-28">
      <img src={img} alt="" className="w-40 -mt-28 pb-6" />
      <p className="text-sm text-gray-400 pb-2">{title}</p>
      <p className="text-xl font-medium pb-2">{amount}</p>
      <p className="text-xs text-gray-400 pb-2">{period}</p>
    </section>
  );
}
