import React from "react";
import styled from "styled-components";

// Import icon(s)
import { MdCopyright } from "react-icons/md";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function MyFooter() {
  return (
    <Footer style={styles.footerContainer}>
      <p style={styles.footerP}>
        <MdCopyright style={styles.copyIcon} /> 2021 Dollar Financial
        Technology, LLC. All rights reserved.
      </p>
      <div style={styles.footerIconsContainer}>
        <FaFacebook style={styles.footerIcons} />
        <FaTwitter style={styles.footerIcons} />
        <FaInstagram style={styles.footerIcons} />
      </div>
    </Footer>
  );
}

const styles = {
  footerContainer: {
    padding: "1rem",
    display: "flex",
    backgroundColor: "#333",
  },
  footerP: {
    margin: "0",
    padding: "0",
    fontSize: "1rem",
    color: "#eee",
    display: "flex",
    alignItems: "center",
  },
  copyIcon: {
    fontSize: "1rem",
    marginRight: ".25rem",
  },
  footerIconsContainer: {
    display: "flex",
    float: "right",
    textAlign: "right",
    lineHeight: "2rem",
    columnGap: "1rem",
    alignItems: "center",
  },
  footerIcons: {
    cursor: "pointer",
    fontSize: "1.5rem",
    color: "#eee",
  },
};

const Footer = styled.footer`
  flex-direction: row;
  justify-content: space-between;
  margin-top: auto;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1rem;
  }
`;
