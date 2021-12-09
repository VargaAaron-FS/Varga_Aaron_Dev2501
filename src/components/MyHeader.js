// Import icons for nav
import { MdDashboard } from "react-icons/md";

export default function MyHeader() {
  return (
    <header style={styles.headerContainer}>
      <h1 style={styles.h1}>My Wallet</h1>
      <nav style={styles.navContainer}>
        <MdDashboard style={styles.navIcons} />
      </nav>
    </header>
  );
}

const styles = {
  headerContainer: {
    color: "white",
    padding: "1rem",
    backgroundColor: "red",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navContainer: {
    display: "flex",
    alignItems: "center",
  },
  h1: {
    color: "white",
    margin: "0",
    padding: "0",
    lineHeight: "1.5rem",
    fontSize: "1.5rem",
  },
  navIcons: {
    fontSize: "1.5rem",
    cursor: "pointer",
  },
};