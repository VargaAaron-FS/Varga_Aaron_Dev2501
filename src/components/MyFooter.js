// Import icon(s)
import { MdCopyright } from "react-icons/md";
import { VscGithub } from "react-icons/vsc";

export default function MyFooter() {
  return (
    <footer style={styles.footerContainer}>
        <p style={styles.footerP}>
          <MdCopyright style={styles.copyIcon} /> 2021 Dollar Financial
          Technology, LLC. All rights reserved.
        </p>
        <div style={styles.footerIconsContainer}>
          <VscGithub style={styles.footerIcons} />
        </div>
    </footer>
  );
}

const styles = {
  footerContainer: {
    padding: "1rem",
    display: "flex",
    height: "100%",
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  footerP: {
    margin: "0",
    padding: "0",
    fontSize: "1rem",
    color: "#333",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  copyIcon: {
    marginRight: ".25rem",
    fontSize: "1rem",
  },
  footerIconsContainer: {
    display: "flex",
    fontSize: "1.5rem",
  },
  footerIcons: {
    cursor: "pointer",
  },
};
