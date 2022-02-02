import React from "react";
import styled from "styled-components";

const Button = ({
  _click,
  width,
  height,
  br,
  bg,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  fontStyle,
  lineHeight,
  padding,
  margin,
  children,
}) => {
  const styles = {
    width,
    height,
    br,
    bg,
    color,
    fontFamily,
    fontSize,
    fontWeight,
    fontStyle,
    lineHeight,
    padding,
    margin,
  };
  return (
    <StyledButton onClick={_click} {...styles}>
      {children}
    </StyledButton>
  );
};

export default Button;

Button.defaultProps = {
  chidren: null,
  _click: () => {},
  width: "100%",
  height: "100%",
  br: "",
  bg: false,
  color: "#000",
  fontFamily: "Noto Sans",
  fontSize: "1em",
  fontStyle: "normal",
  fontWeight: "",
  lineHeight: "1.313em",
  padding: false,
  margin: false,
};

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: none;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.br};
  color: ${(props) => props.color};
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
  font-style: ${(props) => props.fontStyle};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.bg ? `background: ${props.bg};` : "transparent")}
`;
