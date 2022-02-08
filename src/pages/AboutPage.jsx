import React from "react";
import styled from "styled-components";
import { Grid, Typhography, Karma } from "../elements";
import { DetailHeader } from "../components";

const AboutPage = () => {
  return (
    <Article>
      <DetailHeader type='about' />
      <Section margin='0.375em auto 0'>
        <Title>About this site</Title>
        <Typhography
          block
          textShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
          fontWeight='400'
          fontSize='0.813em'
          lineHeight='0.986em'
          color='#CECFD4'
          margin='1.750em 0 0 0'
          ls='-0.063em'>
          This is a simple Hacker News clone, built with
          <Typhography
            link
            color='#FF3E00'
            textShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
            fontWeight='400'
            fontSize='0.813em'
            lineHeight='0.986em'
            td='under-line'
            href='https://kit.svelte.dev/'>
            SvelteKit
          </Typhography>
          ,<br /> an application framework for{" "}
          <Typhography
            link
            color='#FF3E00'
            textShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
            fontWeight='400'
            fontSize='0.813em'
            lineHeight='0.986em'
            td='under-line'
            href='https://svelte.dev/'>
            Svelte
          </Typhography>
          .
        </Typhography>
        <br />
        <Typhography
          block
          textShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
          fontWeight='400'
          fontSize='0.813em'
          lineHeight='0.986em'
          color='#CECFD4'
          ls='-0.063em'>
          Svelte is a new kind of framework, one that compiles your component
          templates into fast, compact JavaScript
          <br /> — either client-side or server-side. You can read more <br />
          about the design and philosophy in the{" "}
          <Typhography
            link
            color='#FF3E00'
            textShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
            fontWeight='400'
            fontSize='0.813em'
            lineHeight='0.986em'
            td='under-line'
            href='https://www.lean-labs.com/blog/blog-introduction-examples-good-bad'>
            introductory blog <br />
            post
          </Typhography>
          .
        </Typhography>
        <br />
        <Typhography
          block
          textShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
          fontWeight='400'
          fontSize='0.813em'
          lineHeight='0.986em'
          color='#CECFD4'
          ls='-0.063em'>
          We're using{" "}
          <Typhography
            link
            color='#FF3E00'
            textShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
            fontWeight='400'
            fontSize='0.813em'
            lineHeight='0.986em'
            td='under-line'
            href='https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md'>
            hnpwa-api
          </Typhography>{" "}
          as a backend. The app is hosted <br />
          on{" "}
          <Typhography
            link
            color='#FF3E00'
            textShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
            fontWeight='400'
            fontSize='0.813em'
            lineHeight='0.986em'
            td='under-line'
            href='https://vercel.com/'>
            Vercel
          </Typhography>
          .
        </Typhography>
      </Section>
      <Section flexStart margin='2.500em auto 0 '>
        <Title>Introducing Karma ✨</Title>
        <QuestionBox margin='1.688em 0 0 0'>
          Who has a ‘Super karma’ badge?
        </QuestionBox>
        <Typhography
          color='#fff'
          fontSize='0.875em'
          fontWeight='400'
          lineHeight='1.061em'
          ls='-0.063em'
          margin='0.750em 0 0 0'>
          We give this badge to those who are ranked 100th or higher.
        </Typhography>
        <Grid margin='0.750em 0 0 0'>
          <Karma karma={99999} />
        </Grid>
        <Typhography
          color='#fff'
          fontSize='0.750em'
          fontWeight='400'
          lineHeight='1.061em'
          ls='-0.063em'
          margin='0.313em 0 0 0'>
          Ranked 100th or higher.
        </Typhography>
        <Grid margin='0.500em 0 0 0'>
          <Karma karma={1000} />
        </Grid>
        <Typhography
          color='#fff'
          fontSize='0.750em'
          fontWeight='400'
          lineHeight='1.061em'
          ls='-0.063em'
          margin='0.313em 0 0 0'>
          More than 501 karma. It means you can downvote.
        </Typhography>
        <Grid margin='0.500em 0 0 0'>
          <Karma karma={500} />
        </Grid>
        <Typhography
          color='#fff'
          fontSize='0.750em'
          fontWeight='400'
          lineHeight='1.061em'
          ls='-0.063em'
          margin='0.313em 0 0 0'>
          More than 30 karma. Now you can
          <br />
          "Flagging" comments.
          <br />
          (Flagging is not permitted until a user has 30 karma points.)
        </Typhography>
        <QuestionBox margin='1.500em 0 0 0'>
          What does ‘karma’ mean?
        </QuestionBox>
        <Typhography
          color='#fff'
          fontSize='0.875em'
          fontWeight='400'
          lineHeight='1.061em'
          ls='-0.063em'
          margin='0.750em 0 0 0'>
          Karma points are calculated as the number of upvotes a given user's
          content has received minus the number of downvotes.
        </Typhography>
        <QuestionBox margin='1.500em 0 0 0'>
          How is a user's karma calculated?
        </QuestionBox>
        <Typhography
          color='#fff'
          fontSize='0.875em'
          fontWeight='400'
          lineHeight='1.061em'
          ls='-0.063em'
          margin='0.750em 0 0 0'>
          Roughly, the number of upvotes on their posts minus the number of
          downvotes. These don't match up exactly. Some votes are dropped by
          anti-abuse software.
        </Typhography>
        <QuestionBox margin='1.500em 0 0 0'>
          Do posts by users with more karma rank higher?
        </QuestionBox>
        <Typhography
          color='#fff'
          fontSize='0.875em'
          fontWeight='400'
          lineHeight='1.061em'
          ls='-0.063em'
          margin='0.750em 0 0 0'>
          No.
        </Typhography>
        <Typhography
          margin='1.500em 0 0 0'
          color='#fff'
          fontSize='0.875em'
          fontWeight='400'
          lineHeight='1.061em'
          ls='-0.063em'>
          If you need more information, please check this link.
        </Typhography>
        <Typhography
          link
          color='#FF3E00'
          fontSize='0.875em'
          fontWeight='400'
          lineHeight='1.061em'
          ls='-0.063em'
          margin='0 0 2.938em 0'
          href=' https://news.ycombinator.com/newsfaq.html'>
          https://news.ycombinator.com/newsfaq.html
        </Typhography>
      </Section>
    </Article>
  );
};

export default AboutPage;

const Article = styled.article`
  box-sizing: border-box;
  height: 100%;
  padding: 1.5em 0 0 0;
  font-family: Noto Sans;
`;

const Section = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.flexStart
      ? "align-items: flex-start"
      : "justify-content: flext-start"};
  width: 20em;
  margin: ${(props) => (props.margin ? props.margin : "")};
`;

const Title = styled.h2`
  font-weight: 400;
  font-size: 1.5em;
  line-height: 1.819em;
  text-align: center;
  color: #ffffff;
`;

const QuestionBox = styled.h3`
  font-family: Noto Sans;
  font-weight: 700;
  font-style: normal;
  font-size: 0.875em;
  line-height: 1.061em;
  color: #fff;
  background-color: #2c2d32;
  letter-spacing: -0.063em;
  margin: ${(props) => (props.margin ? props.margin : "")};
`;
