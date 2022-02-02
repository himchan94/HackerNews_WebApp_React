import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Typhography, ImageBox } from "../../elements";
import { ToggleUp, ToggleDown } from "../../assets";

const DetailCommnentBox = () => {
  const [showComment, setShowComment] = useState(true);
  const [showMore, setShowMore] = useState(false);
  return (
    <CommentContainer>
      <Grid is_flex height='3.500em' bg='blue' position='relative'>
        <Grid>
          <Typhography
            link
            fontFamily='Source Code Pro'
            fontWeight='400'
            fontSize='0.750em'
            lineHeight='0.943em'
            color='#FF3E00'
            td='under-line'
            ls='-2%'>
            doctoboggan
          </Typhography>
          <Typhography
            fontFamily='Source Code Pro'
            fontWeight='400'
            fontSize='0.750em'
            lineHeight='0.943em'
            color='#6B6C70'
            ls='-2%'
            margin='0 0 0 0.625em'>
            30 minutes ago
          </Typhography>
        </Grid>
        {showComment ? (
          <ImageBox
            _click={() => {
              setShowComment(!showComment);
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
      <TextArea>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor est
        ullamcorper adipiscing vestibulum. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Porttitor est ullamcorper adipiscing
        vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Porttitor est ullamcorper adipiscing vestibulum. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Porttitor est ullamcorper adipiscing
        vestibulum.
      </TextArea>
    </CommentContainer>
  );
};

export default DetailCommnentBox;

const CommentContainer = styled.article`
  min-height: 9.188em;
  padding: 1em 1.25em;
  border-bottom: 0.063em solid #38393d;
  box-sizing: border-box;
`;

const TextArea = styled.p`
  font-family: Roboto;
  font-weight: 400;
  font-style: normal;
  font-size: 1em;
  line-height: 1.3em;
  color: #cecfd4;
`;
