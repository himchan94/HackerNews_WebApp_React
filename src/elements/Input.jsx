import React from "react";
import Search from "../assets/searchIcon.svg";
import { ImageBox } from ".";
import styled from "styled-components";

const Input = () => {
  return (
    <InputContainer>
      <ImageBox image={Search} alt='search icon' width='0.813em' />
      <InputArea placeholder='Search' />
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #2c2d32;
  border-radius: 6px;
  width: 67%;
  padding: 0.438em 0.375em;
`;

const InputArea = styled.input.attrs((props) => ({
  placeholder: `${props.placeholder ? props.placeholder : null}`,
  type: "text",
}))`
  border: none;
  color: 838489;
  background-color: #2c2d32;
  margin-left: 0.375em;
  width: 100%;
  height: 2em;
`;
