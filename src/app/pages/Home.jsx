import React from "react";
import Header from "../Components/Header";
import Filter from "../Components/Filter";
import Card from "../Components/Card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "../redux/actions/githubActions";

const Home = () => {
  const mode = useSelector((state) => state.mode);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);

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
