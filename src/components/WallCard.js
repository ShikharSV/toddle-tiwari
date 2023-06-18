import React from "react";
import styles from "./wallCard.module.css";
import { MdDiamond } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCurrentWall } from "../store/wallSlice";

const WallCard = ({ data }) => {
  const walls = useSelector((state) => state.users.userWalls);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const wallSelector = (wall) => {
    dispatch(getCurrentWall(wall));
    console.log("hi");
    navigate("/wall");
  };

  return (
    <div className={styles.container} onClick={() => wallSelector(data)}>
      <div className={styles.diamond}>
        <div className={styles.circle}>
          <MdDiamond size={25} />
        </div>
      </div>
      <div className={styles.title}>{data.title}</div>
      <div className={styles.desc}>{data.body}</div>
      <hr></hr>
      <div className={styles.count}>{data.blogs.length} blogs</div>
    </div>
  );
};

export default WallCard;
