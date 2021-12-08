// Import icons for nav
import { MdDashboard } from "react-icons/md";

export default function SideNav() {
  return (
    <aside style={styles.sideNavContainer}>
      <nav>
        <MdDashboard />
      </nav>
    </aside>
  );
}

const styles = {
  sideNavContainer: {
    color: "white",
    height: "100vh",
    padding: "1rem",
    backgroundColor: "black",
    display: "flex",
    flexDirection: "row",
  }
}