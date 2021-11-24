import React, { Component } from "react";
// import Exports from "./components/Export";
// import Classes from "./components/Class";
// import Consts from "./components/Const";
import Dummy from "./components/Dummy";
// Add images
import AvatarIcon from "./img/icons8-user-male.svg";
import MyAvatar from "./components/MyAvatar";

import MyHeader from "./components/MyHeader";

// React icons
// https://react-icons.github.io/react-icons/#/
import { Fa500Px, FaAirbnb, FaApple } from "react-icons/fa";

class App extends Component {
  render() {
    return (
      <div>
        <MyHeader />
        <div style={styles.container}>
          <div style={styles.box}>
            <h1>Avatar Example</h1>
            <MyAvatar AvatarIcon={AvatarIcon} />
            <img src={AvatarIcon} alt="Logo" style={styles.logo} />
          </div>
          <div style={styles.box}>
            <h1>Icons Example</h1>
            <p style={styles.icons}>
              {/* Icons here! */}
              <Fa500Px />
              <FaAirbnb />
              <FaApple />
            </p>
          </div>
          {/* <Exports /> */}
          {/* <Classes /> */}
          {/* <Consts /> */}
          <Dummy />
        </div>
      </div>
    );
  }
}

export default App;

const styles = {
  logo: {
    height: "50px",
    width: "50px",
  },
  container: {
    padding: "1rem",
    margin: "0 auto",
  },
  box: {
    padding: "2rem",
    backgroundColor: "#eee",
    margin: "0 0 1rem 0",
  },
  icons: {
    fontSize: "2rem",
  },
};
