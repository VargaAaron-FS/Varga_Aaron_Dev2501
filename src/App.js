import SideNav from "./components/SideNav";
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";

export default function App() {
  return (
    <div style={styles.appContainer}>
      <SideNav />
      <div style={styles.headerMainContainer}>
        <MyHeader />
        <main style={styles.mainContainer}>
          <h1 style={styles.dashH1}>Dashboard</h1>
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
    backgroundColor: "#fff",
    padding: "1rem",
    margin: "1rem",
  },
  dashH1: {
    color: "#073b4c",
    margin: "0",
    lineHeight: "1.5rem",
    fontSize: "1.5rem",
  },
};
