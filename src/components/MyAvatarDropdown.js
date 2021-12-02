import React from "react";

import { FaChevronDown } from "react-icons/fa";

// Dummy Component
const MyAvatar = (props) => {
  return (
    <div style={styles.avatarContainer} >
      <img src={props.AvatarIcon} alt={props.AvatarAlt} style={styles.myAvatar} />
      <span style={styles.chevronDown}>
        <FaChevronDown />
      </span>
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
    height: "calc(32px - .5rem)", // calc to offset padding
    borderRadius: "50%",
    backgroundColor: "white",
    padding: ".25rem",
  },
  chevronDown: {
    marginLeft: "-.25rem",
    color: "#1F2937",
    fontSize: ".5rem",
    backgroundColor: "white",
    borderRadius: "0 .25rem .25rem 0",
    display: "flex",
    alignItems: "center",
    padding: ".25rem",
  },
};
