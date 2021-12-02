import React from "react";

import ButtonLight from "./buttons/ButtonLight";

// import avatar
import MyAvatar from "../components/MyAvatar";
import ImageUrl from "../img/icons8-user-male.svg";

const MyForm = (props) => {
  return (
    <form style={styles.myForm} onSubmit={props.addName}>
      <div style={styles.inputContainer}>
        <textarea
          style={styles.textArea}
          placeholder="Write your post here"
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
    flexDirection: "row",
  },
  textArea: {
    fontFamily: "Poppins",
    width: "100%",
    border: "2px solid #eee",
    padding: "1rem",
    borderRadius: ".25rem",
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
