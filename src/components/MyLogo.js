// Import icons for nav
import { GiDolphin } from "react-icons/gi";

export default function MyLogo() {
  return (
    <div style={styles.logoContainer}>
      <GiDolphin style={styles.dolfinIcon} />
      <h1 style={styles.logoH1}>Dolfin</h1>
      {/* "Dolfin" is a play on words I thought of combining "Dollar" and "Financial" and mashing them up to create the word "Dolphin" but spelled "Dolfin" - Dollar + Financial + Tech, LLC, or something like that, long form. Just tried to have fun with making a real name for the app! */}
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
    lineHeight: "2rem",
    fontSize: "2rem",
    color: "#333",
  },
  dolfinIcon: {
    fontSize: "2rem",
    marginRight: "-1rem",
    marginTop: "-.25rem",
    color: "#333",
    zIndex: "1",
  },
};
