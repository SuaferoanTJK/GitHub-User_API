import React from "react";
import Header from "../Components/Header";
import Filter from "../Components/Filter";

const Home = () => {
  return (
    <div className="page">
      <div className="home">
        <div className="container">
          <Header />
          <Filter />
        </div>
      </div>
    </div>
  );
};

export default Home;
