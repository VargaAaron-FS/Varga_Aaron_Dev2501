
export default function Settings() {
  return (
    <section style={styles.dashContainer}>
      <p>This is my Settings!</p>
    </section>
  );
}

const styles = {
  dashContainer: {
    color: "#000",
    height: "calc(100vh - 1.5rem)",
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    paddingTop: "1.5rem",
    borderRight: "2px solid #eee",
  },
};
