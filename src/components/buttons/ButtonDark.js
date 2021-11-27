import React from "react";

// Dummy Component
const ButtonDark = (props) => {
  return <button style={styles.appBtn}>{props.buttonText}</button>;
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
    border: "none",
  },
};
