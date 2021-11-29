import React from "react";

// Dummy Component
const ButtonLight = (props) => {
  const handleMouseEnter = (e) => {
    e.target.style.backgroundColor = "transparent";
    e.target.style.color = "white";
  };
  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = "white";
    e.target.style.color = "#1F2937";
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={styles.appBtn}
    >
      {props.buttonText}
      {/* iconSpace prop so you can insert &nbsp; for space between the icon and button text */}
      {props.iconSpace}
      {/* iconOption in case you want to include an icon AFTER text */}
      {props.iconOption}
    </button>
  );
};

export default ButtonLight;

const styles = {
  appBtn: {
    fontWeight: "700",
    padding: "1rem 2rem",
    backgroundColor: "white",
    borderRadius: ".25rem",
    cursor: "pointer",
    color: "#1F2937",
    fontFamily: "Poppins",
    border: "2px solid white",
    display: "flex",
    alignItems: "center",
  },
};
