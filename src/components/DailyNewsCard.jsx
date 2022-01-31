import React, { memo } from "react";
import styled from "styled-components";
import { CardBottom } from ".";
import { Karma, Typhography } from "../elements";
import { getDate } from "../functions";

const DailyNewsCard = memo(({ info }) => {
  const { by, id, kids, score, time, title, url, karma } = info;

  return (
    <Card>
      <UpperContainer>
        <Karma karma={karma} />
        <Author>{by}</Author>
        <Title>{title}</Title>
        <Typhography
          fontFamily='Source Code Pro'
          fontWeight='400'
          fontSize='0.625em'
          lineHeight='0.786em'
          color='#838489'
          margin='0 0 0.750em 0'>
          {time && getDate(time)}
        </Typhography>
      </UpperContainer>
      <CardBottom url={url} score={score} kids={kids} />
    </Card>
  );
});

export default DailyNewsCard;

const Card = styled.article`
  width: 17.75em;
  height: auto;
  background-color: #2c2d32;
  border-radius: 0.375em;
  font-family: "Noto Sans", sans-serif;
  margin: 0 1em 0 0;
  flex-shrink: 0;
`;

const UpperContainer = styled.div`
  padding: 1em;
  border-bottom: 0.063em solid #38393d;
  height: 14.938em;
  box-sizing: border-box;
`;

const Author = styled.b`
  display: block;
  font-style: normal;
  font-weight: normal;
  font-size: 0.75em;
  line-height: 0.938em;
  color: #ffffff;
  margin-top: 0.25em;
`;

const Title = styled.h3`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1.625em;
  font-style: normal;
  font-weight: bold;
  line-height: 130%;
  max-height: 8.5em;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  color: #fff;
  margin-top: 0.75em;
`;
