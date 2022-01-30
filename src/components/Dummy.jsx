import React from "react";
import styled from "styled-components";
import { ImageBox } from "../elements";
import { TopIcon } from "../assets";

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
  box-sizing: border-box;
  height: 1.5em;
  background-color: #2c2d32;
  padding: 0.438em 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
