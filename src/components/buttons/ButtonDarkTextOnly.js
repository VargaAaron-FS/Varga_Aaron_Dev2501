import React from "react";

// Dummy Component
const ButtonDarkTextOnly = (props) => {
  return <button style={styles.appBtn}>{props.buttonText}</button>;
};

export default ButtonDarkTextOnly;

const styles = {
  appBtn: {
    fontWeight: "700",
    margin: ".5rem 0",
    cursor: "pointer",
    color: "#1F2937",
    fontFamily: "Poppins",
    border: "none",
    backgroundColor: "transparent",
    textAlign: "left",
  },
};