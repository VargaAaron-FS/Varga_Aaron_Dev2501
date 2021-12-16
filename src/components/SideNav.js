import React from "react";
import styled from "styled-components";

import {
  RiSettingsFill,
  RiDashboardFill,
  RiUserFill,
  RiBriefcase5Fill,
  RiBookmarkFill,
  RiSettings5Fill,
} from "react-icons/ri";

// import logo from "./logo.svg";

export default function SideNav() {
  return (
    <SideNavContainer>
      <LogoContainer>
        <RiSettingsFill /> <LogoText>UI</LogoText>
      </LogoContainer>
      <Nav>
        <Anchor href="/">
          <RiDashboardFill style={{ fontSize: "1.5rem" }} /> Dashboard
        </Anchor>
        <Anchor href="/">
          <RiUserFill style={{ fontSize: "1.5rem" }} /> Profile
        </Anchor>
        <Anchor href="/">
          <RiBriefcase5Fill style={{ fontSize: "1.5rem" }} /> Job Feed
        </Anchor>
        <Anchor href="/">
          <RiBookmarkFill style={{ fontSize: "1.5rem" }} /> Saved Jobs
        </Anchor>
        <Anchor href="/">
          <RiSettings5Fill style={{ fontSize: "1.5rem" }} /> Settings
        </Anchor>
      </Nav>
    </SideNavContainer>
  );
}

const SideNavContainer = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 1rem 3rem 2rem 3rem;
  background: blue;
  height: calc(100vh - 3rem);
  row-gap: 3rem;
  z-index: 5;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

const Anchor = styled.a`
  text-decoration: none;
  color: white;
  font-weight: 700;
  font-size: 1rem;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  &&:hover {
    opacity: 0.75;
  }
`;

const LogoContainer = styled.div`
  font-size: 3rem;
  display: flex;
  flex-direction: row;
  color: white;
  align-items: center;
  justify-content: center;
`;

const LogoText = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
`;
