import React from "react";
import { Icons } from "./Icons";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../redux/actions/githubActions";

const Header = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode);

  return (
    <nav className="navbar">
      <h1 className="navbar_title">devfinder</h1>
      <div
        className="navbar_mode"
        onClick={() => {
          dispatch(changeMode(!mode));
        }}
      >
        <p className="navbar_mode_title">{mode ? "LIGHT" : "DARK"}</p>
        <img src={mode ? Icons.Sun : Icons.Moon} alt="Mode Icon" />
      </div>
    </nav>
  );
};

export default Header;
