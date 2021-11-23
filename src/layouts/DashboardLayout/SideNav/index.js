import React from "react";
import { Link } from "react-router-dom";

import logo from "src/assets/images/logo-crypt.svg";
import Insights from "./Insights";
import Menu from "./Menu";
import Profile from "./Profile";

import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

export default function NavBar() {
  return (
    <div className="hidden border-r-2 justify-between fixed w-64 h-screen xl:flex flex-col py-10 px-6">
      <PerfectScrollbar className="flex flex-col justify-between">
        <Link to="/">
          <img className="w-2/3 ml-2" src={logo} alt=""></img>
        </Link>
        <div className="mt-10">
          <Menu />
        </div>
        <div className="mt-10">
          <Insights />
        </div>
        <div className="mt-10">
          <Link to="/login">
            <Profile />
          </Link>
        </div>
      </PerfectScrollbar>
    </div>
  );
}
