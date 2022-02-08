import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { DetailHeader } from "../components";
import { Karma, Typhography, Grid, Button, ImageBox } from "../elements";
import { Link } from "../assets";
import { getDate } from "../functions";

const DetailPage = () => {
  const [karma, setKarma] = useState(null);
  const navigate = useNavigate();
  const [category, id] = useLocation().pathname.split("/").slice(2, 4);
  const posts = useSelector((state) =>
    state[category].post.filter((item) => item.id === Number(id))
  );
  const { by, kids, time, title, url, text } = posts[0];

  useEffect(() => {
    const root = document.getElementById("root");
    root.scrollTop = 0;

    const getUserInfo = async () => {
      const userInfo = await fetch(
        `https://hacker-news.firebaseio.com/v0/user/${by}.json`
      ).then((res) => res.json());

      setKarma(userInfo.karma);
    };
    getUserInfo();
  }, []);

  return (
    <Article>
      <DetailHeader />
      <PostInfo>
        <Karma karma={karma} />
        <UserName
          onClick={() => {
            navigate(`/user/${by}`);
          }}>
          {by}
        </UserName>
        <Typhography
          fontFamily='Source Code Pro'
          fontWeight='400'
          fontSize='0.625em'
          lineHeight='0.786em'
          color='#838489'
          margin='0.375em 0 0 0'>
          posted {getDate(time)}
        </Typhography>
      </PostInfo>
      <PostArea>
        <PostTitle>{title}</PostTitle>
        {text && <Comment htmlText={text}></Comment>}
      </PostArea>
      <BlurContainer text={text}>
        {url ? (
          <Grid
            is_flex
            width='12.063em'
            height='2.250em'
            position='absolute'
            top='3.875em'
            left='5.188em'>
            <Button
              _click={() => {
                navigate(`/comment/${id}`);
              }}
              width='8.063em'
              padding='0.375em 0.875em'
              br='44.340em'
              bg='linear-gradient(90deg, #FF6B01 0%, #FF3F01 100%)'>
              <Typhography color='#fff' ws='nowrap'>
                {kids && kids.length ? kids.length : 0} Comment
                {!kids || kids.length === 0 ? "" : "s"}
              </Typhography>
            </Button>

            <a href={url} target='_blank' rel='noreferrer'>
              <Button
                width='3.250em'
                padding='0.375em 0.875em'
                br='44.340em'
                bg='#fff'>
                <ImageBox image={Link} />
              </Button>
            </a>
          </Grid>
        ) : (
          <Grid
            is_flex
            width='8.063em'
            height='2.250em'
            position='absolute'
            top='4.250em'
            left='7.250em'>
            <Button
              _click={() => {
                navigate(`/comment/${id}`);
              }}
              width='8.063em'
              padding='0.375em 0.875em'
              br='44.340em'
              bg='linear-gradient(90deg, #FF6B01 0%, #FF3F01 100%)'>
              <Typhography color='#fff' ws='nowrap'>
                {kids && kids.length ? kids.length : 0} Comment
                {!kids || kids.length === 0 ? "" : "s"}
              </Typhography>
            </Button>
          </Grid>
        )}
      </BlurContainer>
    </Article>
  );
};

export default DetailPage;

const Article = styled.article`
  box-sizing: border-box;
  height: 100%;
  padding: 1.5em 0 8.125em 0;
`;

const PostInfo = styled.section`
  margin: 1em 0 0 1.188em;
`;

const UserName = styled.h2`
  font-family: Noto Sans;
  font-size: 1.5em;
  font-style: normal;
  line-height: 1.819em;
  font-weight: 400;
  color: #fff;
  white-space: nowrap;
  margin: 0.125em 0 0 0;
`;

const PostArea = styled.section`
  box-sizing: border-box;
  margin: 1.25em 0 0 0;
  padding: 0 1.25em;
`;

const PostTitle = styled.h1`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-size: 1.875em;
  font-style: normal;
  line-height: 130%;
  font-weight: 700;
  color: #f1f1f2;
`;

const Comment = styled.p.attrs((props) => ({
  dangerouslySetInnerHTML: { __html: props.htmlText },
}))`
  box-sizing: border-box;
  width: 20em;
  min-height: 25.938em;
  font-family: Roboto;
  font-weight: 400;
  line-height: 150%;
  color: #cecfd4;
  margin: 1.25em 0 0 0;
  word-wrap: break-word;
`;

const BlurContainer = styled.div`
  position: ${(props) => (props.text ? "sticky" : "fixed")};
  left: 0;
  bottom: 0;
  height: 8.125em;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%);
  backdrop-filter: blur(2px);
`;
