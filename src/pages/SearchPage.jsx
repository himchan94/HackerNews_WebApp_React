import React from "react";
import styled from "styled-components";
import { InputArea } from "../components";
import { Typhography, Button } from "../elements";

const TOP_SEARCHED = [
  "api",
  "Android app",
  "mobile",
  "Eulsu Jung",
  "Netflix",
  "api",
  "Android app",
  "mobile",
  "Eulsu Jung",
  "Netflix",
];
const POPULAR_USER = [
  "tptacek",
  "jacquesm",
  "ingve",
  "danso",
  "patio11",
  "rbanffy",
  "ColinWright",
  "pseudolus",
  "prostoalex",
  "rayiner",
  "Animats",
  "tosh",
  "ChuckMcM",
  "JumpCrisscross",
  "Tomte",
];

const SearchPage = () => {
  return (
    <Section>
      <InputArea type='search' position='static' />
      <Container>
        <Typhography
          fontFamily='Source Code Pro'
          fontWeight='400'
          fontStyle='normal'
          fontSize='0.750em'
          lineHeight='0.943em'
          color='#6B6C70'>
          Top searched
        </Typhography>
        <OverFlowContainer margin='1.125em 0 0 0'>
          {TOP_SEARCHED.map((searched, idx) => (
            <Button
              key={idx}
              fontFamily='Product Sans'
              fontStyle='normal'
              fontWeight='700'
              fontSize='0.750em'
              lineHeight='0.910em'
              padding='0.375em 0.750em'
              width='auto'
              bg='transparent'
              color='#FF3E00'
              border='0.063em solid #FF3E00'
              br='44.34em'>
              {searched}
            </Button>
          ))}
        </OverFlowContainer>
        <Typhography
          fontFamily='Source Code Pro'
          fontWeight='400'
          fontStyle='normal'
          fontSize='0.750em'
          lineHeight='0.943em'
          color='#6B6C70'
          margin='1.500em 0 0 0'>
          Popular users
        </Typhography>
        <OverFlowContainer margin='0.750em 0 0 0'>
          {POPULAR_USER.map((user) => (
            <Button
              key={user}
              fontFamily='Product Sans'
              fontStyle='normal'
              fontWeight='700'
              fontSize='0.750em'
              lineHeight='0.910em'
              padding='0.375em 0.750em'
              width='auto'
              bg='#2C2D32'
              color=' #CECFD4;'
              br='44.34em'>
              {user}
            </Button>
          ))}
        </OverFlowContainer>
        <OverFlowContainer margin='0.750em 0 0 0'>
          {POPULAR_USER.map((user) => (
            <Button
              key={user}
              fontFamily='Product Sans'
              fontStyle='normal'
              fontWeight='700'
              fontSize='0.750em'
              lineHeight='0.910em'
              padding='0.375em 0.750em'
              width='auto'
              bg='#2C2D32'
              color=' #CECFD4;'
              br='44.34em'>
              {user}
            </Button>
          ))}
        </OverFlowContainer>
        <OverFlowContainer margin='0.750em 0 0 0'>
          {POPULAR_USER.map((user) => (
            <Button
              key={user}
              fontFamily='Product Sans'
              fontStyle='normal'
              fontWeight='700'
              fontSize='0.750em'
              lineHeight='0.910em'
              padding='0.375em 0.750em'
              width='auto'
              bg='#2C2D32'
              color=' #CECFD4;'
              br='44.34em'>
              {user}
            </Button>
          ))}
        </OverFlowContainer>
        <OverFlowContainer margin='0.750em 0 0 0'>
          {POPULAR_USER.map((user) => (
            <Button
              key={user}
              fontFamily='Product Sans'
              fontStyle='normal'
              fontWeight='700'
              fontSize='0.750em'
              lineHeight='0.910em'
              padding='0.375em 0.750em'
              width='auto'
              bg='#2C2D32'
              color=' #CECFD4;'
              br='44.34em'>
              {user}
            </Button>
          ))}
        </OverFlowContainer>
        <Typhography
          fontFamily='Source Code Pro'
          fontWeight='400'
          fontStyle='normal'
          fontSize='0.750em'
          lineHeight='0.943em'
          color='#6B6C70'
          margin='1.500em 0 0 0'>
          Recently viewed
        </Typhography>
      </Container>
    </Section>
  );
};

export default SearchPage;

const Section = styled.section`
  box-sizing: border-box;
  padding: 1.5em 0 0 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0 1.25em;
  margin: 1.25em 0 0 0;
`;

const OverFlowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.625em;
  max-width: "21.250em";
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin: ${(props) => (props.margin ? props.margin : "")};
  &::-webkit-scrollbar {
    display: none;
  }
`;
