import React from "react";
import SideNav from "./SideNav";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <div>
        <SideNav />
      </div>
      <div className="xl:ml-64 py-10 pl-10 pr-12 flex-grow">{children}</div>
    </div>
  );
}
