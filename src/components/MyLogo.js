import React from "react";

// Dummy Component
const MyLogo = (props) => {
  return (
    <div style={styles.myLogo}>
      <img src={props.LogoIcon} alt={props.LogoIcon} />
      <span style={styles.logoText}>UI</span>
    </div>
  );
};

export default MyLogo;

const styles = {
  myLogo: {
    height: "32px",
    cursor: "pointer",
    display: "flex",
  },
  logoText: {
    color: "white",
    fontWeight: "400",
    fontSize: "1.25rem",
    marginLeft: ".25rem",
  },
};
