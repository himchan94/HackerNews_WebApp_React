import React from "react";
import styled from "styled-components";
import { DailyNewsCard } from "../components";

const DailyNewsContainer = () => {
  return (
    <Section>
      <MainTitle>Daily News</MainTitle>
      <DailyNewsCard />
    </Section>
  );
};

export default DailyNewsContainer;

const Section = styled.section`
  margin-top: 1.25em;
  width: 17.75em;
  height: 16.938em;
`;

const MainTitle = styled.h2`
  font-family: Product Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.75em;
  line-height: 2.125em;
  color: #fff;
`;
