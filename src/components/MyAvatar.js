import React from "react";
import styled from "styled-components";

// import logo from "./logo.svg";

import avatarImgSrc from "../images/av-avatar-photo.png";

export default function MyAvatar(props) {
  return (
    <AvatarContainer>
      <img src={avatarImgSrc} alt="Avatar Photo" width={props.width} height={props.height} />
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
  font-weight: 700;
  border: 2px solid #333;
`;
