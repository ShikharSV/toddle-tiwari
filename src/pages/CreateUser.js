import React, { useState } from "react";
import styles from "./createUser.module.css";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreation = (e) => {
    e.preventDefault();
    let newUser = {
      id: "9910",
      name: name,
      email: email,
      bookmarks: [],
      walls: [],
    };
    dispatch(getCurrentUser(newUser));
    console.log(newUser);
    navigate("/");
  };
  return (
    <>
      <Header></Header>
      <div className={styles.container}>
        <form
          action=""
          method="post"
          autoComplete="off"
          noValidate
          onSubmit={handleCreation}
        >
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <h2>Email</h2>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
          <h2>Password</h2>
          <input
            type="text"
            name="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={handleCreation}>
            create
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateUser;
