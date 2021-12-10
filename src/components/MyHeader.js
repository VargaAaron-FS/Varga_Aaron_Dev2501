// Components
import MyLogo from "./MyLogo";
import MyAvatar from "./MyAvatar";

import ReactTooltip from "react-tooltip";

import { Link } from "react-router-dom";

export default function MyHeader() {
  return (
    <header style={styles.headerContainer}>
      <ReactTooltip place="right" type="dark" effect="solid" />
      <MyLogo />
      <nav style={styles.navContainer}>
        <Link to="/settings">
          <MyAvatar />
        </Link>
      </nav>
    </header>
  );
}

const styles = {
  headerContainer: {
    padding: "1rem",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "2px solid #eee",
  },
  navContainer: {
    display: "flex",
    alignItems: "center",
  },
  logoContainer: {
    display: "flex",
    cursor: "pointer",
  },
  h1: {
    margin: "0",
    padding: "0",
    lineHeight: "1.5rem",
    fontSize: "1.5rem",
    color: "#333",
  },
  dolfinLogo: {
    fontSize: "1.5rem",
    marginRight: "-.75rem",
    marginTop: "-.15rem",
    color: "#fbb1bd",
    zIndex: "1",
  },
  headerAvatar: {
    fontSize: "1.5rem",
    cursor: "pointer",
    padding: ".5rem",
    borderRadius: "50%",
    backgroundColor: "#333",
    color: "#fff",
  },
};
