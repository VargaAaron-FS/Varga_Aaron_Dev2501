import React from "react";
import styled from "styled-components";

export default function Reports() {
  return (
    <Section>
      <FlexboxContainer>
        <FlexboxItem>
          <H1 style={{ color: "#118ab2" }}>Reports</H1>
        </FlexboxItem>
        <FlexboxItem>
          <Paragraph>This is the Reports page!</Paragraph>
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
