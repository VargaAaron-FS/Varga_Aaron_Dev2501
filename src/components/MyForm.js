import React from "react";
import ButtonDark from "./buttons/ButtonDark";
// import icons if needed

const MyForm = (props) => {
  return (
    <form style={styles.myForm} onSubmit={props.addName}>
      <div style={styles.inputContainer}>
        <input type="text" style={styles.input} placeholder="First Name" />
        <input type="text" style={styles.input} placeholder="Last Name" />
      </div>
      <div style={styles.inputContainer}>
        <input type="text" style={styles.input} placeholder="Address" />
        <input type="text" style={styles.input} placeholder="City" />
      </div>
      <div style={styles.inputContainer}>
        <input type="text" style={styles.input} placeholder="State" />
        <input type="number" style={styles.input} placeholder="Zip Code" />
      </div>
      <div style={styles.inputContainer}>
        <input type="email" style={styles.input} placeholder="Email" />
        <input type="tel" style={styles.input} placeholder="Phone" />
      </div>
      <div style={styles.buttonContainer}>
        <ButtonDark buttonText="Submit" />
      </div>
    </form>
  );
};

export default MyForm;

const styles = {
  myForm: {
    display: "flex",
    flexDirection: "column",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
  },
  input: {
    display: "flex",
    padding: ".5rem 1rem",
    borderRadius: ".25rem",
    fontFamily: "Poppins",
    boxShadow: "inset 0px 0px 5px rgba(0,0,0,0.05)",
    border: "2px solid #eee",
    margin: ".5rem",
  },
  buttonContainer: {
    display: "inline-block",
    margin: ".5rem",
  }
};
