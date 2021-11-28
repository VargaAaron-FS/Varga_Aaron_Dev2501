import React from "react";

// Dummy Component
const ButtonLightOutlineOnly = (props) => {
  return <button style={styles.appBtn}>{props.buttonText}{/* <span className="iconOption" style={styles.iconOptionStyle}>{props.iconOption}</span>*/}</button>;
};

export default ButtonLightOutlineOnly;

const styles = {
  appBtn: {
    display: "flex",
    alignItems: "center",
    fontWeight: "700",
    padding: "1rem 2rem",
    backgroundColor: "transparent",
    borderRadius: ".25rem",
    cursor: "pointer",
    color: "white",
    fontFamily: "Poppins",
    border: "2px solid white",
  },
  // iconOptionStyle: {
  //   display: "flex",
  //   marginLeft: ".5rem",
  // },
};
