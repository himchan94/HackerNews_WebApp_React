import React, { useEffect, useState, useCallback } from "react";
import "abortcontroller-polyfill/dist/polyfill-patch-fetch";
import styled from "styled-components";
import { PostCard, Spinner } from "../../components";

const AbortController = window.AbortController;

const SubmissionContainer = ({ id }) => {
  const [post, setPost] = useState({
    id,
    loaded_post: [],
    isLoading: false,
  });
  const [story, setStory] = useState([]);
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

  const loadPost = useCallback(async () => {
    try {
      const ids = post.id;
      const idx = post.loaded_post.length;

      if (post.isLoading || (idx !== 0 && idx === ids.length)) {
        return;
      }

      setPost({ ...post, isLoading: true });

      const promises = ids.slice(idx, idx + 9).map((id) => {
        if (id) {
          return fetch(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json`
          ).then((response) => response.json());
        }

        return null;
      });

      const exactPromises = promises.filter((list) => list !== null);

      const result = await promiseAbort(signal, exactPromises);

      setPost({
        ...post,
        loaded_post: [...post.loaded_post, ...result],
        isLoading: false,
      });

      setStory([...story, ...result.filter((post) => post.type === "story")]);
    } catch (error) {
      console.log(error);
    }
  }, [post]);

  useEffect(() => {
    if (post.loaded_post.length === 0) {
      loadPost();
    }

    const root = document.getElementById("root");

    const scroll = (e) => {
      const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

      if (scrollHeight - scrollTop - clientHeight === 0) {
        if (post.isLoading) return;

        loadPost();
      }
    };

    root.addEventListener("scroll", scroll);

    return () => {
      root.removeEventListener("scroll", scroll);
      controller.abort();
    };
  }, []);

  return (
    <Section>
      {post.story !== 0 &&
        story.map((list) => (
          <PostCard key={list.id} post={list} category='top' />
        ))}
      {post.isLoading ? <Spinner /> : null}
    </Section>
  );
};

export default SubmissionContainer;

const Section = styled.section`
  width: 20em;
  margin: 0 auto;
`;
