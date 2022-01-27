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
        width='1.168em'
        height='1.545em'
        margin='0 1.125em 0 0'
      />
      <Input />
      <ImageBox
        image={Info}
        width='1.125em'
        height='1.125em'
        margin='0 0 0 0.875em'
      />
    </InputContainer>
  );
};

export default InputArea;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #18191e;
  padding: 1em 1.25em;
`;
