import React from "react";
import overview_supply from "../../assets/images/overview-supply.png";
import overview_burned from "../../assets/images/overview-burned.png";
import overview_current from "../../assets/images/overview-current.png";
import overview_market from "../../assets/images/overview-market.png";
import tube_cylinder from "../../assets/images/tube-cylinder.png";
import purple_circle from "../../assets/images/purple-circle.png";

export default function CrypOverview() {
  return (
    <section className="relative py-16 px-8">
      <div className="relative container rounded-3xl pl-14 bg-overview-pattern h-overview min-w-[300px]">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-10">
          {/* Card */}
          <div className="flex flex-col bg-white w-80 px-6 py-6 rounded-b-2xl z-10">
            <p className="text-3xl">Cryp Overview</p>
            <p className="text-xs text-gray-400 mt-2">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed
            </p>
            <div className="flex flex-1 flex-col">
              <div className="flex mt-6 gap-4">
                <img src={overview_supply} alt="" />
                <div className="flex flex-col justify-center">
                  <p className="text-xs text-gray-400">Total supply</p>
                  <p>218,534,170</p>
                </div>
              </div>
              <div className="flex mt-6 gap-4">
                <img src={overview_burned} alt="" />
                <div className="flex flex-col justify-center">
                  <p className="text-xs text-gray-400">Burned to date</p>
                  <p>221,429,162</p>
                </div>
              </div>
              <div className="flex mt-6 gap-4">
                <img src={overview_market} alt="" />
                <div className="flex flex-col justify-center">
                  <p className="text-xs text-gray-400">Market cap</p>
                  <p>$5.1 billion</p>
                </div>
              </div>
              <div className="flex mt-6 gap-4">
                <img src={overview_current} alt="" />
                <div className="flex flex-col justify-center">
                  <p className="text-xs text-gray-400">Current emissions</p>
                  <p>15/block</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex hidden flex-col justify-center mt-48">
            Lorem ipsum dolor sit amet consectetur
            <br /> adipiscing elit sed do eiusmod tempor.
            <br /> Lorem ipsum dolor sit amet consectetur <br />
            adipiscing elit sed do.
          </div>
          {/* Free Text */}
        </div>
      </div>
      {/* Absolute */}
      <div
        className="hidden md:block overflow-hidden
        rounded-full absolute h-screen top-0 left-2/3"
      >
        <img src={tube_cylinder} alt="" />
      </div>
      <div
        className="hidden md:block overflow-hidden
        rounded-full absolute h-44 w-44 bottom-4 left-1/2"
      >
        <img src={purple_circle} alt="" />
      </div>
    </section>
  );
}
