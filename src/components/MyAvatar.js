import React from 'react';
import styled from 'styled-components';

// import logo from "./logo.svg";

export default function MyAvatar() {
  return (
    <AvatarContainer>
      A
    </AvatarContainer>
  );
}

const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: blue;
  color: white;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-weight: 700;
`;
