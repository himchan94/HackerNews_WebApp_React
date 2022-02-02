import React, { useState, memo } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CommentBox, CardBottom } from ".";
import { ImageBox } from "../elements";
import { ToggleDown, ToggleUp } from "../assets";

const PostCard = memo(({ post, category }) => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const { by, id, kids, score, time, title, url } = post;
  return (
    <Card>
      <UpperContainer>
        <Title
          onClick={() => {
            navigate(`/detail/${category}/${id}`);
          }}>
          {title}
        </Title>
        {toggle ? (
          <ImageBox
            _click={() => {
              setToggle(!toggle);
            }}
            image={ToggleUp}
            alt='toggle down'
            width='0.750em'
            height='0.463em'
            margin='0 0 0 0.375em'
            padding='0.500em 0.375em 0.537em 0.375em'
            position='absolute'
            top='1.500em'
            right='0.875em'
          />
        ) : (
          <ImageBox
            _click={() => {
              setToggle(!toggle);
            }}
            image={ToggleDown}
            alt='toggle down'
            width='0.750em'
            height='0.463em'
            margin='0 0 0 0.375em'
            padding='0.500em 0.375em 0.537em 0.375em'
            position='absolute'
            top='1.500em'
            right='0.875em'
          />
        )}
      </UpperContainer>

      <CommentBox by={by} time={time} toggle={toggle} />

      <CardBottom url={url} score={score} kids={kids} />
    </Card>
  );
});

export default PostCard;

const Card = styled.article`
  width: 20em;
  height: auto;
  background-color: #2c2d32;
  border-radius: 0.375em;
  font-family: "Noto Sans", sans-serif;
  margin: 0 1em 0.75em 0;
  flex-shrink: 0;
`;

const UpperContainer = styled.div`
  position: relative;
  padding: 1em 0.5em 1em 1em;
  border-bottom: 0.063em solid #38393d;
  height: 5.938em;
  box-sizing: border-box;
`;

const Title = styled.h3`
  position: relative;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1em;
  font-style: normal;
  font-weight: 700;
  line-height: 1.313em;
  max-height: 8.5em;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  color: #fff;
  margin-top: 0.75em;
  width: 17em;
`;
