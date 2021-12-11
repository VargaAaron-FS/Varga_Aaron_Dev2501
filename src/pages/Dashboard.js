import React from "react";
import styled from "styled-components";

export default function Dashboard() {
  return (
    <section style={styles.dashContainer}>
      <p style={styles.pText}>This is my Dashboard!</p>
      <Container>
        <Button>Normal Button</Button>
        <Button primary>Primary Button</Button>
      </Container>
    </section>
  );
}

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;

  &:hover {
    color: red;
    font-weight: 700;
  }
`;

const Container = styled.div`
  text-align: center;
`;

const styles = {
  dashContainer: {
    color: "#073b4c",
    lineHeight: "1.5rem",
    fontSize: "1rem",
    display: "flex",
    backgroundColor: "#fff",
    padding: "1rem",
    margin: "1rem",
  },
  pText: {
    margin: "0",
    fontSize: "1rem",
  },
};
