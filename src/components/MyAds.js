import React from "react";

// Import buttons
import ButtonLight from "./buttons/ButtonLight";
import ButtonLightOutlineOnly from "./buttons/ButtonLightOutlineOnly";

// Import icons
import { FaShare } from "react-icons/fa";

const MyAds = (props) => {
  return (
    <article style={styles.myArticle}>
      <img src={props.adImageUrl} alt={props.adImageAlt} style={styles.adImage} />
      <h1>My Ad 1</h1>
      <p>Some text goes here!</p>
      <div style={styles.buttonContainer}>
        <ButtonLight buttonText="Learn More" />
        {/* How do I set it up so I can have the option of having an icon in a button or not?
        I figured out how to do it, but I need to figure out how to adjust the margin for when
        the icon is and is not in with the text.
        */}
        <ButtonLightOutlineOnly buttonText="Share" iconOption={<FaShare />} />
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
    margin: "1rem",
    padding: "1rem",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.25)",
  },
  adImage: {
    borderRadius: ".25rem .25rem 0 0",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
};
