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
  };

  if (link) {
    return <Link {...styles}>{children}</Link>;
  }

  return <Typho {...styles}>{children}</Typho>;
};

export default Typhography;

Typhography.defaultProps = {
  link: false,
  td: "none",
  href: "",
  fontFamily: "'Noto Sans', sans-serif",
  fontSize: "1em",
  fontStyle: "normal",
  fontWeight: "",
  lineHeight: "1.313em",
  ls: "",
  color: "#000",
  margin: "",
  children: null,
};

const Link = styled.a.attrs((props) => ({
  href: `${props ? props.href : ""}`,
  target: "_blank",
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
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
  font-style: ${(props) => props.fontStyle};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  letter-spacing: ${(props) => props.ls};
`;
