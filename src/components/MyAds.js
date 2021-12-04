import React from "react";

// Import buttons
import ButtonLightTextOnly from "./buttons/ButtonLightTextOnly";

// Import icons
import { FaShare, FaExternalLinkAlt } from "react-icons/fa";

const MyAds = (props) => {
  return (
    <article style={styles.myArticle}>
      <img
        src={props.adImageUrl}
        alt={props.adImageAlt}
        style={styles.adImage}
      />
      <div style={styles.copyContainer}>
        <h2 style={styles.h2}>{props.adHeadingText}</h2>
        <p style={styles.paragraphText}>{props.adParaText}</p>
        <div style={styles.buttonContainer}>
          <ButtonLightTextOnly
            buttonText="View"
            buttonType="button"
            iconSpace="&nbsp;&nbsp;"
            iconOption={<FaExternalLinkAlt />}
          />
          <ButtonLightTextOnly
            buttonText="Share"
            buttonType="button"
            iconSpace="&nbsp;&nbsp;"
            iconOption={<FaShare />}
          />
        </div>
      </div>
    </article>
  );
};

export default MyAds;

const styles = {
  myArticle: {
    display: "flex",
    flexDirection: "column",
    borderRadius: ".25rem",
    marginTop: "2rem",
    backgroundColor: "#1F2937",
  },
  adImage: {
    borderRadius: ".25rem",
    margin: "2rem 2rem 0 2rem",
    border: "2px solid #eee",
  },
  h2: {
    color: "white",
    margin: "0",
  },
  paragraphText: {
    color: "#eee",
    margin: "1rem 0 1.5rem 0",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    columnGap: "1rem",
  },
  copyContainer: {
    padding: "1rem 2rem 1.5rem 2rem",
    borderRadius: "0 0 .25rem .25rem",
  },
};
