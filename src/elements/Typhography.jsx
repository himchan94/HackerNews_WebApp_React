import React from "react";
import styled from "styled-components";

const Typhography = ({
  link,
  td,
  href,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  lineHeight,
  ls,
  color,
  margin,
  children,
  block,
  textShadow,
  ws,
  verticalAlign,
  _click,
  newtab,
}) => {
  const styles = {
    link,
    td,
    href,
    fontFamily,
    fontSize,
    fontStyle,
    fontWeight,
    lineHeight,
    ls,
    color,
    margin,
    children,
    block,
    textShadow,
    ws,
    verticalAlign,
  };

  if (link) {
    return (
      <Link newtab={newtab} onClick={_click} {...styles}>
        {children}
      </Link>
    );
  }

  return (
    <Typho onClick={_click} {...styles}>
      {children}
    </Typho>
  );
};

export default Typhography;

Typhography.defaultProps = {
  link: false,
  td: "none",
  href: "",
  fontFamily: "Noto Sans",
  fontSize: "1em",
  fontStyle: "normal",
  fontWeight: "",
  lineHeight: "1.313em",
  ls: "",
  color: "#000",
  margin: "",
  children: null,
  block: false,
  textShadow: "",
  ws: "",
  verticalAlign: "baseline",
  _click: () => {},
};

const Link = styled.a.attrs((props) => ({
  href: `${props ? props.href : ""}`,
  target: `${props.newtab ? "_blank" : "_self"}`,
}))`
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
  font-style: ${(props) => props.fontStyle};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  cursor: pointer;
  text-decoration: ${(props) => props.td};
  white-space: nowrap;
`;

const Typho = styled.b`
  display: ${(props) => (props.block ? "inline-block" : "inline")};
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
  font-style: ${(props) => props.fontStyle};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  letter-spacing: ${(props) => props.ls};
  text-shadow: ${(props) => props.textShadow};
  white-space: ${(props) => props.ws};
  vertical-align: ${(props) => props.verticalAlign};
`;
