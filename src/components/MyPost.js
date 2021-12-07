import React from "react";

import MyAvatar from "../components/MyAvatar";
import ImageUrl from "../img/icons8-user-male.svg";

// Icon(s)
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const MyPost = (props) => {
  return (
    <article key={props.i} style={styles.postContainer}>
      <div style={styles.buttonsContainer}>
        <div style={styles.userStyle}>
          <MyAvatar AvatarIcon={ImageUrl} AvatarAlt="User Avatar" />
          <h2 style={styles.h2} onChange={props.editPost}>{props.val.pTitle}</h2>
        </div>
        <div style={styles.iconsContainer}>
          {/* Close Icon */}
          <FaEdit style={styles.editBtn} onClick={props.editMe} />
          <FaTrashAlt style={styles.deleteBtn} onClick={props.deleteMe} />
        </div>
      </div>
      <div style={styles.contentContainer}>
        <p>{props.val.pMsg}</p>
        {/* Image for post goes here */}
        <div style={styles.imgContainer}>
          <img
            style={styles.postImgStyle}
            src={props.val.pImg}
            alt={props.val.pImgAlt}
          />
        </div>
      </div>
    </article>
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
    rowGap: "1rem",
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
    color: "#1F2937",
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    columnGap: "1rem",
  },
  editBtn: {
    color: "#1F2937",
    cursor: "pointer",
  },
  deleteBtn: {
    color: "#ff0f0f",
    cursor: "pointer",
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    rowGap: "1rem",
  },
  imgContainer: {
    // May or may not need...
  },
  postImgStyle: {
    width: "100%",
    maxHeight: "400px",
    objectFit: "cover",
    borderRadius: ".25rem",
    border: "2px solid #eee",
  },
};
