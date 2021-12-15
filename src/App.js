import React from "react";
import styled from "styled-components";

// import logo from "./logo.svg";

// Components
import SideNav from "./components/SideNav";
import MyHeader from "./components/MyHeader";

export default function App() {
  return (
    <AppContainer>
      <SideNav />
      <MainContainer>
        <MyHeader />
      </MainContainer>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
