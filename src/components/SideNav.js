import React from "react";

// Import icons for nav
import {
  MdDashboard,
  MdAssessment,
  MdAttachMoney,
  MdSavings,
  MdCreditCard,
} from "react-icons/md";

import { Link } from "react-router-dom";

export default function SideNav() {
  return (
    <aside style={styles.sideNavContainer}>
      <nav style={styles.navContainer}>
        <Link to="/dashboard">
          <MdDashboard style={styles.dashIcon} />
        </Link>
        <Link to="/reports">
          <MdAssessment style={styles.reportsIcon} />
        </Link>
        <Link to="/income">
          <MdAttachMoney style={styles.incomeIcon} />
        </Link>
        <Link to="/savings">
          <MdSavings style={styles.savingsIcon} />
        </Link>
        <Link to="/spending">
          <MdCreditCard style={styles.spendingIcon} />
        </Link>
      </nav>
    </aside>
  );
}

const styles = {
  sideNavContainer: {
    color: "#000",
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
    cursor: "pointer",
    padding: "0 1rem",
  },
  dashIcon: {
    fontSize: "2rem",
    cursor: "pointer",
    padding: "0 1rem",
    color: "#333",
  },
  reportsIcon: {
    fontSize: "2rem",
    cursor: "pointer",
    padding: "0 1rem",
    color: "#118ab2",
  },
  incomeIcon: {
    fontSize: "2rem",
    cursor: "pointer",
    padding: "0 1rem",
    color: "#06d6a0",
  },
  savingsIcon: {
    fontSize: "2rem",
    cursor: "pointer",
    padding: "0 1rem",
    color: "#EA638C",
  },
  spendingIcon: {
    fontSize: "2rem",
    cursor: "pointer",
    padding: "0 1rem",
    color: "#ffcb1b",
  },
};
