import React from 'react';
import styled from 'styled-components';

import MyAvatar from "./MyAvatar";

import {
  RiNotificationBadgeFill,
  RiArrowDownSFill
} from "react-icons/ri";

// import logo from "./logo.svg";

export default function MyHeader() {
  return (
    <Header>
      <ViewTitle>View Title</ViewTitle>
      <HeaderNav>
        <Anchor href="/"><RiNotificationBadgeFill /></Anchor>
        <Anchor href="/"><MyAvatar /></Anchor>
        <Anchor href="/"><RiArrowDownSFill /></Anchor>
      </HeaderNav>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  flex-direction: row;
  padding: 2rem 3rem;
  background: white;
  border-bottom: .25rem solid blue;
  justify-content: space-between;
  align-items: center;
`;

const ViewTitle = styled.h2`
  font-size: 1.25rem;
  color: blue;
  font-weight: 700;
`;

const HeaderNav = styled.nav`
  display: flex;
  flex-direction: row;
  column-gap: 1rem;
`;

const Anchor = styled.a`
  display: flex;
  flex-direction: row;
  color: blue;
  text-decoration: none;
  font-size: 1.5rem;
`;
