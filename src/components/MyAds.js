import React from "react";

// Import buttons
import ButtonDark from "./buttons/ButtonDark";

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
        <h1 style={styles.h1}>{props.adHeadingText}</h1>
        <p style={styles.paragraphText}>{props.adParaText}</p>
        <div style={styles.buttonContainer}>
          <ButtonDark
            buttonText="View"
            buttonType="button"
            iconSpace="&nbsp;&nbsp;"
            iconOption={<FaExternalLinkAlt />}
          />
          <ButtonDark
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
    border: "2px solid #eee",
    marginTop: "2rem",
  },
  adImage: {
    borderRadius: ".25rem .25rem 0 0",
  },
  h1: {
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
  },
  copyContainer: {
    padding: "1rem",
    backgroundColor: "#1F2937",
    borderRadius: "0 0 .25rem .25rem",
  },
};
