// Import icons for nav
import { MdPerson } from "react-icons/md";
import { GiDolphin } from "react-icons/gi";

export default function MyHeader() {
  return (
    <header style={styles.headerContainer}>
      <div style={styles.logoContainer}>
        <GiDolphin style={styles.dolfinLogo} />
        <h1 style={styles.h1}>Dolfin</h1>
      </div>
      <nav style={styles.navContainer}>
        <MdPerson style={styles.headerAvatar} />
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
