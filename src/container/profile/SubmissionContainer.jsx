import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { PostCard, Spinner } from "../../components";

const SubmissionContainer = ({ id }) => {
  const [post, setPost] = useState({
    id,
    loaded_post: [],
    isLoading: false,
  });
  const [story, setStory] = useState([]);

  useEffect(() => {
    const loadPost = async () => {
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

      const result = await Promise.all(exactPromises);

      setPost({
        ...post,
        loaded_post: [...post.loaded_post, ...result],
        isLoading: false,
      });

      setStory([...story, ...result.filter((post) => post.type === "story")]);
    };

    if (post.loaded_post.length === 0) {
      loadPost();
    }

    const root = document.getElementById("root");

    const scroll = (e) => {
      const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

      if (scrollHeight - scrollTop - clientHeight - 20 < 0) {
        if (post.isLoading) return;

        loadPost();
      }
    };

    root.addEventListener("scroll", scroll);

    return () => {
      root.removeEventListener("scroll", scroll);
    };
  }, [post]);

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
