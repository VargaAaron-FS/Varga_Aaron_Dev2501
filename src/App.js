import React, { Component } from "react";

// Components
import MyHeader from "./components/MyHeader";
import MyAds from "./components/MyAds";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyPost from "./components/MyPost";

// Forms
import MyForm from "./components/MyForm";

// Images
import PhoneAdImage from "./img/phone-ad.jpg";
import ComputerAdImage from "./img/computer-ad.jpg";

// Post image url
import PostImgUrl from "./img/mountain-post-img.jpg";

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
            <MyForm userName="Aaron" />
            <MyPost
              postTitle="Rocky Mountain Trip"
              postMessage="I hope to move out to the mountains somewhere someday! Salt Lake City, Utah was beautiful."
              postImgAlt="Mountain"
              postImgUrl={PostImgUrl}
            />
          </div>
          <aside style={styles.asideAds}>
            <MyAds
              adImageUrl={PhoneAdImage}
              adImageAlt="New iPhone 13 Ad"
              adHeadingText="Shop the new iPhone 13"
              adParaText="The biggest Pro camera system upgrade ever. Super Retina XDR display with ProMotion for a faster, more responsive feel. Lightning-fast A15 Bionic chip. Superfast 5G. Durable design and the best battery life ever in an iPhone."
            />
            <MyAds
              adImageUrl={ComputerAdImage}
              adImageAlt="New MacBook Pro Ad"
              adHeadingText="Shop the new MacBook Pro"
              adParaText="The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life."
            />
          </aside>
        </main>
        <MyFooter />
      </div>
    );
  }
}

export default App;

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
    display: "flex",
    flexDirection: "column",
    background: "#eee",
    width: "60%",
    padding: "2rem",
    rowGap: "2rem",
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
