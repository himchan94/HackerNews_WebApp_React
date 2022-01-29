import React from "react";
import Logo from "../assets/logo.svg";
import Info from "../assets/infoIcon.svg";
import { ImageBox, Input } from "../elements";
import styled from "styled-components";

const InputArea = () => {
  return (
    <InputContainer>
      <ImageBox
        image={Logo}
        width='1.625em'
        height='2.000em'
        margin='0 1.125em 0 0'
      />
      <Input />
      <ImageBox
        image={Info}
        width='1.500em'
        height='1.500em'
        margin='0 0 0 0.875em'
      />
    </InputContainer>
  );
};

export default InputArea;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #18191e;
  padding: 1em 1.25em;
`;