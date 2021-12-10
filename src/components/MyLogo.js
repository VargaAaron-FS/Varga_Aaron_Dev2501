// Import icons for nav
import { GiDolphin } from "react-icons/gi";

export default function MyLogo() {
  return (
      <div style={styles.logoContainer}>
        <GiDolphin style={styles.dolfinLogo} />
        <h1 style={styles.logoH1}>Dolfin</h1>
      </div>
  );
}

const styles = {
  logoContainer: {
    display: "flex",
    cursor: "pointer",
  },
  logoH1: {
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
};
