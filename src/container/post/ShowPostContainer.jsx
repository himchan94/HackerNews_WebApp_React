import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostId, loadPost } from "../../redux/modules/show";
import styled from "styled-components";
import { PostCard, Spinner } from "../../components";

const ShowPostContainer = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.show.post);
  const isLoading = useSelector((state) => state.show.isLoading);

  useEffect(() => {
    if (!posts.length) {
      dispatch(getPostId());
    }

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
            return <PostCard key={post.id} post={post} category='show' />;
          }
          return null;
        })}
      {isLoading && <Spinner />}
    </Section>
  );
};

export default ShowPostContainer;

const Section = styled.section`
  width: 20em;
  margin: 0 auto;
`;
