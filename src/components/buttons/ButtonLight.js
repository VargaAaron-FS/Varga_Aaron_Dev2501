import React from "react";

// Dummy Component
const ButtonLight = (props) => {
  return <button style={styles.appBtn}>{props.buttonText}</button>;
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
  },
};
