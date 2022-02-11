import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { Loader } from "..";
import { Grid, Typhography } from "../../elements";
import { getDate } from "../../functions";

const CommentBox = ({ toggle, by, time, comment, loading }) => {
  const navigate = useNavigate();
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
            margin='0 0.5em 0 0'
            _click={(e) => {
              e.preventDefault();
              navigate(`/user/${by}`);
            }}>
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
          {loading ? (
            <Loader />
          ) : comment ? (
            <Comment htmlText={comment}></Comment>
          ) : (
            <Typhography
              fontFamily='Roboto'
              fontWeight='400'
              fontSize='0.750em'
              lineHeight='0.975em'
              color='#838489'
              margin='0.250em 0 0 0'>
              🤦‍♂️Nothing here🤦‍♂️, Write new comment🐧
            </Typhography>
          )}
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

const Comment = styled.p.attrs((props) => ({
  dangerouslySetInnerHTML: { __html: props.htmlText },
}))`
  font-family: Roboto;
  font-weight: 400;
  font-size: 0.75em;
  line-height: 0.975em;
  color: #838489;
  margin: 0.25em 0 0 0;
  word-wrap: break-word;
  white-space: -moz-pre-wrap;
  white-space: pre-wrap;
`;
