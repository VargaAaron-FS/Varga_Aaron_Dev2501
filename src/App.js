import React from "react";
import styled from "styled-components";

// import logo from "./logo.svg";

// Components
import SideNav from "./components/SideNav";
import MyHeader from "./components/MyHeader";
import SideNavExtension from "./components/SideNavExtension";

export default function App() {
  return (
    <AppContainer>
      <SideNav />
      <MainContainer>
        <MyHeader />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <SideNavExtension />
          <ContentContainer>
            <ContentCard>Content Card!</ContentCard>
          </ContentContainer>
        </div>
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
  height: 100vh;
  background: white;
`;

const ContentContainer = styled.div`
  display: flex;
  padding: 2.25rem 3rem;
  background: #eee;
  flex-grow: 1;
`;

const ContentCard = styled.div`
  padding: 2rem 3rem;
  background: white;
  border-radius: 0.25rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  flex-grow: 1;
`;
