import SideNav from "./components/SideNav";
import MyHeader from "./components/MyHeader";

export default function App() {
  return (
    <div style={styles.appContainer}>
      <SideNav />
      <main style={styles.main}>
        <MyHeader />
        <h1 style={styles.h1}>Dashboard</h1>
      </main>
    </div>
  );
}

const styles = {
  appContainer: {
    display: "flex",
    flexDirection: "row",
    padding: "0",
    backgroundColor: "#eee",
  },
  main: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  h1: {
    color: "black",
    margin: "0",
    padding: "1rem",
    lineHeight: "1.5rem",
    fontSize: "1.5rem",
  },
};
