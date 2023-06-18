import React, { useState } from "react";
import Header from "../components/Header";
import styles from "./createWall.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserWalls } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

const CreateWall = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);
  const userWalls = useSelector((state) => state.users.userWalls);
  const navigate = useNavigate();

  const handleCreation = (e) => {
    e.preventDefault();
    let newWall = {
      title: title,
      body: body,
      blogs: [],
    };
    let updatedWalls = userWalls;
    updatedWalls = [...userWalls, newWall];
    dispatch(getUserWalls(updatedWalls));
    navigate("/user-wall");
  };
  return (
    <>
      <Header />
      {Object.keys(currentUser).length > 0 ? (
        <div className={styles.container}>
          <form
            action=""
            method="post"
            autoComplete="off"
            noValidate
            onSubmit={handleCreation}
          >
            <h2>Title</h2>
            <input
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <h2>Body</h2>

            <textarea
              placeholder="Your body"
              name="message"
              value={body}
              required
              onChange={(e) => setBody(e.target.value)}
            />

            <button type="submit" onClick={handleCreation}>
              create
            </button>
          </form>
        </div>
      ) : (
        "<p>signup first</p>"
      )}
    </>
  );
};

export default CreateWall;
