import React from "react";
import Header from "../components/Header";
import BlogCard from "../components/BlogCard";
import { useSelector } from "react-redux";

const Wall = () => {
  const currWall = useSelector((state) => state.walls.currentWall);
  console.log(currWall);
  return (
    <>
      <Header></Header>\sd
    </>
  );
};

export default Wall;
