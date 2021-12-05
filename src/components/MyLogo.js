import React from "react";

// Dummy Component
const MyLogo = (props) => {
  return (
    <a href="../../" style={styles.logoLink}>
      <div style={styles.myLogoContainer}>
        <img src={props.LogoIcon} alt={props.LogoIcon} style={styles.logoImg} />
        <span style={styles.logoText}>UI</span>
      </div>
    </a>
  );
};

export default MyLogo;

const styles = {
  myLogoContainer: {
    display: "flex",
    flexDirection: "row",
  },
  logoImg: {
    height: "32px",
    cursor: "pointer",
  },
  logoText: {
    color: "white",
    fontWeight: "400",
    fontSize: "1.25rem",
    marginLeft: ".25rem",
  },
  logoLink: {
    textDecoration: "none",
  }
};
