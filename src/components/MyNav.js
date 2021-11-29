import React from "react";

// Button component
import ButtonDarkTextOnly from "../components/buttons/ButtonDarkTextOnly";

const MyNav = (props) => {
  return (
    <nav style={styles.nav}>
      <ButtonDarkTextOnly buttonText="Newsfeed" />
      <ButtonDarkTextOnly buttonText="Messages" />
      <ButtonDarkTextOnly buttonText="Watch" />
    </nav>
  );
};

export default MyNav;

const styles = {
  nav: {
    display: "flex",
    flexDirection: "column",
  },
};
