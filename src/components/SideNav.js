// Import icons for nav
import { MdDashboard, MdAssessment, MdAttachMoney, MdSavings, MdCreditCard } from "react-icons/md";

export default function SideNav() {
  return (
    <aside style={styles.sideNavContainer}>
      <nav style={styles.navContainer}>
        <MdDashboard style={styles.dashIcon} />
        <MdAssessment style={styles.reportsIcon} />
        <MdAttachMoney style={styles.incomeIcon} />
        <MdSavings style={styles.savingsIcon} />
        <MdCreditCard style={styles.spendingIcon} />
      </nav>
    </aside>
  );
}

const styles = {
  sideNavContainer: {
    color: "#000",
    height: "calc(100vh - 2rem)",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    paddingTop: "1.5rem",
    borderRight: "2px solid #eee",
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
  dashIcon: {
    fontSize: "1.5rem",
    cursor: "pointer",
    padding: "0 1rem",
    color: "#073b4c",
  },
  reportsIcon: {
    fontSize: "1.5rem",
    cursor: "pointer",
    padding: "0 1rem",
    color: "#118ab2",
  },
  incomeIcon: {
    fontSize: "1.5rem",
    cursor: "pointer",
    padding: "0 1rem",
    color: "#06d6a0",
  },
  savingsIcon: {
    fontSize: "1.5rem",
    cursor: "pointer",
    padding: "0 1rem",
    color: "#ffd166",
  },
  spendingIcon: {
    fontSize: "1.5rem",
    cursor: "pointer",
    padding: "0 1rem",
    color: "#ef476f",
  },
};
