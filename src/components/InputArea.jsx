import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { ImageBox, Input } from "../elements";
import { Logo, Info } from "../assets";

const InputArea = () => {
  const navigate = useNavigate();

  return (
    <InputContainer
      onSubmit={(e) => {
        e.preventDefault();
      }}>
      <ImageBox
        image={Logo}
        width='1.625em'
        height='2.000em'
        margin='0 1.125em 0 0'
        alt='logo'
      />
      <Input />
      <ImageBox
        image={Info}
        width='1.500em'
        height='1.500em'
        margin='0 0 0 0.875em'
        alt='info icon'
        _click={() => {
          navigate("/about");
        }}
      />
    </InputContainer>
  );
};

export default InputArea;

const InputContainer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #18191e;
  padding: 1em 1.25em;
  box-sizing: border-box;
  height: 4em;
  position: fixed;
  top: 1.5em;
  z-index: 5;
`;
