import React, { useState, useEffect, memo, useCallback } from "react";
import "abortcontroller-polyfill/dist/polyfill-patch-fetch";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { Grid, Typhography, ImageBox } from "../../elements";
import { ToggleUp, ToggleDown } from "../../assets";
import { getDate, getComments, createTree } from "../../functions";

const AbortController = window.AbortController;

const DetailCommnentBox = memo(({ comment }) => {
  const [showComment, setShowComment] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [tree, setTree] = useState([]);
  const navigate = useNavigate();
  const { by, id, text, time, kids } = comment;
  const controller = new AbortController();
  const signal = controller.signal;

  const createCmtTree = useCallback(async (id) => {
    try {
      const res = await getComments(id, signal);
      setTree(createTree(res));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    if (kids) {
      createCmtTree(id);
    }

    return () => {
      controller.abort();
    };
  }, []);

  const ChildComment = ({ comment }) => {
    return (
      <Grid
        width='20.000em'
        margin='0 0 0 2.500em'
        borderTop=' 0.063em solid #38393d'>
        <Grid
          height='2em'
          padding='1.125em 0 0.250em 0'
          margin=' 0 0 0.750em 0'>
          <Typhography
            link
            fontFamily='Source Code Pro'
            fontWeight='400'
            fontSize='0.750em'
            lineHeight='0.943em'
            color='#FF3E00'
            td='under-line'
            ls='-2%'
            _click={(e) => {
              e.preventDefault();
              navigate(`/user/${comment.by}`);
            }}>
            {comment.by}
          </Typhography>
          <Typhography
            fontFamily='Source Code Pro'
            fontWeight='400'
            fontSize='0.750em'
            lineHeight='0.943em'
            color='#6B6C70'
            ls='-2%'
            margin='0 0 0 0.625em'>
            {getDate(comment.time)}
          </Typhography>
        </Grid>
        <TextArea
          htmlText={comment.text}
          padding='0.750em 1.250em 1.250em 0'></TextArea>
      </Grid>
    );
  };

  function Comment({ comment }) {
    const nestedComments = (comment.children || []).map((comment) => {
      return <ChildComment key={comment.id} comment={comment} type='child' />;
    });
    return <>{nestedComments}</>;
  }

  return (
    <>
      <CommentContainer>
        <Grid is_flex height='2em' position='relative'>
          <Grid>
            <Typhography
              link
              fontFamily='Source Code Pro'
              fontWeight='400'
              fontSize='0.750em'
              lineHeight='0.943em'
              color='#FF3E00'
              td='under-line'
              ls='-2%'
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
              lineHeight='0.943em'
              color='#6B6C70'
              ls='-2%'
              margin='0 0 0 0.625em'>
              {getDate(time)}
            </Typhography>
          </Grid>
          {showComment ? (
            <ImageBox
              _click={() => {
                setShowComment(!showComment);
                setShowMore(false);
              }}
              image={ToggleUp}
              alt='toggle down'
              width='0.750em'
              height='0.463em'
              position='absolute'
              top='0.500em'
              left='18.875em'
              cursor='pointer'
              zIndex={1}
            />
          ) : (
            <ImageBox
              _click={() => {
                setShowComment(!showComment);
              }}
              image={ToggleDown}
              alt='toggle up'
              width='0.750em'
              height='0.463em'
              position='absolute'
              top='0.500em'
              left='18.875em'
              cursor='pointer'
              zIndex={1}
            />
          )}
        </Grid>
      </CommentContainer>
      <TransitionBox toggle={showComment}>
        <Grid margin='0.750em 0 0 0'>
          <TextArea htmlText={text}></TextArea>
        </Grid>
        {kids && (
          <MoreComment
            onClick={() => {
              setShowMore(!showMore);
            }}>
            {showMore ? " hide.." : "more.."}
          </MoreComment>
        )}
        <TransitionBox toggle={showMore}>
          {tree.map((cmt) => {
            return <Comment key={cmt} comment={cmt} />;
          })}
        </TransitionBox>
      </TransitionBox>
    </>
  );
});

export default DetailCommnentBox;

const CommentContainer = styled.article`
  padding: 1em 1.25em;
  border-top: 0.063em solid #38393d;
  box-sizing: border-box;
  height: 3.5em;
`;

const TextArea = styled.p.attrs((props) => ({
  dangerouslySetInnerHTML: { __html: props.htmlText },
}))`
  box-sizing: border-box;
  font-family: Roboto;
  font-weight: 400;
  font-style: normal;
  font-size: 1em;
  line-height: 1.3em;
  color: #cecfd4;
  padding: ${(props) => (props.padding ? props.padding : "0 1.25em")};
  overflow-wrap: break-word;
`;

const TransitionBox = styled.div`
  box-sizing: border-box;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.3s ease;
  position: absolute;

  ${({ toggle }) =>
    toggle &&
    css`
      transform: scaleY(1);
      position: relative;
    `}
`;

const MoreComment = styled.b`
  display: inline-block;
  box-sizing: border-box;
  font-family: Source Code Pro;
  font-size: 0.75em;
  font-style: normal;
  font-weight: 400;
  line-height: 0.938em;
  letter-spacing: -0.02em;
  text-align: left;
  color: #838489;
  padding: 1.313em 0 1.25em 1.65em;
`;
