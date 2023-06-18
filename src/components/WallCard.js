import React from "react";
import styles from "./wallCard.module.css";
import { MdDiamond } from "react-icons/md";

const WallCard = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.diamond}>
        <MdDiamond size={25} />
      </div>
      <div className={styles.title}>{data.title}</div>
      <div className={styles.desc}>{data.body}</div>
      <div>{data.blogs.length}</div>
    </div>
  );
};

export default WallCard;
