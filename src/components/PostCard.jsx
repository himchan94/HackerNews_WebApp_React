import React, { useState } from "react";
import styled from "styled-components";
import { CommentBox, CardBottom } from ".";
import { ImageBox } from "../elements";
import { ToggleDown, ToggleUp } from "../assets";

const PostCard = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Card>
      <UpperContainer>
        <Title>
          comp/card/contents/light Width 272px Height 63px Blend Pass through
          Copy Metal Detectorist Discovers One of England’s Earliest Gold Coins
          in a Farm Field
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

      <CommentBox toggle={toggle} />

      <CardBottom url={""} score={999999} kids={[1, 2, 3, 4]} />
    </Card>
  );
};

export default PostCard;

const Card = styled.article`
  width: 20em;
  height: auto;
  background-color: #2c2d32;
  border-radius: 0.375em;
  font-family: "Noto Sans", sans-serif;
  margin: 0 1em 0 0;
  flex-shrink: 0;
  margin-bottm: 0.75em;
`;

const UpperContainer = styled.div`
  position: relative;
  padding: 1em 0.5em 1em 1em;
  border-bottom: 0.063em solid #38393d;
  height: 14.938em;
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
