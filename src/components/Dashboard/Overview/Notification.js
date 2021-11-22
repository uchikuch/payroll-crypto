import React from "react";
import { HiOutlineBell } from "react-icons/hi";

export default function Notification() {
  return (
    <section className="relative cursor-pointer">
      <div className="flex justify-center rounded-full w-14 shadow-2xl p-2 text-center">
        <HiOutlineBell className="text-3xl" />
        <div className="absolute flex justify-center bg-crypto-orange text-white text-xs rounded-full px-2 -top-1 -right-2">
          <p className="mt-1 pb-0.5">2</p>
        </div>
      </div>
    </section>
  );
}
