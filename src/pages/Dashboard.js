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
        </FlexboxItem>
        <FlexboxItem>
          <Grid>
            <GridItem>
              <H2 style={{ color: "#118ab2" }}>Reports</H2>
              <ChartContainer style={{ border: "2px solid #118ab2" }}>
                Chart goes here!
              </ChartContainer>
            </GridItem>
            <GridItem>
              <H2 style={{ color: "#06d6a0" }}>Income</H2>
              <ChartContainer style={{ border: "2px solid #06d6a0" }}>
                Chart goes here!
              </ChartContainer>
            </GridItem>
            <GridItem>
              <H2 style={{ color: "#EA638C" }}>Savings</H2>
              <ChartContainer style={{ border: "2px solid #EA638C" }}>
                Chart goes here!
              </ChartContainer>
            </GridItem>
            <GridItem>
              <H2 style={{ color: "#ffcb1b" }}>Spending</H2>
              <ChartContainer style={{ border: "2px solid #ffcb1b" }}>
                Chart goes here!
              </ChartContainer>
            </GridItem>
          </Grid>
        </FlexboxItem>
      </FlexboxContainer>
    </Section>
  );
}

const FlexboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 1rem 1rem 2rem 1rem;
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

const H2 = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
`;

const Grid = styled.div`
  display: grid;
  width: calc(100% - 1rem);
  grid-template-columns: 50% 50%;
  column-gap: 1rem;
  row-gap: 1rem;
  @media (max-width: 1024px) {
    grid-template-columns: 100%;
    width: 100%;
  }
`;

const GridItem = styled.div`
  display: grid;
`;

const ChartContainer = styled.div`
  display: flex;
  padding: 1rem;
`;
