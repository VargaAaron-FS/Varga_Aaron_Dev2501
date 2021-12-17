import React, { useState } from "react";
import styled from "styled-components";

// Components
import SideNav from "./components/SideNav";
import MyHeader from "./components/MyHeader";
import SideNavExtension from "./components/SideNavExtension";
import MyFooter from "./components/MyFooter";

// Pages
import EditProfile from "./pages/EditProfile";

// Routing
import { Routes, Route } from "react-router-dom";

export default function App() {
  const [userData] = useState([]);
  const [isLoaded] = useState([{ isLoaded: true }]);

  return (
    <div style={{ display: "flex", flexDirection: "column", flexGrow: "1" }}>
      <AppContainer>
        <SideNav />
        <MainContainer>
          <MyHeader pageTitle="Profile" />
          <UtilityContainer>
            <SideNavExtension />
            <ContentContainer>
              <ContentCard>
                <Routes>
                  <Route path="/" element={<EditProfile />} />
                </Routes>
              </ContentCard>
            </ContentContainer>
          </UtilityContainer>
        </MainContainer>
      </AppContainer>
      <MyFooter />
    </div>
  );
}

const AppContainer = styled.div`
  display: flex;
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  background: white;
  flex-grow: 1;
`;

const ContentContainer = styled.div`
  display: flex;
  padding: 2.25rem 3rem;
  background: #eee;
  flex-grow: 1;
`;

const ContentCard = styled.div`
  padding: 2rem 3rem 3rem 3rem;
  background: white;
  border-radius: 0.25rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  flex-grow: 1;
`;

const UtilityContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
