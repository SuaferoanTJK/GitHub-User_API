import React from "react";
import Header from "../Components/Header";
import Filter from "../Components/Filter";
import Card from "../Components/Card";

const Home = () => {
  return (
    <div className="page">
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
