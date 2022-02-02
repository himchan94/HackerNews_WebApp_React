import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { DetailHeader, DetailCommentBox } from "../components";
import { Grid } from "../elements";

const CommentPage = () => {
  return (
    <Section>
      <DetailHeader />
      <Grid height='4.375em' padding='1.063em 0 1.063em 1.250em'>
        <Title>Comments</Title>
      </Grid>
      <DetailCommentBox />
    </Section>
  );
};

export default CommentPage;

const Section = styled.article`
  box-sizing: border-box;
  height: auto;
  padding: 1.5em 0 0 0;
`;

const Title = styled.h1`
  font-family: Noto Sans;
  font-size: 1.875emem;
  font-style: normal;
  line-height: 2.274em;
  font-weight: 700;
  color: #fff;
`;
