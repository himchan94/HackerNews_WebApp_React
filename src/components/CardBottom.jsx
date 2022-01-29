import React from "react";
import styled from "styled-components";
import { ImageBox, Typhography } from "../elements";
import { Link, Score, Comment } from "../assets";
import { getSite } from "../functions";

const CardBottom = ({ url, score, kids }) => {
  return (
    <Container>
      <IconWrapper>
        <ImageBox
          image={Link}
          width='1em'
          height='1em'
          padding='0.292em 0.083em'
        />
        <Typhography
          link
          href={url}
          fontFamily='Source Code Pro'
          fontWeight='400'
          fontSize='0.625em'
          lineHeight='0.786em'
          color='#838489'
          margin='0 0 0 0.250em'>
          {url && getSite(url)}
        </Typhography>
      </IconWrapper>
      <IconContainer>
        <IconWrapper margin='0 1em 0 0'>
          <ImageBox image={Score} width='1em' height='1em' padding='0.083em' />
          <Typhography
            fontFamily='Source Code Pro'
            fontWeight='400'
            fontSize='0.625em'
            lineHeight='0.786em'
            color='#838489'
            margin='0 0 0 0.250em'>
            {score && score}
          </Typhography>
        </IconWrapper>
        <IconWrapper>
          <ImageBox
            image={Comment}
            width='1em'
            height='1em'
            padding='0.083em'
          />
          <Typhography
            fontFamily='Source Code Pro'
            fontWeight='400'
            fontSize='0.625em'
            lineHeight='0.786em'
            color='#FF3E00'
            margin='0 0 0 0.250em'>
            {kids ? kids.length : 0}
          </Typhography>
        </IconWrapper>
      </IconContainer>
    </Container>
  );
};

export default CardBottom;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
  padding: 0.438em 1em;
  border-radius: 0 0 0.375em 0.375em;
  box-sizing: border-box;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin: ${(props) => (props.margin ? props.margin : "")};
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  width: 2.625emem;
  height: 100%;
`;
