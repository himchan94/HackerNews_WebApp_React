import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { DetailHeader, DetailCommentBox, Spinner } from "../components";
import { Grid } from "../elements";

const CommentPage = () => {
  const [comment, setComment] = useState(null);
  const [loading, setLoading] = useState(false);
  const paramsId = useLocation().pathname.split("/")[2];

  useEffect(() => {
    const getComment = async () => {
      setLoading(true);
      const res = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${paramsId}.json`
      ).then((res) => res.json());

      if (!res.kids) {
        setLoading(false);
        return;
      }
      const promises = res.kids.map((id) =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
          (response) => response.json()
        )
      );

      const result = await Promise.all(promises);

      setComment(result);
      setLoading(false);
    };

    getComment();
  }, []);

  return (
    <Section>
      <DetailHeader />
      <Grid height='4.375em' padding='1.063em 0 1.063em 1.250em'>
        <Title>Comments</Title>
      </Grid>
      {loading ? (
        <Spinner />
      ) : (
        comment &&
        comment.length !== 0 &&
        comment.map((cmt) => <DetailCommentBox key={cmt.id} comment={cmt} />)
      )}
    </Section>
  );
};

export default CommentPage;

const Section = styled.article`
  box-sizing: border-box;
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
