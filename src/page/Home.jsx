import React from "react";
import LowCatagory from "./LowCatagory";
import Posts from "../components/Posts";
import FilterablePosts from "../components/FilterablePosts";



const Home = () => {
  return (
    <>
      <LowCatagory />
      <FilterablePosts />
    </>
  );
};

export default Home;
