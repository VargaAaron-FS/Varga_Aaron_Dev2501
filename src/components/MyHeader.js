import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import MyAvatar from "./MyAvatar";

import { RiNotificationFill, RiArrowDownSFill } from "react-icons/ri";

export default function MyHeader(props) {
  // Declare states
  const [userData, setuserData] = useState(null);

  useEffect(() => {
    async function fetchAPI() {
      // Grab API data
      const res = await fetch("https://randomuser.me/api/");
      // Convert it to usable data in JS
      const data = await res.json();
      // Store data
      const [user] = data.results;
      // Set data/update data
      setuserData(user);
    }
    fetchAPI();
  }, []);

  return (
    <Header>
      <ViewTitle>{props.pageTitle}</ViewTitle>
      <HeaderNav>
        <Anchor href="/">
          <RiNotificationFill style={{ fontSize: "1.5rem" }} />
        </Anchor>
        <Link to="/EditProfile">
        {userData && (
            <MyAvatar
            avatar={userData.picture.large}
            width="50px"
            height="50px"
            />
          )}
        </Link>
        <Anchor href="/">
          <RiArrowDownSFill
            style={{
              fontSize: "2.25rem",
              padding: "0",
              margin: "0",
              marginLeft: "-.5rem",
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
  color: #333;
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
  color: #333;
  text-decoration: none;
  font-size: 1rem;
`;
