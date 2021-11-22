import React from "react";
import clsx from "clsx";
import { NavLink, useLocation } from "react-router-dom";
import { BiLineChart } from "react-icons/bi";
import {
  HiOutlineChartSquareBar,
  HiOutlineClipboardList,
  HiOutlineCog,
  HiOutlineLightningBolt,
  HiOutlineCreditCard,
} from "react-icons/hi";

export default function Menu() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <section>
      <p className="text-xs text-gray-400 px-4 mb-6">Menu</p>
      <ul>
        {/* Overview */}
        <li>
          {" "}
          <NavLink to="/dashboard">
            <div
              className={clsx(
                "cursor-pointer flex gap-4 rounded-xl bg-white hover:bg-crypto-purple hover:text-white p-4 text-sm mb-2",
                {
                  "cursor-pointer flex gap-4 rounded-xl bg-crypto-purple text-white p-4 text-sm mb-2":
                    "/dashboard" === location.pathname,
                }
              )}
            >
              <div>
                <BiLineChart className="text-lg" />
              </div>
              <div>Overview</div>
            </div>
          </NavLink>
        </li>
        {/* Balance */}
        <li>
          <NavLink to="/dashboard/balance">
            <div
              className={clsx(
                "cursor-pointer flex gap-4 rounded-xl bg-white hover:bg-crypto-purple hover:text-white p-4 text-sm mb-2",
                {
                  "cursor-pointer flex gap-4 rounded-xl bg-crypto-purple text-white p-4 text-sm mb-2":
                    "/dashboard/balance" === location.pathname,
                }
              )}
            >
              <div>
                <HiOutlineChartSquareBar className="text-lg" />
              </div>
              <div>Balance</div>
            </div>
          </NavLink>
        </li>
        {/* Utility */}
        <li>
          <NavLink to="/dashboard/utility">
            <div
              className={clsx(
                "cursor-pointer flex gap-4 rounded-xl bg-white hover:bg-crypto-purple hover:text-white p-4 text-sm mb-2",
                {
                  "cursor-pointer flex gap-4 rounded-xl bg-crypto-purple text-white p-4 text-sm mb-2":
                    "/dashboard/utility" === location.pathname,
                }
              )}
            >
              <div>
                <HiOutlineLightningBolt className="text-lg" />
              </div>
              <div>Utility</div>
            </div>
          </NavLink>
        </li>
        {/* Payment */}
        <li>
          <NavLink to="/dashboard/payment">
            <div
              className={clsx(
                "cursor-pointer flex gap-4 rounded-xl bg-white hover:bg-crypto-purple hover:text-white p-4 text-sm mb-2",
                {
                  "cursor-pointer flex gap-4 rounded-xl bg-crypto-purple text-white p-4 text-sm mb-2":
                    "/dashboard/payment" === location.pathname,
                }
              )}
            >
              <div>
                <HiOutlineCreditCard className="text-lg" />
              </div>
              <div>Payment</div>
            </div>
          </NavLink>
        </li>
        {/* Analytics */}
        <li>
          <NavLink to="/dashboard/analytics">
            <div
              className={clsx(
                "cursor-pointer flex gap-4 rounded-xl bg-white hover:bg-crypto-purple hover:text-white p-4 text-sm mb-2",
                {
                  "cursor-pointer flex gap-4 rounded-xl bg-crypto-purple text-white p-4 text-sm mb-2":
                    "/dashboard/analytics" === location.pathname,
                }
              )}
            >
              <div>
                <HiOutlineClipboardList className="text-lg" />
              </div>
              <div>Analytics</div>
            </div>
          </NavLink>
        </li>
        {/* Settings */}
        <li>
          <NavLink to="/dashboard/settings">
            <div
              className={clsx(
                "cursor-pointer flex gap-4 rounded-xl bg-white hover:bg-crypto-purple hover:text-white p-4 text-sm mb-2",
                {
                  "cursor-pointer flex gap-4 rounded-xl bg-crypto-purple text-white p-4 text-sm mb-2":
                    "/dashboard/settings" === location.pathname,
                }
              )}
            >
              <div>
                <HiOutlineCog className="text-lg" />
              </div>
              <div>Settings</div>
            </div>
          </NavLink>
        </li>
      </ul>
    </section>
  );
}
