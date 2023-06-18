import React, { useState } from "react";
import styles from "./blogCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { BsBookmarkDash } from "react-icons/bs";
import { BsFillBookmarkDashFill } from "react-icons/bs";
import { getFavBlogs } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import paper from "../images/paper.jpg";
import rippedpaper from "../images/rippedpaper.jpg";

const BlogCard = ({ data }) => {
  const authorId = data.createdBy;
  const allUsers = useSelector((state) => state.users.totalUsers);
  const favBlogs = useSelector((state) => state.users.favBlogs);
  const currentUser = useSelector((state) => state.users.currentUser);
  const author = allUsers.filter((user) => user.id === authorId);

  console.log(author);
  const [likes, setLikes] = useState(data.likes);
  const [bookmark, setBookmark] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const likeHandler = () => {
    if (likes == data.likes) {
      const newLikes = parseInt(likes) + 1;
      setLikes(newLikes);
    } else {
      const newLikes = parseInt(likes) - 1;
      setLikes(newLikes);
    }
  };

  const bookmarkHandler = () => {
    if (Object.keys(currentUser).length > 0) {
      const exist = favBlogs.filter((id) => data.id === id);
      if (exist.length > 0) {
        console.log("exists");
        const newFavs = favBlogs.filter((id) => data.id !== id);
        dispatch(getFavBlogs(newFavs));
      } else {
        let newFavs = favBlogs;
        newFavs = [...newFavs, data.id];
        dispatch(getFavBlogs(newFavs));
      }
    } else {
      navigate("/create-user");
    }
  };
  console.log(data.image);
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${data.image})` }}
    >
      <div
        className={styles.infoContainer}
        style={{ backgroundImage: `url(${rippedpaper})` }}
      >
        <div className={styles.info}>
          <div className={styles.title}>{data.name}</div>
          <div className={styles.authorDetails}>
            <div className={styles.authorName}>{author[0].name}</div>
            <div className={styles.tags}>
              {data.tag.map((tag) => (
                <p>{tag}</p>
              ))}
            </div>
          </div>
          <div className={styles.interactions}>
            <div onClick={likeHandler}>
              {likes == data.likes ? <AiOutlineHeart /> : <AiFillHeart />}{" "}
              {likes}
            </div>
            <div onClick={bookmarkHandler}>
              {bookmark == false ? (
                <BsBookmarkDash />
              ) : (
                <BsFillBookmarkDashFill />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
