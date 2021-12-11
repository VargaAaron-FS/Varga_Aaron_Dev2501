import React from "react";

// Components
import SideNav from "./components/SideNav";
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";

// Routing
import { Routes, Route } from "react-router-dom";

// Pages
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Income from "./pages/Income";
import Savings from "./pages/Savings";
import Spending from "./pages/Spending";
import Settings from "./pages/Settings";
import LogOut from "./pages/LogOut";

export default function App() {
  return (
    <div style={styles.appContainer}>
      <SideNav />
      <div style={styles.headerMainContainer}>
        <MyHeader />
        <main style={styles.mainContainer}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="reports" element={<Reports />} />
            <Route path="income" element={<Income />} />
            <Route path="savings" element={<Savings />} />
            <Route path="spending" element={<Spending />} />
            <Route path="settings" element={<Settings />} />
            <Route path="logout" element={<LogOut />} />
          </Routes>
        </main>
        <MyFooter />
      </div>
    </div>
  );
}

const styles = {
  appContainer: {
    display: "flex",
    flexDirection: "row",
    padding: "0",
    backgroundColor: "#fff",
  },
  headerMainContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    backgroundColor: "#eee",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    rowGap: "1rem",
    padding: ".25rem",
  },
  dataContainer: {
    display: "flex",
    backgroundColor: "#fff",
    padding: "1rem",
  },
  dashH1: {
    color: "#073b4c",
    margin: "0",
    lineHeight: "1.5rem",
    fontSize: "1.5rem",
    display: "flex",
  },
  reportsH1: {
    color: "#118ab2",
    margin: "0",
    lineHeight: "1.5rem",
    fontSize: "1.5rem",
    display: "flex",
  },
  incomeH1: {
    color: "#06d6a0",
    margin: "0",
    lineHeight: "1.5rem",
    fontSize: "1.5rem",
    display: "flex",
  },
  savingsH1: {
    color: "#ffd166",
    margin: "0",
    lineHeight: "1.5rem",
    fontSize: "1.5rem",
    display: "flex",
  },
  spendingH1: {
    color: "#ef476f",
    margin: "0",
    lineHeight: "1.5rem",
    fontSize: "1.5rem",
    display: "flex",
  },
};
