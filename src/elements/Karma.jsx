import React from "react";
import styled from "styled-components";

const Karma = ({ karma }) => {
  if (karma >= 35923) {
    return <KarmaContainer>Super karma</KarmaContainer>;
  }

  if (karma > 501) {
    return <KarmaContainer>Normal karma</KarmaContainer>;
  }

  if (karma > 30) {
    return <KarmaContainer grey>Karma</KarmaContainer>;
  }

  return (
    <KarmaContainer visable='hidden' grey>
      Karma
    </KarmaContainer>
  );
};

export default Karma;

const KarmaContainer = styled.div`
  display: inline-block;
  border: ${(props) =>
    props.grey ? "1px solid #838489" : "1px solid #ff3e00"};
  border-radius: 44.34em;
  font-family: "Noto Sans", sans-serif;
  font-size: 0.75em;
  line-height: 0.938em;
  font-style: normal;
  font-weight: bold;
  color: ${(props) => (props.grey ? "#838489" : "#ff3e00")};
  padding: 1px 8px 2px 8px;
  align-self: start;
  visibility: ${(props) => (props.visable ? props.visable : "visible")};
`;
