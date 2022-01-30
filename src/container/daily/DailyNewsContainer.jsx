import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostId } from "../../redux/modules/top";
import styled from "styled-components";
import { DailyNewsCard, Spinner } from "../../components";

const DailyNewsContainer = () => {
  const daily = useSelector((state) => state.info.newlyNews);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostId());
  }, []);

  return (
    <Section>
      <MainTitle>Daily News</MainTitle>
      <CardContainer>
        {daily.length !== 0 ? (
          daily.map((info) => <DailyNewsCard key={info.id} info={info} />)
        ) : (
          <Spinner />
        )}
      </CardContainer>
    </Section>
  );
};

export default DailyNewsContainer;

const Section = styled.section`
  margin-top: 1.25em;
  margin-bottom: 1.75em;
  padding: 0 0 0 1.313em;
  box-sizing: border-box;
`;

const MainTitle = styled.h2`
  font-family: Product Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 1.75em;
  line-height: 2.125em;
  color: #fff;
`;

const CardContainer = styled.div`
  display: flex;
  max-width: 21.188em;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
