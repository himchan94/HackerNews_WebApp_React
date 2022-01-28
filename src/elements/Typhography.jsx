import React from "react";
import styled from "styled-components";

const Typhography = ({
  link,
  href,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  lineHeight,
  color,
  margin,
  children,
}) => {
  const styles = {
    link,
    href,
    fontFamily,
    fontSize,
    fontStyle,
    fontWeight,
    lineHeight,
    color,
    margin,
    children,
  };

  console.log(margin);

  if (link) {
    return <Link {...styles}>{children}</Link>;
  }

  return <Typho {...styles}>{children}</Typho>;
};

export default Typhography;

Typhography.defaultProps = {
  link: false,
  href: "",
  fontFamily: "'Noto Sans', sans-serif",
  fontSize: "1em",
  fontStyle: "normal",
  fontWeight: "",
  lineHeight: "1.313em",
  color: "#000",
  margin: "",
  children: null,
};

const Link = styled.a.attrs((props) => ({
  href: `${(props) => props.href}`,
}))`
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
  font-style: ${(props) => props.fontStyle};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  cursor: pointer;
`;

const Typho = styled.b`
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
  font-style: ${(props) => props.fontStyle};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
`;
