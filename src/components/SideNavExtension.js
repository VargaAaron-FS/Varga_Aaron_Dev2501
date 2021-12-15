import React from 'react';
import styled from 'styled-components';

import {
  RiEditFill,
  RiNotificationFill,
  RiPriceTagFill,
  RiShieldCheckFill,
} from "react-icons/ri";

// import logo from "./logo.svg";

export default function SideNavExtension() {
  return (
    <SideNavExtContainer>
      <Nav>
        <Anchor href="/">
          <RiEditFill style={{ fontSize: "1.5rem" }} /> Edit Profile
        </Anchor>
        <Anchor href="/">
          <RiNotificationFill style={{ fontSize: "1.5rem" }} /> Notifications
        </Anchor>
        <Anchor href="/">
          <RiPriceTagFill style={{ fontSize: "1.5rem" }} /> Choose Plan
        </Anchor>
        <Anchor href="/">
          <RiShieldCheckFill style={{ fontSize: "1.5rem" }} /> Password & Security
        </Anchor>
      </Nav>
    </SideNavExtContainer>
  );
}

const SideNavExtContainer = styled.aside`
  display: flex;
  background: #fff;
  padding: 2.25rem 3rem;
  color: blue;
  height: calc(100vh - 169px);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, .1);
  z-index: 0;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

const Anchor = styled.a`
  text-decoration: none;
  color: blue;
  font-weight: 700;
  font-size: 1rem;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  &&:hover {
    opacity: 0.5;
  }
`;
