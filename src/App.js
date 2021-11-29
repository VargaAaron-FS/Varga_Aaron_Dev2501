import React, { Component } from "react";

import MyHeader from "./components/MyHeader";
import MyAds from "./components/MyAds";
import MyNav from "./components/MyNav";

// Forms
import MyForm from "./components/MyForm";

// Images
import PhoneAdImage from "./img/phones-ad.jpg";
import ComputerAdImage from "./img/computer-ad.jpg";

// TODO: Create hover states in JS, not with styled components. I don't think styled components is necessary.

class App extends Component {
  render() {
    return (
      <div>
        <MyHeader />
        <main style={styles.main}>
          <aside style={styles.asideNav}>
            <MyNav />
          </aside>
          <div style={styles.mainContentArea}>
            <MyForm />
          </div>
          <aside style={styles.asideAds}>
            <MyAds
              adImageUrl={PhoneAdImage}
              adImageAlt="Phone Ad"
              adHeadingText="My Ad Title"
              adParaText="This is some text for my ad!"
            />
            <MyAds
              adImageUrl={ComputerAdImage}
              adImageAlt="Computer Ad"
              adHeadingText="My Ad Title 2"
              adParaText="This is also some text for my ad!"
            />
          </aside>
        </main>
        <footer>{/* Footer component will go here */}</footer>
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
  main: {
    display: "flex",
    flexDirection: "row",
  },
  mainContentArea: {
    background: "#eee",
    width: "60%",
    padding: "2rem",
  },
  asideAds: {
    width: "20%",
    padding: "0 2rem",
    paddingBottom: "2rem",
  },
  asideNav: {
    width: "20%",
    padding: "0 2rem",
    paddingBottom: "2rem",
    display: "flex",
  },
};
