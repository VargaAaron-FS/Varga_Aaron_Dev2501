// Import icon(s)
import { MdCopyright } from "react-icons/md";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function MyFooter() {
  return (
    <footer style={styles.footerContainer}>
        <p style={styles.footerP}>
          <MdCopyright style={styles.copyIcon} /> 2021 Dollar Financial
          Technology, LLC. All rights reserved.
        </p>
        <div style={styles.footerIconsContainer}>
          <FaFacebook style={styles.footerIcons} />
          <FaTwitter style={styles.footerIcons} />
          <FaInstagram style={styles.footerIcons} />
        </div>
    </footer>
  );
}

const styles = {
  footerContainer: {
    padding: "1rem",
    display: "inline",
    position: "absolute",
    bottom: "0rem",
    width: "calc(100% - 90px)",
  },
  footerP: {
    margin: "0",
    padding: "0",
    fontSize: "1rem",
    color: "#333",
    display: "inline",
    float: "left",
    lineHeight: "2rem",
  },
  copyIcon: {
    fontSize: "1rem",
    marginBottom: "-.15rem",
  },
  footerIconsContainer: {
    display: "inline",
    float: "right",
    textAlign: "right",
    lineHeight: "2rem",
    marginRight: "-1rem",
  },
  footerIcons: {
    cursor: "pointer",
    marginBottom: "-.25rem",
    fontSize: "1.25rem",
    color: "#333",
    marginRight: "1rem",
  },
};
