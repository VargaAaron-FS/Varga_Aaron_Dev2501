import React from "react";

import MyIconsLight from "./MyIconsLight";

// Import icon
import {
  FaGrinTongueWink,
  FaGithubSquare,
  FaLinkedin,
  FaDribbbleSquare,
} from "react-icons/fa";

const MyFooter = (props) => {
  const handleMouseEnter = (e) => {
    e.target.style.textDecoration = "none";
  };
  const handleMouseLeave = (e) => {
    e.target.style.textDecoration = "underline";
  };

  return (
    <footer style={styles.footer}>
      <p style={styles.paraText}>
        App created by{" "}
        <a
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          href="https://www.iamaaronvarga.com"
          rel="noreferrer"
          target="_blank"
          style={styles.linkText}
        >
          Aaron Varga
        </a>{" "}
        <span style={styles.iconStyle}>
          <FaGrinTongueWink />
        </span>
      </p>
      <div style={styles.networkIconsContainer}>
        <a href="https://dribbble.com/iamaaronvarga" target="_blank" rel="noreferrer">
          <MyIconsLight iconClass={<FaDribbbleSquare />} />
        </a>
        <a href="https://github.com/VargaAaron-FS" target="_blank" rel="noreferrer">
          <MyIconsLight iconClass={<FaGithubSquare />} />
        </a>
        <a href="https://www.linkedin.com/in/iamaaronvarga/" target="_blank" rel="noreferrer">
          <MyIconsLight iconClass={<FaLinkedin />} />
        </a>
      </div>
    </footer>
  );
};

export default MyFooter;

const styles = {
  footer: {
    padding: "1rem 2rem",
    backgroundColor: "#1F2937",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTop: "4px solid #eee",
  },
  paraText: {
    margin: "0",
    display: "flex",
    alignItems: "center",
    color: "#eee",
    fontSize: "1rem",
  },
  linkText: {
    color: "white",
    display: "flex",
    margin: "0 .25rem",
    fontWeight: "700",
    alignItems: "center",
  },
  iconStyle: {
    fontSize: "1.5rem",
    display: "flex",
    color: "#eee",
  },
  networkIconsContainer: {
    display: "flex",
    columnGap: "1rem",
    fontSize: "1.5rem",
    color: "white",
  },
};
