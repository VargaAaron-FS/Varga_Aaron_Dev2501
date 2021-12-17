import React from "react";
import styled from "styled-components";

import {
  RiEditBoxFill,
  RiNotificationFill,
  RiPriceTagFill,
  RiShieldCheckFill,
} from "react-icons/ri";

export default function SideNavExtension() {
  return (
    <SideNavExtContainer>
      <Nav>
        <Anchor href="/">
          <RiEditBoxFill style={{ fontSize: "1.5rem" }} /> Edit Profile
        </Anchor>
        <Anchor href="/">
          <RiNotificationFill style={{ fontSize: "1.5rem" }} /> Notifications
        </Anchor>
        <Anchor href="/">
          <RiPriceTagFill style={{ fontSize: "1.5rem" }} /> Choose Plan
        </Anchor>
        <Anchor href="/">
          <RiShieldCheckFill style={{ fontSize: "1.5rem" }} /> Password &
          Security
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
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  z-index: 0;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

const Anchor = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 700;
  font-size: 1rem;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`;
