import React from "react";
import { Icons } from "./Icons";

const Filter = () => {
  return (
    <div className="filter">
      <button
        className="filter_icon"
        onClick={() => {
          console.log("Icon search clicked");
        }}
      >
        <img src={Icons.Search} alt="Search Icon" />
      </button>
      <input
        className="filter_input"
        type="text"
        placeholder="Search GitHub username..."
        onChange={(search) => {
          console.log(search);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            console.log("Enter clicked");
          }
        }}
      />
      <button
        className="filter_btn"
        onClick={() => {
          console.log("Btn search clicked");
        }}
      >
        Search
      </button>
    </div>
  );
};

export default Filter;
