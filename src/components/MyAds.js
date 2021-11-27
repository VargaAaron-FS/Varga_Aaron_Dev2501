import React from "react";

// Import buttons
import ButtonLight from "./buttons/ButtonLight";
import ButtonLightOutlineOnly from "./buttons/ButtonLightOutlineOnly";

// Import image
import PhoneAd from "../img/phones-ad.jpg";

const MyAds = (props) => {
  return (
    <article style={styles.myArticle}>
      <img src={PhoneAd} alt="Ad for Phones" style={styles.adImage} />
      <h1>My Ad 1</h1>
      <p>Some text goes here!</p>
      <div style={styles.buttonContainer}>
        <ButtonLight buttonText="Learn more" />
        <ButtonLightOutlineOnly buttonText="Share" />
      </div>
    </article>
  );
};

export default MyAds;

const styles = {
  myArticle: {
    maxWidth: "320px",
    display: "flex",
    flexDirection: "column",
    borderRadius: ".25rem",
    backgroundColor: "#1F2937",
    color: "white",
  },
  adImage: {
    width: "100%",
    borderRadius: ".25rem .25rem 0 0",
  },
};
