// Import icons for nav
import { MdDashboard } from "react-icons/md";

export default function SideNav() {
  return (
    <aside style={styles.sideNavContainer}>
      <nav>
        <MdDashboard style={styles.navIcons} />
      </nav>
    </aside>
  );
}

const styles = {
  sideNavContainer: {
    color: "white",
    height: "calc(100vh - 2rem)",
    padding: "1rem",
    backgroundColor: "black",
    display: "flex",
    flexDirection: "row",
  },
  navIcons: {
    fontSize: "1.5rem",
    cursor: "pointer",
  },
};
