import React from "react";

// Dummy Component
const ButtonDarkTextOnly = (props) => {
  const handleMouseEnter = (e) => {
    e.target.style.textDecoration = "none";
  };
  const handleMouseLeave = (e) => {
    e.target.style.textDecoration = "underline";
  };
  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      type={props.buttonType}
      style={styles.appBtn}
    >
      {props.buttonText}
    </button>
  );
};

export default ButtonDarkTextOnly;

const styles = {
  appBtn: {
    fontWeight: "700",
    fontSize: "1rem",
    cursor: "pointer",
    color: "#1F2937",
    fontFamily: "Poppins",
    border: "none",
    backgroundColor: "transparent",
    textAlign: "left",
    textDecoration: "underline",
  },
};
