import React, { Component } from "react";

import MyHeader from "./components/MyHeader";
import MyAds from "./components/MyAds";

// Buttons
import ButtonDark from "./components/buttons/ButtonDark";
import ButtonLight from "./components/buttons/ButtonLight";
import ButtonDarkOutlineOnly from "./components/buttons/ButtonDarkOutlineOnly";
import ButtonLightOutlineOnly from "./components/buttons/ButtonLightOutlineOnly";

// Forms
import MyForm from "./components/MyForm";

// Images
import PhoneAdImage from "./img/phones-ad.jpg";

class App extends Component {
  render() {
    return (
        <div>
          <MyHeader />
          <main>
            <div style={styles.whiteBox}>
              <ButtonDark buttonText="Button Dark" />
            </div>
            <div style={styles.darkBox}>
              <ButtonLight buttonText="Button Light" />
            </div>
            <div style={styles.darkBox}>
              <ButtonLightOutlineOnly buttonText="Button Light Outline" />
            </div>
            <div style={styles.whiteBox}>
              <ButtonDarkOutlineOnly buttonText="Button Light Outline" />
            </div>
            <div>
              <MyForm />
            </div>
              <MyAds adImageUrl={PhoneAdImage} adImageAlt="Phone Ad"  />
              <MyAds  />
          </main>
          <footer></footer>
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
