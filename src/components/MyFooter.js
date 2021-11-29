import React from "react";

// Import icon
import { FaGrinTongueWink, FaGithubSquare, FaLinkedin, FaDribbbleSquare } from "react-icons/fa";

const MyFooter = (props) => {
  const handleMouseEnter = (e) => {
    e.target.style.textDecoration = "none";
  };
  const handleMouseLeave = (e) => {
    e.target.style.textDecoration = "underline";
  };

  return (
    <footer style={styles.footer}>
      <p style={styles.paraText}>App created by <a onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} href="https://www.iamaaronvarga.com" rel="noreferrer" target="_blank" style={styles.linkText}>Aaron Varga</a> <span style={styles.iconStyle}><FaGrinTongueWink /></span></p>
      <div style={styles.networkIconsContainer}>
        <a href="../../" style={styles.linkText}><FaDribbbleSquare /></a>
        <a href="../../" style={styles.linkText}><FaGithubSquare /></a>
        <a href="../../" style={styles.linkText}><FaLinkedin /></a>
      </div>
    </footer>
  );
};

export default MyFooter;

const styles = {
  footer: {
    padding: "1rem 2rem",
    color: "#eee",
    backgroundColor: "#1F2937",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  paraText: {
    margin: "0",
    display: "flex",
    alignItems: "center",
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
    color: "silver",
  },
  networkIconsContainer: {
    display: "flex",
    columnGap: "1rem",
    fontSize: "1.5rem",
  },
};
