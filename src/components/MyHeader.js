import React from "react";

// Logo
import MyLogo from "./MyLogo";
import LogoIcon from "../img/av-logo.svg";

// import MyIcons from "./MyIcons";
import { FaSearch, FaEnvelope, FaBell } from "react-icons/fa";

// Avatar
import ImageUrl from "../img/icons8-user-male.svg";
import MyAvatar from "./MyAvatar";

// Search button click event
const handleSearchClick = () => {
  if (document.querySelector(".searchInputField").value === "") {
    document.querySelector(".searchInputField").focus();
  } else {
    // TODO: Perform search on document.querySelector(".searchInputField").value (user's input)
  }
};

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
          <button
            type="button"
            className="searchBtn"
            style={styles.inputIcon}
            onClick={handleSearchClick}
          >
            <FaSearch />
          </button>
          <input
            className="searchInputField"
            type="search"
            style={styles.inputWithIcon}
            placeholder="Search"
          />
        </div>
        {/* Need a right side icon nav/menu */}
        <div style={styles.rightSide}>
          <button type="button" style={styles.rightIcons}>
            <FaEnvelope />
          </button>
          <button type="button" style={styles.rightIcons}>
            <FaBell />
          </button>
          {/* Add avatar */}
          <MyAvatar AvatarIcon={ImageUrl} AvatarAlt="User Avatar" />
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
    display: "flex",
    alignItems: "center",
  },
  searchContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  inputIcon: {
    color: "#1F2937",
    backgroundColor: "#fff",
    borderRadius: ".25rem 0 0 .25rem",
    padding: ".5rem .75rem",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    fontSize: "1rem",
    border: "none",
  },
  inputWithIcon: {
    padding: ".5rem 1rem",
    borderRadius: "0 .25rem .25rem 0",
    border: "none",
    fontFamily: "Poppins",
    boxShadow: "inset 0px 0px 5px rgba(0,0,0,0.25)",
    minWidth: "30%",
  },
  rightSide: {
    display: "flex",
    alignItems: "center",
  },
  rightIcons: {
    margin: "0 1rem 0 0",
    backgroundColor: "transparent",
    border: "none",
    color: "white",
    cursor: "pointer",
    fontSize: "1rem",
    display: "flex",
    padding: "0",
  },
};
