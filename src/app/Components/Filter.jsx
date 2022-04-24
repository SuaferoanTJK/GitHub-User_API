import React from "react";
import { Icons } from "./Icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../redux/actions/githubActions";

const Filter = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  return (
    <div className="filter">
      <button
        className="filter_icon"
        onClick={() => {
          dispatch(getUsers(name));
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
            dispatch(getUsers(name));
          }
        }}
      />
      <button
        className="filter_btn"
        onClick={() => {
          dispatch(getUsers(name));
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Filter;
