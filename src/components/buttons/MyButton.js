import React from "react";
import styled from "styled-components";

export default function MyButton(props) {
  return (
    <Button type={props.buttonType}>
      {props.buttonTitle}
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background: blue;
  border: none;
  border-radius: .25rem;
  padding: 1rem 2rem;
  cursor: pointer;
  width: auto;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
`;
