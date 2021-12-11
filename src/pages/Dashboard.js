import React from "react";
import styled from "styled-components";

export default function Dashboard() {
  return (
    <Section>
      <FlexboxContainer>
        <FlexboxItem>
          <H1 style={{color: "#073b4c",}}>Dashboard</H1>
        </FlexboxItem>
        <FlexboxItem>
          <Paragraph>This is the Dashboard!</Paragraph>
        </FlexboxItem>
      </FlexboxContainer>
      <FlexboxContainer>
        <FlexboxItem>
          <H1 style={{color: "#118ab2",}}>Reports</H1>
        </FlexboxItem>
        <FlexboxItem>
          <Paragraph>This is the Dashboard!</Paragraph>
        </FlexboxItem>
      </FlexboxContainer>
      <FlexboxContainer>
        <FlexboxItem>
          <H1 style={{color: "#06d6a0",}}>Income</H1>
        </FlexboxItem>
        <FlexboxItem>
          <Paragraph>This is the Dashboard!</Paragraph>
        </FlexboxItem>
      </FlexboxContainer>
      <FlexboxContainer>
        <FlexboxItem>
          <H1 style={{color: "#ffd166",}}>Savings</H1>
        </FlexboxItem>
        <FlexboxItem>
          <Paragraph>This is the Dashboard!</Paragraph>
        </FlexboxItem>
      </FlexboxContainer>
      <FlexboxContainer>
        <FlexboxItem>
          <H1 style={{color: "#ef476f",}}>Spending</H1>
        </FlexboxItem>
        <FlexboxItem>
          <Paragraph>This is the Dashboard!</Paragraph>
        </FlexboxItem>
      </FlexboxContainer>
    </Section>
  );
}

{
  /* const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;
   &:hover {
    color: red;
    font-weight: 700;
  }
`; */
}

const FlexboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 1rem;
`;

const FlexboxItem = styled.div`
  display: flex;
  flex-direction: row;
`;

const Paragraph = styled.p`
  font-size: 1rem;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 1rem;
`;

const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
`;
