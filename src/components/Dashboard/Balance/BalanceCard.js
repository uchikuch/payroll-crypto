import React from "react";

export default function BalanceCard({ img, title, amount, period }) {
  return (
    <section className="flex flex-col justify-center items-center rounded-xl shadow-xl px-20 py-8 text-center mt-20">
      <img src={img} alt="" className="w-32 -mt-20 pb-6" />
      <p className="text-sm text-gray-400 pb-2">{title}</p>
      <p className="text-xl font-medium pb-2">{amount}</p>
      <p className="text-xs text-gray-400 pb-2">{period}</p>
    </section>
  );
}
