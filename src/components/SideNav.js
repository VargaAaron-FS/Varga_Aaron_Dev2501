// Import icons for nav
import {
  MdDashboard,
  MdAssessment,
  MdAttachMoney,
  MdSavings,
  MdCreditCard,
} from "react-icons/md";

import ReactTooltip from "react-tooltip";

import { Link } from "react-router-dom";

export default function SideNav() {
  return (
    <aside style={styles.sideNavContainer}>
      <nav style={styles.navContainer}>
        <ReactTooltip place="right" type="dark" effect="solid" />
        <Link to="/dashboard">
          <MdDashboard style={styles.dashIcon} data-tip="Dashboard" />
        </Link>
        <Link to="/reports">
          <MdAssessment style={styles.reportsIcon} data-tip="Reports" />
        </Link>
        <Link to="/income">
          <MdAttachMoney style={styles.incomeIcon} data-tip="Income" />
        </Link>
        <Link to="/savings">
          <MdSavings style={styles.savingsIcon} data-tip="Savings" />
        </Link>
        <Link to="/spending">
          <MdCreditCard style={styles.spendingIcon} data-tip="Spending" />
        </Link>
      </nav>
    </aside>
  );
}

const styles = {
  sideNavContainer: {
    color: "#000",
    height: "calc(100vh - 1.5rem)",
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
