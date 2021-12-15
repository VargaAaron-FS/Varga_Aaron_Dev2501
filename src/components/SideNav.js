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
      <RiSettingsFill style={{ fontSize: "3rem" }} />
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

const SideNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
  background: blue;
  height: calc(100vh - 4rem);
  row-gap: 3rem;
  color: white;
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
