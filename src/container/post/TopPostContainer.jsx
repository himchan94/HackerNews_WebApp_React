import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadPost } from "../../redux/modules/top";
import styled from "styled-components";
import { PostCard, Spinner } from "../../components";

const TopPostContainer = () => {
  const posts = useSelector((state) => state.top.post);
  const isLoading = useSelector((state) => state.top.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const root = document.getElementById("root");

    const scroll = (e) => {
      const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

      if (scrollHeight - scrollTop - clientHeight - 100 < 0) {
        if (isLoading) return;
        dispatch(loadPost());
      }
    };

    root.addEventListener("scroll", scroll);

    return () => {
      root.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <Section>
      {posts.length !== 0 &&
        posts.map((post) => {
          if (post) {
            return <PostCard key={post.id} post={post} category='top' />;
          }
          return null;
        })}
      {isLoading && <Spinner />}
    </Section>
  );
};

export default TopPostContainer;

const Section = styled.section`
  width: 20em;
  margin: 0 auto;
`;
