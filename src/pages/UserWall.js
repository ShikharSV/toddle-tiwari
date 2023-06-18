import React from "react";
import styles from "./userWall.module.css";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentWall } from "../store/wallSlice";
import { useNavigate } from "react-router-dom";
import WallCard from "../components/WallCard";

export const UserWall = () => {
  const walls = useSelector((state) => state.users.userWalls);

  return (
    <>
      <Header />
      <div className={styles.body}>
        <div className={styles.container}>
          {walls &&
            walls.map((wall) => <WallCard key={wall.body} data={wall} />)}
        </div>
      </div>
    </>
  );
};
