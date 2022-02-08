import React, { useState, useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  SubmissionContainer,
  FavoritesContainer,
  CommentsContainer,
} from "../container";
import { DetailHeader, ProfileNav, UserDetail, Spinner } from "../components";

const UserPage = () => {
  const [category, setCategory] = useState("submission");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const userName = useLocation().pathname.split("/").slice(2, 3);

  useEffect(() => {
    const getUserInfo = async () => {
      setLoading(true);
      const userInfo = await fetch(
        `https://hacker-news.firebaseio.com/v0/user/${userName}.json`
      ).then((res) => res.json());

      if (!userInfo) {
        setLoading(false);
        return;
      }

      setLoading(false);
      setUser(userInfo);
    };

    getUserInfo();
  }, []);

  const changeCategory = useCallback((list) => {
    setCategory(list);
  }, []);

  return (
    <Section>
      <DetailHeader />
      {!user || loading ? (
        <Spinner />
      ) : (
        <>
          <UserDetail user={user} />
          <ProfileNav category={category} changeCategory={changeCategory} />
          {category === "submission" && (
            <SubmissionContainer id={user.submitted && user.submitted} />
          )}
          {category === "comments" && <CommentsContainer />}
          {category === "favorites" && <FavoritesContainer />}
        </>
      )}
    </Section>
  );
};

export default UserPage;

const Section = styled.section`
  box-sizing: border-box;
  padding: 1.5em 0 0 0;
`;
