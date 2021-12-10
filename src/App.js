import SideNav from "./components/SideNav";
import MyHeader from "./components/MyHeader";

export default function App() {
  return (
    <div style={styles.appContainer}>
      <SideNav />
      <main style={styles.main}>
      <MyHeader />
        <div style={styles.contentContainer}>
          
          <h1 style={styles.dashH1}>Dashboard</h1>
        </div>
      </main>
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
  main: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    backgroundColor: "#eee",
  },
  contentContainer: {
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
