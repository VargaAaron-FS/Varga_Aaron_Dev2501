import React from "react";

import MyAvatar from "../components/MyAvatar";
import ImageUrl from "../img/icons8-user-male.svg";

// Icon(s)
import { FaTimes } from "react-icons/fa";

const MyPost = (props) => {
  return (
    <aside style={styles.postContainer}>
      <div style={styles.buttonsContainer}>
        <div style={styles.userStyle}>
          <MyAvatar AvatarIcon={ImageUrl} AvatarAlt="User Avatar" />
          <h2 style={styles.h2}>{props.userName}</h2>
        </div>
        {/* Close Icon */}
        <FaTimes style={styles.deleteBtn} />
      </div>
      <div style={styles.contentContainer}>
        <p>{props.postMessage}</p>
        {/* Image for post goes here */}
        <img src={props.postImgUrl} alt={props.postImgAlt} />
      </div>
    </aside>
  );
};

export default MyPost;

const styles = {
  postContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: ".25rem",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  userStyle: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    columnGap: "1rem",
  },
  h2: {
    margin: "0",
  },
  deleteBtn: {
    color: "#ff0f0f",
    cursor: "pointer",
  },
};
