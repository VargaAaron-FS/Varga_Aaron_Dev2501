import React from "react";
import styled from "styled-components";

export default function Dashboard() {
  return (
    <Section>
      <FlexboxContainer>
        <FlexboxItem>
          <H1 style={{ color: "#333" }}>Dashboard</H1>
        </FlexboxItem>
        <FlexboxItem>
          <Paragraph>
            Hello, Aaron! Here is your current financial summary.
          </Paragraph>
          {/* Add 2 rows with 2 columns for a summary view of reports, income, savings, and spending. Use CSS grid. */}
        </FlexboxItem>
        <FlexboxItem>
          <Grid>
            <GridItem>This is a grid item!</GridItem>
            <GridItem>This is a grid item!</GridItem>
            <GridItem>This is a grid item!</GridItem>
            <GridItem>This is a grid item!</GridItem>
          </Grid>
        </FlexboxItem>
      </FlexboxContainer>
    </Section>
  );
}

// {
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
// }

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

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 50% 50%;
  column-gap: 1rem;
  row-gap: 1rem;
`;

const GridItem = styled.div`
  display: grid;
`;
