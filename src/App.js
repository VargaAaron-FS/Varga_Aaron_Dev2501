import React from "react";
import styled from "styled-components";

// import logo from "./logo.svg";

// Components
import SideNav from "./components/SideNav";

export default function App() {
  return (
    <AppContainer>
      <SideNav />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
`;
