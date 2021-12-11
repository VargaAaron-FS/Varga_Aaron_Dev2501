import React from "react";

// Import icons for nav
import { MdPerson } from "react-icons/md";

export default function MyAvatar() {
  return (
    <div style={styles.avatarContainer}>
      <MdPerson style={styles.myAvatar} />
    </div>
  );
}

const styles = {
  avatarContainer: {
    display: "flex",
    alignItems: "center",
  },
  myAvatar: {
    fontSize: "1.5rem",
    cursor: "pointer",
    padding: ".5rem",
    borderRadius: "50%",
    backgroundColor: "#333",
    color: "#fff",
  },
};
