import React, { memo } from "react";
import styled from "styled-components";
import { Grid, Typhography, Karma } from "../elements";
import { getDate } from "../functions";

const UserDetail = memo(({ user }) => {
  const { id, karma, created } = user;

  return (
    <Grid padding='0 1.250em 0 1.250em'>
      <Grid is_flexCol height='4.375em' margin='0 0 1.750em 0'>
        <Karma karma={karma} />
        <Typhography
          block
          fontWeight='400'
          fontSize='1.500em'
          color='#fff'
          margin='0.125em 0 0 0'
          ws='nowrap'>
          {id}
        </Typhography>
        <Container>
          <Typhography
            fontWeight='400'
            fontFamily='Source Code Pro'
            fontSize='0.750em'
            lineHeight='0.938em'
            color='#838489'
            ws='nowrap'>
            {karma} karma
          </Typhography>
          <Bar />
          <Typhography
            fontWeight='400'
            fontFamily='Source Code Pro'
            fontSize='0.750em'
            lineHeight='0.938em'
            color='#838489'
            ws='nowrap'>
            joined {getDate(created)}
          </Typhography>
        </Container>
      </Grid>
      <About htmlText={user.about ? user.about : null} />
    </Grid>
  );
});

export default UserDetail;

const Container = styled.section`
  height: 0.938em;
  margin: 0.375em 0 0 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Bar = styled.div`
  width: 0.188em;
  height: 0.563em;
  background-color: #838489;
  margin: 0 0.5em; 0 0.5em;
`;

const About = styled.p.attrs((props) => ({
  dangerouslySetInnerHTML: { __html: props.htmlText },
}))`
  font-family: Noto Sans;
  font-weight: 400;
  font-size: 0.813em;
  line-height: 0.986em;
  color: #cecfd4;
  margin: 1.75em 0 0 0;
  word-wrap: break-word;
  white-space: -moz-pre-wrap;
  white-space: pre-wrap;
`;
