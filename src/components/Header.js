import React from "react";
import styles from "./header.module.css";
import { CiSearch } from "react-icons/ci";
import { MdOutlineSubject } from "react-icons/md";
import { WiDaySunny } from "react-icons/wi";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import church from "../images/church.jpg";

const Header = ({ title }) => {
  const navigate = useNavigate();

  const authHandler = () => {
    navigate("/create-user");
  };
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.users.currentUser);
  const hiHandler = () => {
    navigate("/create-wall");
  };

  return (
    <div
      className={styles.headerContainer}
      style={{ backgroundImage: `url(${church})` }}
    >
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <img src={logo} />
        </div>
        <div className={styles.menuButtons}>
          <div className={styles.searchMenuButton}>
            <CiSearch />
          </div>
          <div className={styles.sunnyMenuButton}>
            <WiDaySunny />
          </div>
          <div className={styles.sidebarMenuButton}>
            <MdOutlineSubject />
          </div>
          {Object.keys(currentUser).length == 0 ? (
            <div className={styles.auth} onClick={authHandler}>
              Sign In
            </div>
          ) : (
            <div onClick={hiHandler}>hi</div>
          )}
        </div>
      </div>
      <div className={styles.sloganContainer}>
        <div className={styles.slogan}>
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
