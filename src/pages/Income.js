import React from "react";
import styled from "styled-components";

export default function Income() {
  return (
    <Section>
      <FlexboxContainer>
        <FlexboxItem>
          <H1 style={{ color: "#06d6a0" }}>Income</H1>
        </FlexboxItem>
        <FlexboxItem>
          <Paragraph>This is the Income page!</Paragraph>
        </FlexboxItem>
      </FlexboxContainer>
    </Section>
  );
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
  font-weight: 900;
  margin: 0;
`;
