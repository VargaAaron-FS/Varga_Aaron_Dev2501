// Import icons for nav
import { MdDashboard, MdAssessment, MdAttachMoney, MdSavings, MdCreditCard } from "react-icons/md";

export default function SideNav() {
  return (
    <aside style={styles.sideNavContainer}>
      <nav style={styles.navContainer}>
        <MdDashboard style={styles.navIcons} />
        <MdAssessment style={styles.navIcons} />
        <MdAttachMoney style={styles.navIcons} />
        <MdSavings style={styles.navIcons} />
        <MdCreditCard style={styles.navIcons} />
      </nav>
    </aside>
  );
}

const styles = {
  sideNavContainer: {
    color: "lightgreen",
    height: "calc(100vh - 2rem)",
    backgroundColor: "#333",
    display: "flex",
    flexDirection: "column",
    paddingTop: "1.5rem",
  },
  navContainer: {
    display: "flex",
    flexDirection: "column",
    rowGap: "1.5rem",
  },
  navIcons: {
    fontSize: "1.5rem",
    cursor: "pointer",
    padding: "0 1rem",
  },
};
