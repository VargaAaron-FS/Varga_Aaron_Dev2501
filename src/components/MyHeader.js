import React from "react";

// Components
import MyLogo from "./MyLogo";
import MyAvatar from "./MyAvatar";

import { MdLogout } from "react-icons/md";

import { Link } from "react-router-dom";

export default function MyHeader() {
  return (
    <header style={styles.headerContainer}>
      <MyLogo />
      <nav style={styles.navContainer}>
        <Link to="/settings">
          <MyAvatar />
        </Link>
        <Link to="/logout">
          <MdLogout style={styles.logOutIcon} />
        </Link>
      </nav>
    </header>
  );
}

const styles = {
  headerContainer: {
    padding: "1rem",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "2px solid #eee",
  },
  navContainer: {
    display: "flex",
    alignItems: "center",
    columnGap: "1rem",
  },
  logoContainer: {
    display: "flex",
    cursor: "pointer",
  },
  h1: {
    margin: "0",
    padding: "0",
    lineHeight: "1.5rem",
    fontSize: "1.5rem",
    color: "#333",
  },
  dolfinLogo: {
    fontSize: "1.5rem",
    marginRight: "-.75rem",
    marginTop: "-.15rem",
    color: "#fbb1bd",
    zIndex: "1",
  },
  headerAvatar: {
    fontSize: "1.5rem",
    cursor: "pointer",
    padding: ".5rem",
    borderRadius: "50%",
    backgroundColor: "#333",
    color: "#fff",
  },
  logOutIcon: {
    cursor: "pointer",
    color: "#333",
  },
};
