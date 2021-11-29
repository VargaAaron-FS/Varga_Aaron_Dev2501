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
    <button
      type={props.buttonType}
      style={styles.appBtn}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.buttonText}
      {/* iconSpace prop so you can insert &nbsp; for space between the icon and button text */}
      {props.iconSpace}
      {/* iconOption in case you want to include an icon AFTER text */}
      {props.iconOption}
    </button>
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
    display: "flex",
    alignItems: "center",
    textDecoration: "underline",
  },
};
