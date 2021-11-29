import React from "react";

// Button component
import ButtonDarkTextOnly from "../components/buttons/ButtonDarkTextOnly";

const MyNav = (props) => {
  return (
    <nav style={styles.nav}>
      <ButtonDarkTextOnly buttonText="Newsfeed" buttonType="button" />
      <ButtonDarkTextOnly buttonText="Messages" buttonType="button" />
      <ButtonDarkTextOnly buttonText="Watch" buttonType="button" />
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
