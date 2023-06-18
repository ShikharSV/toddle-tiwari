import React from "react";
import styles from "./feedTuners.module.css";

const types = ["All", "coast", "desert", "grass", "coast", "desert", "grass"];

const FeedTuners = () => {
  return (
    <div className={styles.container}>
      <div className={styles.blogTypes}>
        {types.map((text) => {
          return <p className={styles.type}>{text}</p>;
        })}
      </div>
      <div className={styles.sorter}>Sort</div>
    </div>
  );
};

export default FeedTuners;
