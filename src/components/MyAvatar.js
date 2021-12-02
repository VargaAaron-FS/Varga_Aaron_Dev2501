import React from "react";

// Dummy Component
const MyAvatar = (props) => {
  return (
    <div style={styles.avatarContainer} >
      <img src={props.AvatarIcon} alt={props.AvatarAlt} style={styles.myAvatar} />
    </div>
  );
};

export default MyAvatar;

const styles = {
  avatarContainer: {
    cursor: "pointer",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  myAvatar: {
    height: "calc(48px - 1rem)", // calc to offset padding
    borderRadius: "50%",
    backgroundColor: "#eee",
    padding: ".5rem",
  },
};
