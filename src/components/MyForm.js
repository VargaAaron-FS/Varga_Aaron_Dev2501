import React from "react";

import ButtonLight from "./buttons/ButtonLight";

// import avatar
import MyAvatar from "../components/MyAvatar";
import ImageUrl from "../img/icons8-user-male.svg";

const MyForm = (props) => {
  return (
    <form style={styles.myForm} onSubmit={props.addName}>
      <div style={styles.inputContainer}>
        <input style={styles.postTitle} type="text" placeholder="Enter your post title" />
        <textarea
          style={styles.textArea}
          placeholder="Write your post message"
        ></textarea>
      </div>
      <div style={styles.buttonContainer}>
        <div style={styles.avatarContainer}>
          <MyAvatar AvatarIcon={ImageUrl} AvatarAlt="User Avatar" />
          <p style={styles.userQuestion}>What's on your mind, {props.userName}?</p>
        </div>
        <ButtonLight buttonText="Submit" buttonType="submit" />
      </div>
    </form>
  );
};

export default MyForm;

const styles = {
  myForm: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#1F2937",
    padding: "2rem",
    borderRadius: ".25rem",
    rowGap: "2rem",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    rowGap: "1rem",
  },
  postTitle: {
    padding: "1rem",
    borderRadius: ".25rem",
    border: "2px solid #eee",
    fontFamily: "Poppins",
  },
  textArea: {
    fontFamily: "Poppins",
    border: "2px solid #eee",
    padding: "1rem",
    borderRadius: ".25rem",
    resize: "vertical",
  },
  input: {
    display: "flex",
    padding: ".5rem 1rem",
    borderRadius: ".25rem",
    fontFamily: "Poppins",
    border: "2px solid #eee",
    margin: ".5rem",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  avatarContainer: {
    display: "flex",
    flexDirection: "row",
    columnGap: "1rem",
  },
  userQuestion: {
    color: "white",
  },
};
