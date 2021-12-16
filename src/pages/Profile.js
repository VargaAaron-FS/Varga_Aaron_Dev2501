import React from "react";
import styled from "styled-components";

export default function Pages() {
  return (
    <PagesContainer>
      Page content here!
    </PagesContainer>
  );
}

const PagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
  color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-weight: 700;
  border: 2px solid blue;
`;
