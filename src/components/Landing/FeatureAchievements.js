import React from "react";
import feature_user from "../../assets/images/feature-user.png";
import feature_savings from "../../assets/images/feature-savings.png";
import feature_stacked from "../../assets/images/feature-stacked.png";
//import globe from "../../assets/images/globe.png";
import pinch_globe from "../../assets/images/pinch-globe.png";

export default function FeatureAchievements() {
  return (
    <section className="bg-crypto-black relative overflow-hidden">
      <div
        className="container flex flex-col items-start
      gap-0 mt-12 lg:mt-12"
      >
        {/* Title Section */}
        <div className="flex flex-1 flex-col items-start z-10">
          <p className="text-crypto-lightblue text-xs lg:leading-12 mb-8 lg:mb-0 z-10">
            Our Achievements
          </p>
          <p className="text-white font-medium text-4xl lg:text-7xl">
            Used by millions. <br /> Trusted with <br />
            billions.
          </p>
          <p className="text-gray-400 mb-6 mt-6">
            Quis nostrud exercitation ullamco laboris nisi ut <br />
            aliquip ex ea commodo consequat. 🔥
          </p>
        </div>

        {/* Cards Section */}
        <div className="flex flex-1 flex-col sm:flex-row lg:flex-row items-center mt-16 p-12 gap-10 z-10">
          {/* Feature 1 */}
          <div
            className="flex flex-1 flex-col rounded-3xl bg-crypto-lightorange
          p-2"
          >
            {/* Top Image */}
            <div className="p-8">
              <img src={feature_user} alt="" />
            </div>
            {/* Text Div */}
            <div className="flex flex-col bg-white rounded-3xl px-8 py-4">
              {/* Small Top Text */}
              <p
                className="text-xs leading-12
                text-left mb-b z-10"
              >
                in the last 30 days{" "}
              </p>
              {/* Main Text */}
              <p className="font-medium text-3xl">
                2.8 Million <br /> Users
              </p>
              {/* Bottom Sub Text */}
              <p
                className="text-gray-400 text-left
                mb-6 mt-6"
              >
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div
            className="flex flex-1 flex-col rounded-3xl bg-crypto-lightpurple
          p-2"
          >
            {/* Top Image */}
            <div className="p-8">
              <img src={feature_savings} alt="" />
            </div>
            {/* Text Div */}
            <div className="flex flex-col bg-white rounded-3xl px-8 py-4">
              {/* Small Top Text */}
              <p
                className="text-xs leading-12
                text-left mb-b z-10"
              >
                made in the last 30 days{" "}
              </p>
              {/* Main Text */}
              <p className="font-medium text-3xl">
                31 Million <br /> Trades
              </p>
              {/* Bottom Sub Text */}
              <p
                className="text-gray-400 text-left
                mb-6 mt-6"
              >
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div
            className="flex flex-1 flex-col rounded-3xl bg-crypto-lightcyan
          p-2"
          >
            {/* Top Image */}
            <div className="p-8">
              <img src={feature_stacked} alt="" />
            </div>
            {/* Text Div */}
            <div className="flex flex-col bg-white rounded-3xl px-8 py-4">
              {/* Small Top Text */}
              <p
                className="text-3xl text-white md:text-4 lg:text-xs lg:leading-12
            text-center lg:text-left mb-b z-10"
              >
                -{" "}
              </p>
              {/* Main Text */}
              <p className="font-medium text-3xl">
                $11 Billion <br /> Stacked
              </p>
              {/* Bottom Sub Text */}
              <p
                className="text-gray-400 text-left
                mb-6 mt-6"
              >
                Lorem ipsum dolor sit amet, <br />
                consectetur adipiscing.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Absolute Image Backgrounds */}
      <div
        className="hidden md:block overflow-hidden
         absolute top-20 left-2/3"
      >
        <img src={pinch_globe} alt="" className="w-full" />
      </div>
    </section>
  );
}
