import SideNav from "./components/SideNav";
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
import "./App.css";

export default function App() {
  return (
    <div style={styles.appContainer}>
      <SideNav />
      <div style={styles.headerMainContainer}>
        <MyHeader />
        <main style={styles.mainContainer}>
          <div style={styles.pTitleContainer}>
            <h1 style={styles.dashH1}>Dashboard</h1>
          </div>
          <div style={styles.pTitleContainer}>
            <h1 style={styles.dashH1}>
              Dashboard
            </h1>
          </div>
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
    margin: "1rem",
    display: "flex",
    flexDirection: "row",
    columnGap: "1rem",
  },
  pTitleContainer: {
    display: "flex",
    backgroundColor: "#fff",
    padding: "1rem",
    width: "50%",
  },
  dashH1: {
    color: "#073b4c",
    margin: "0",
    lineHeight: "1.5rem",
    fontSize: "1.5rem",
    display: "flex",
  },
};
