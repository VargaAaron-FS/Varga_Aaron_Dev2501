// Import icons for nav
import { MdPerson } from "react-icons/md";

export default function MyHeader() {
  return (
    <header style={styles.headerContainer}>
      <h1 style={styles.h1}>My Wallet</h1>
      <nav style={styles.navContainer}>
        <MdPerson style={styles.headerAvatar} />
      </nav>
    </header>
  );
}

const styles = {
  headerContainer: {
    color: "#000",
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
  h1: {
    margin: "0",
    padding: "0",
    lineHeight: "1.5rem",
    fontSize: "1.5rem",
  },
  headerAvatar: {
    fontSize: "1.5rem",
    cursor: "pointer",
    padding: ".5rem",
    borderRadius: "50%",
    backgroundColor: "#000",
    color: "#fff",
  },
};