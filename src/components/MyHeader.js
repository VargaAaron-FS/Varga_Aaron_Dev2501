import React from "react";
import MyLogo from "./MyLogo";
// import MyIcons from "./MyIcons";
import { FaSearch, FaEnvelope, FaBell } from "react-icons/fa";
import LogoIcon from "../img/av-logo.svg";

import ImageUrl from "../img/icons8-user-male.svg";
import MyAvatar from "./MyAvatar";

const MyHeader = (props) => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.leftSide}>
          <h1 style={styles.logo}>
            <MyLogo LogoIcon={LogoIcon} />
          </h1>
        </div>
        {/* Need a search feature */}
        <div style={styles.searchContainer}>
          <span style={styles.inputIcon}>
            <FaSearch />
          </span>
          <input
            type="text"
            style={styles.inputWithIcon}
            placeholder="Search"
          />
        </div>
        {/* Need a right side icon nav/menu */}
        <div style={styles.rightSide}>
          <button style={styles.rightIcons}>
            <FaEnvelope />
          </button>
          <button style={styles.rightIcons}>
            <FaBell />
          </button>
          {/* Add avatar */}
          <MyAvatar AvatarIcon={ImageUrl} />
        </div>
      </div>
    </header>
  );
};

export default MyHeader;

const styles = {
  header: {
    backgroundColor: "#1F2937",
    padding: "1rem 0",
  },
  container: {
    padding: "0 1rem",
    margin: "0 auto",
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftSide: {},
  logo: {
    margin: "0",
    padding: "0",
  },
  searchContainer: {},
  inputIcon: {},
  inputWithIcon: {},
  rightSide: {
    display: "flex",
    alignItems: "center",
  },
  rightIcons: {
    margin: "0 .5rem 0 0",
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    cursor: "pointer",
    fontSize: "1rem",
  },
};
