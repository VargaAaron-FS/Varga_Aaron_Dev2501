import React from "react";
import styled from "styled-components";

import MyAvatar from "./MyAvatar";

import { RiNotificationFill, RiArrowDownSFill } from "react-icons/ri";

// import logo from "./logo.svg";

export default function MyHeader(props) {
  return (
    <Header>
      <ViewTitle>{props.pageTitle}</ViewTitle>
      <HeaderNav>
        <Anchor href="/">
          <RiNotificationFill style={{ fontSize: "1.5rem" }} />
        </Anchor>
        <Anchor href="/">
          <MyAvatar />
        </Anchor>
        <Anchor href="/">
          <RiArrowDownSFill
            style={{
              fontSize: "2.25rem",
              padding: "0",
              margin: "0",
              marginLeft: "-.45rem",
            }}
          />
        </Anchor>
      </HeaderNav>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  flex-direction: row;
  padding: 1.25rem 3rem;
  background: white;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;

const ViewTitle = styled.h2`
  font-size: 1.25rem;
  color: blue;
  font-weight: 700;
`;

const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;
  column-gap: 1rem;
`;

const Anchor = styled.a`
  display: flex;
  flex-direction: row;
  color: blue;
  text-decoration: none;
  font-size: 1rem;
`;
