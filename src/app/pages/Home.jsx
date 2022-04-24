import React from "react";
import Header from "../Components/Header";
import Filter from "../Components/Filter";
import Card from "../Components/Card";
import { useSelector } from "react-redux";

const Home = () => {
  const mode = useSelector((state) => state.mode);
  return (
    <div className={mode ? "page dark" : "page"}>
      <div className="home">
        <div className="container">
          <Header />
          <Filter />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
