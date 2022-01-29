import React from "react";
import styled from "styled-components";
import { PostCard } from "../components";

const PostContainer = () => {
  return (
    <Section>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </Section>
  );
};

export default PostContainer;

const Section = styled.section`
  width: 20em;
  margin: 0 auto;
`;
