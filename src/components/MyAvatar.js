import React from "react";
import styled from "styled-components";

// import logo from "./logo.svg";

import avatarImgSrc from "../images/av-avatar-photo.png";

export default function MyAvatar() {
  return (
    <AvatarContainer>
      <img src={avatarImgSrc} alt="Avatar Photo" style={{ width: "50px" }} />
    </AvatarContainer>
  );
}

const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
  color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-weight: 700;
  border: 2px solid blue;
`;
