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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#333",
    marginTop: "auto",
  },
  footerP: {
    margin: "0",
    padding: "0",
    fontSize: "1rem",
    color: "#fff",
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
    color: "#fff",
  },
};
