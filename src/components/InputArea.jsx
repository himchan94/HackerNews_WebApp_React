import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import { ImageBox, Input } from "../elements";
import { Logo, Info, GoBack } from "../assets";

const InputArea = ({ type, position }) => {
  const navigate = useNavigate();

  if (type === "search") {
    return (
      <InputContainer
        position={position}
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <ImageBox
          image={GoBack}
          width='0.729em'
          height='1.238em'
          margin='0 1.656em 0 0'
          alt='logo'
          _click={() => {
            navigate(-1);
          }}
        />
        <Input width='17.250em' />
      </InputContainer>
    );
  }

  return (
    <InputContainer
      position={position}
      onSubmit={(e) => {
        e.preventDefault();
      }}>
      <ImageBox
        image={Logo}
        width='1.625em'
        height='2.000em'
        margin='0 1.125em 0 0'
        alt='logo'
        _click={() => {
          navigate("/");
        }}
      />
      <Input
        _click={() => {
          navigate("/search");
        }}
        width='15.063em'
      />
      <ImageBox
        image={Info}
        width='1.125em'
        height='1.125em'
        margin='0 0 0 1.063em'
        alt='info icon'
        _click={() => {
          navigate("/about");
        }}
      />
    </InputContainer>
  );
};

export default InputArea;

InputArea.defaultProps = {
  position: "fixed",
};

const InputContainer = styled.form`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background-color: #18191e;
  padding: 1em 1.25em;
  box-sizing: border-box;
  width: 22.5em;
  height: 4em;
  position: ${(props) => props.position};
  top: 1.5em;
  z-index: 5;
`;
