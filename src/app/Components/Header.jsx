import React from "react";
import { Icons } from "./Icons";

const Header = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar_title">devfinder</h1>
      <div
        className="navbar_mode"
        onClick={() => {
          console.log("Mode changed");
        }}
      >
        <p className="navbar_mode_title">DARK</p>
        <img src={Icons.Moon} alt="Mode Icon" />
      </div>
    </nav>
  );
};

export default Header;
