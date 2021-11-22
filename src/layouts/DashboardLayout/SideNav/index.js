import React from "react";

import logo from "src/assets/images/logo-crypt.svg";
import Insights from "./Insights";
import Menu from "./Menu";
import Profile from "./Profile";

import PerfectScrollbar from "react-perfect-scrollbar";

export default function NavBar() {
  return (
    <PerfectScrollbar>
      <div className="hidden border-r-2 justify-between fixed w-64 h-screen md:flex flex-col py-10 px-6">
        <img className="w-2/3 ml-2" src={logo} alt=""></img>
        <div className="mt-10">
          <Menu />
        </div>
        <div className="mt-10">
          <Insights />
        </div>
        <div className="mt-10">
          <Profile />
        </div>
      </div>
    </PerfectScrollbar>
  );
}
