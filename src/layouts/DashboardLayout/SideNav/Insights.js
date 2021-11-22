import React from "react";
import clsx from "clsx";
import { NavLink, useLocation } from "react-router-dom";
import { HiOutlineBell, HiOutlineMail } from "react-icons/hi";

export default function Insights() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <section>
      <p className="text-xs text-gray-400 px-4 mb-6">Insights</p>
      <ul>
        {/* Inbox */}
        <li>
          {" "}
          <NavLink to="/indob">
            <div
              className={clsx(
                "cursor-pointer flex gap-4 rounded-xl bg-white hover:bg-crypto-purple hover:text-white p-4 text-sm mb-2",
                {
                  "cursor-pointer flex gap-4 rounded-xl bg-crypto-purple text-white p-4 text-sm mb-2":
                    "/indob" === location.pathname,
                }
              )}
            >
              <div>
                <HiOutlineMail className="text-lg" />
              </div>
              <div>Inbox</div>
            </div>
          </NavLink>
        </li>
        {/* Notifications */}
        <li>
          <NavLink to="/dashboard/notifications">
            <div
              className={clsx(
                "cursor-pointer flex gap-4 rounded-xl bg-white hover:bg-crypto-purple hover:text-white p-4 text-sm mb-2",
                {
                  "cursor-pointer flex gap-4 rounded-xl bg-crypto-purple text-white p-4 text-sm mb-2":
                    "/dashboard/notifications" === location.pathname,
                }
              )}
            >
              <div>
                <HiOutlineBell className="text-lg" />
              </div>
              <div>Notifications</div>
              <div className="flex justify-center ml-6 bg-crypto-orange text-white text-xs rounded-full px-2">
                <p className="mt-0.5">2</p>
              </div>
            </div>
          </NavLink>
        </li>
      </ul>
    </section>
  );
}
