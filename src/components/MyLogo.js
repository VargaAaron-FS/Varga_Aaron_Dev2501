import React from "react";

// Dummy Component
const MyLogo = (props) => {
  return (
    <img src={props.LogoIcon} alt={props.LogoIcon} style={styles.myLogo} />
  );
};

export default MyLogo;

const styles = {
  myLogo: {
    height: "50px",
    cursor: "pointer",
    display: "flex",
  },
};
