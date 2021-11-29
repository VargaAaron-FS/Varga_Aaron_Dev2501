import React from "react";

// Hover states
const buttonHover = () => {
  let button = document.querySelector(".buttonDark");

  button.addEventListener("mouseenter", function (event) {
    event.target.style.backgroundColor = "transparent";
    event.target.style.color = "#1F2937";
  });

  button.addEventListener("mouseleave", function (event) {
    event.target.style.backgroundColor = "#1F2937";
    event.target.style.color = "white";
  });
};

// Dummy Component
const ButtonDark = (props) => {
  return <button className="buttonDark" onMouseOver={buttonHover} style={styles.appBtn}>{props.buttonText}</button>;
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
  },
};
