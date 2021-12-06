import React, { Component } from "react";

// Components
import MyHeader from "./components/MyHeader";
import MyAds from "./components/MyAds";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import MyPost from "./components/MyPost";
import MyForm from "./components/MyForm";

// Images

// - Ad images
import PhoneAdImage from "./img/phone-ad.jpg";
import ComputerAdImage from "./img/computer-ad.jpg";

// - Post images
import MountainImg from "./img/mountain-post-img.jpg";
import CodeImg from "./img/code.jpg";
import DogImg from "./img/doggy.jpg";
import NewPostImg from "./img/monkey.jpg";

class App extends Component {
  state = {
    pCard: [
      {
        pTitle: "I Love the Mountains",
        pMsg: "I loved visiting Salt Lake City, Utah!",
        pImg: MountainImg,
        pImgAlt: "Mountains",
      },
      {
        pTitle: "React is Fun",
        pMsg: "I am having so much fun learning React so far!",
        pImg: CodeImg,
        pImgAlt: "Programming Code",
      },
      {
        pTitle: "Dogs Are My Life",
        pMsg: "I want to rescue all of the dogs in the world.",
        pImg: DogImg,
        pImgAlt: "Dog",
      },
    ],
  };

  getTitle = (e) => {
    this.setState({ pTitle: e.target.value });
  };

  getMsg = (e) => {
    this.setState({ pMsg: e.target.value });
  };

  addItem = (e) => {
    e.preventDefault();
    this.setState({
      pCard: [
        ...this.state.pCard,
        { pTitle: this.state.pTitle, pMsg: this.state.pMsg, pImg: NewPostImg },
      ],
    });
    e.target.reset();
  };

  removeItem = (key) => {
    const newpCard = [...this.state.pCard];
    newpCard.splice(key, 1);
    this.setState(() => ({
      pCard: newpCard,
    }));
  };

  // Use filter method to remote item

  render() {
    let myList = this.state.pCard.map((element, i) => {
      return (
        <MyPost key={i} val={element} deleteMe={() => this.removeItem(i)} />
      );
    });

    return (
      <div>
        <MyHeader />
        <main style={styles.main}>
          <aside style={styles.asideNav}>
            <MyNav />
          </aside>
          <div style={styles.mainContentArea}>
            <MyForm
              userName="Aaron"
              getTitle={this.getTitle}
              getMsg={this.getMsg}
              addItem={this.addItem}
              buttonText="Add Post"
              buttonType="submit"
            />
            {myList}
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
