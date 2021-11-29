import React from "react";

// Dummy Component
const ButtonDark = (props) => {
  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = "transparent";
    e.target.style.color = "#1F2937";
  };
  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = "#1F2937";
    e.target.style.color = "white";
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={styles.appBtn}
      type={props.buttonType}
    >
      {props.buttonText}
      {/* iconSpace prop so you can insert &nbsp; for space between the icon and button text */}
      {props.iconSpaces}
      {/* iconOption in case you want to include an icon AFTER text */}
      {props.iconOption}
    </button>
  );
};

export default ButtonDark;

const styles = {
  appBtn: {
    fontWeight: "700",
    padding: "1rem 2rem",
    backgroundColor: "#1F2937",
    borderRadius: ".25rem",
    cursor: "pointer",
    color: "white",
    fontFamily: "Poppins",
    border: "2px solid #1F2937",
    display: "flex",
    alignItems: "center",
  },
};
