import React from "react";
import TopIcon from "../assets/topIcon.svg";
import styled from "styled-components";
import { ImageBox } from "../elements";

const Dummy = () => {
  return (
    <DummyDiv>
      <ImageBox
        image={TopIcon}
        alt='dummy image'
        width='2.875em'
        height='0.625em'
        position='absolute'
        right='0.500em'
      />
    </DummyDiv>
  );
};

export default Dummy;

const DummyDiv = styled.div`
  height: 1.5em;
  background-color: #2c2d32;
  padding: 0.438em 0;
  position: relative;
`;