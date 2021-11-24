import React from "react";
import MyLogo from "./MyLogo";
// import MyIcons from "./MyIcons";
// import {} from "react-icons/fa";
import LogoIcon from "../img/av-logo.svg";

const MyHeader = (props) => {
  return (
    <header style={styles.header}>
      <div style={styles.left}>
        <h1 style={styles.h1}>
          <MyLogo LogoIcon={LogoIcon} />
        </h1>
      </div>
    </header>
  );
};

export default MyHeader;

const styles = {
  header: {
    backgroundColor: "#1F2937",
    padding: "0",
    display: "flex",
  },
  h1: {
    margin: "0",
    padding: "0",
  },
  left: {},
  logo: {},
};
