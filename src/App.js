import SideNav from "./components/SideNav";

export default function App() {
  return (
    <div style={styles.appContainer}>
      <SideNav />
      <h1 style={styles.h1}>Dashboard</h1>
    </div>
  );
}

const styles = {
  appContainer: {
    display: "flex",
    padding: "0",
    backgroundColor: "#eee",
  },
  h1: {
    color: "black",
    margin: "0",
    padding: "1rem",
    lineHeight: "1.5rem",
  }
}