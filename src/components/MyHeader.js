import React from "react";
import MyLogo from "./MyLogo";
// import MyIcons from "./MyIcons";
// import {} from "react-icons/fa";
import LogoIcon from "../img/av-logo.jpg";

const MyHeader = props => {
  return (
    <header>
      <div style={styles.left}>
        <h1 style={styles.h1}>
          <MyLogo LogoIcon={LogoIcon}/>
        </h1>
      </div>
    </header>
  )
}

export default MyHeader;

const styles = {
  h1: {
    margin: "0",
    padding: "0",
  },
  left: {

  },
  logo: {

  },
}
