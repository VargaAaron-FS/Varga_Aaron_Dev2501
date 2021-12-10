// Import icons for nav
import {
  MdDashboard,
  MdAssessment,
  MdAttachMoney,
  MdSavings,
  MdCreditCard,
} from "react-icons/md";
import ReactTooltip from "react-tooltip";

export default function SideNav() {
  return (
    <aside style={styles.sideNavContainer}>
      <nav style={styles.navContainer}>
        <ReactTooltip place="right" type="dark" effect="solid" />
        <MdDashboard style={styles.dashIcon} data-tip="Dashboard" />
        <MdAssessment style={styles.reportsIcon} data-tip="Reports" />
        <MdAttachMoney style={styles.incomeIcon} data-tip="Income" />
        <MdSavings style={styles.savingsIcon} data-tip="Savings" />
        <MdCreditCard style={styles.spendingIcon} data-tip="Spending" />
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
