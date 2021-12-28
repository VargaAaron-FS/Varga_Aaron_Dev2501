import React from "react";
import styled from "styled-components";

export default function MyAvatar(props) {
  return (
    <AvatarContainer>
      <img
        alt="Avatar"
        width={props.width}
        height={props.height}
        src={props.avatar}
        style={{borderRadius: "50%",}}
      />
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
  cursor: pointer;
`;
