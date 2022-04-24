import React from "react";
import { Icons } from "./Icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { obtainUsers } from "../redux/actions/githubActions";
const Filter = () => {
  const msg = useSelector((state) => state.msg);
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  return (
    <div className="filter">
      <button
        className="filter_icon"
        onClick={() => {
          dispatch(obtainUsers(name));
        }}
      >
        <img src={Icons.Search} alt="Search Icon" />
      </button>
      <input
        className="filter_input"
        type="text"
        placeholder="Search GitHub username..."
        onChange={(search) => {
          setName(search.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            dispatch(obtainUsers(name));
          }
        }}
      />

      {msg ? <p className="filter_noResult">No result</p> : null}
      <button
        className="filter_btn"
        onClick={() => {
          dispatch(obtainUsers(name));
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Filter;
