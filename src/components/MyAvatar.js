// Import icons for nav
import { MdPerson } from "react-icons/md";

import ReactTooltip from "react-tooltip";

export default function MyAvatar() {
  return (
    <div style={styles.avatarContainer} data-tip="Settings">
      <ReactTooltip place="right" type="dark" effect="solid" />
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
