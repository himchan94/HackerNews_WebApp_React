import React from "react";
import styled, { css } from "styled-components";
import { Grid, Typhography } from "../elements";
import { getDate } from "../functions";

const CommentBox = ({ toggle, by, time }) => {
  return (
    <TransitionBox toggle={toggle}>
      <CommentContainer>
        <Grid width='18.500em' height='1.500em'>
          <Typhography
            link
            td='underline'
            fontFamily='Source Code Pro'
            fontWeight='400'
            fontSize='0.750em'
            lineHeight='0.938em'
            color='#FF3E00'
            margin='0 0.5em 0 0'>
            {by}
          </Typhography>
          <Typhography
            fontFamily='Source Code Pro'
            fontWeight='400'
            fontSize='0.750em'
            lineHeight='0.938em'
            ls='-0.02em'
            color='#838489'>
            {getDate(time)}
          </Typhography>
        </Grid>
        <Grid height='4.000em'>
          <Typhography
            fontFamily='Roboto'
            fontWeight='400'
            fontSize='0.750em'
            lineHeight='0.975em'
            color='#838489'
            margin='0.250em 0 0 0'>
            Completely agree. Here's another example: BitDefender (antivirus)
            passes your email and MD5 of your password in the hash when you want
            to go to your dashboard. passes your email and MD5 of your password
            in the hash when you want to go to your dashboard.v
          </Typhography>
        </Grid>
      </CommentContainer>
    </TransitionBox>
  );
};

export default CommentBox;

const CommentContainer = styled.div`
  max-height: 7.75em;
  padding: 1em 1em 1em 1em;
  box-sizing: border-box;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TransitionBox = styled.div`
  height: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  ${({ toggle }) =>
    toggle &&
    css`
      height: 7.75em;
    `}
`;
