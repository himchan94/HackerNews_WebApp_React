import React from "react";
import styled from "styled-components";
import { ImageBox } from ".";
import { Search } from "../assets";

const Input = ({ _click, width }) => {
  return (
    <InputContainer onClick={_click} width={width}>
      <ImageBox image={Search} alt='search icon' width='0.813em' />
      <InputArea placeholder='Search' />
    </InputContainer>
  );
};

export default Input;

Input.defaultProps = {
  _click: () => {},
  width: "100%",
};

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #2c2d32;
  border-radius: 0.375em;
  width: ${(props) => props.width};
  padding: 0.438em 1.063em 0.438em 0.375em;
`;

const InputArea = styled.input.attrs((props) => ({
  placeholder: `${props.placeholder ? props.placeholder : null}`,
  type: "text",
}))`
  border: none;
  color: #838489;
  background-color: #2c2d32;
  margin-left: 0.375em;
  width: 100%;
  height: 2em;
  font-size: 1em;
`;
