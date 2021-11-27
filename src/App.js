import React, { Component } from "react";
import MyHeader from "./components/MyHeader";

// Buttons
import ButtonDark from "./components/buttons/ButtonDark";
import ButtonLight from "./components/buttons/ButtonLight";
import ButtonLightOutline from "./components/buttons/ButtonLightOutline";

// Forms
import MyForm from "./components/MyForm";

class App extends Component {
  render() {
    return (
        <div>
          <MyHeader />
          <div style={styles.whiteBox}>
            <ButtonDark buttonText="Button Dark" />
          </div>
          <div style={styles.darkBox}>
            <ButtonLight buttonText="Button Light" />
          </div>
          <div style={styles.whiteBox}>
            <ButtonLightOutline buttonText="Button Light Outline" />
          </div>
          <div>
            <MyForm />
          </div>
        </div>
    );
  }
}

export default App;

// whiteBox and darkBox just to show buttons
const styles = {
  whiteBox: {
    padding: "2rem",
  },
  darkBox: {
    backgroundColor: "#1F2937",
    padding: "2rem",
    display: "inline-block",
  },
}
