import React from "react";

const MyIconsLight = (props) => {
  const handleMouseEnter = (e) => {
    e.target.style.color = "#ddd";
  };
  const handleMouseLeave = (e) => {
    e.target.style.color = "white";
  };

  return (
    <span
      style={styles.footerIconStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.iconClass}
    </span>
  );
};

export default MyIconsLight;

const styles = {
  footerIconStyle: {
    color: "white",
    display: "flex",
    alignItems: "center",
  },
};
