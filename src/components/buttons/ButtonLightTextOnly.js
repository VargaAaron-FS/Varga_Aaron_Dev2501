import React from "react";

// Dummy Component
const ButtonLightTextOnly = (props) => {
  const handleMouseEnter = (e) => {
    e.target.style.textDecoration = "none";
  };
  const handleMouseLeave = (e) => {
    e.target.style.textDecoration = "underline";
  };
  return (
  <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} type={props.buttonType} style={styles.appBtn}>{props.buttonText}</button>
  );
};

export default ButtonLightTextOnly;

const styles = {
  appBtn: {
    fontWeight: "700",
    margin: ".5rem 0",
    cursor: "pointer",
    color: "white",
    fontFamily: "Poppins",
    border: "none",
    backgroundColor: "transparent",
    textAlign: "left",
    textDecoration: "underline",
  },
};