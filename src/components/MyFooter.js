import React from "react";
import styled from "styled-components";

import {
  RiCopyrightFill,
  RiFacebookFill,
  RiTwitterFill,
  RiInstagramFill,
} from "react-icons/ri";

export default function MyFooter() {
  return (
    <Footer>
      <FooterP>
        <RiCopyrightFill style={{ marginRight: ".25rem" }} /> Copyright UI 2021.
        All rights reserved.
      </FooterP>
      <FooterIcons>
        <Link href="/">
          <RiFacebookFill />
        </Link>
        <Link href="/">
          <RiTwitterFill />
        </Link>
        <Link href="/">
          <RiInstagramFill />
        </Link>
      </FooterIcons>
    </Footer>
  );
}

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #333;
  padding: 1rem 3rem;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  z-index: 0;
  flex-grow: 1;
`;

const FooterP = styled.p`
  color: #eee;
  margin: 0;
  display: flex;
  align-items: center;
`;

const FooterIcons = styled.div`
  color: white;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  column-gap: 1rem;
`;

const Link = styled.a`
  display: flex;
  align-items: center;
  color: #eee;
  text-decoration: none;
`;
