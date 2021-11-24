import React from "react";

// Dummy Component
const MyAvatar = (props) => {
  return (
    <img src={props.AvatarIcon} alt={props.AvatarAlt} style={styles.myAvatar} />
  );
};

export default MyAvatar;

const styles = {
  myAvatar: {
    height: "calc(32px - .5rem)", // calc to offset padding
    cursor: "pointer",
    borderRadius: "50%",
    backgroundColor: "white",
    padding: ".25rem",
  },
};
