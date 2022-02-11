import React, { useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import "abortcontroller-polyfill/dist/polyfill-patch-fetch";
import styled from "styled-components";
import { DetailHeader, DetailCommentBox, Spinner } from "../components";
import { Grid } from "../elements";

const AbortController = window.AbortController;

const CommentPage = () => {
  const [data, setData] = useState({
    comment: null,
    isLoading: false,
  });
  const paramsId = useLocation().pathname.split("/")[2];
  const controller = new AbortController();
  const signal = controller.signal;

  const promiseAbort = useCallback((abortSignal, array) => {
    return new Promise(async (resolve, reject) => {
      abortSignal.addEventListener("abort", () => {
        const error = new DOMException(
          "Waiting Promise.all aborted by the user",
          "AbortError"
        );
        reject(error);
      });

      const res = await Promise.all(array);
      resolve(res);
    });
  }, []);

  const getComment = useCallback(async () => {
    try {
      setData({ ...data, isLoading: true });
      const res = await fetch(
        `https://hacker-news.firebaseio.com/v0/item/${paramsId}.json`,
        { signal }
      ).then((res) => res.json());

      if (!res || !res.kids) {
        setData({ ...data, isLoading: false });
        return;
      }
      const promises = res.kids.map((id) =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
          (response) => response.json(),
          { signal }
        )
      );

      const result = await promiseAbort(signal, promises);
      setData({ comment: result, isLoading: false });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getComment();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <Section>
      <DetailHeader />
      <Grid height='4.375em' padding='1.063em 0 1.063em 1.250em'>
        <Title>Comments</Title>
      </Grid>
      {data.isLoading ? (
        <Spinner />
      ) : (
        data.comment &&
        data.comment.length !== 0 &&
        data.comment.map((cmt) => (
          <DetailCommentBox key={cmt.id} comment={cmt} />
        ))
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
