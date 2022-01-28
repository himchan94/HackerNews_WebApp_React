import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const { is_flex, is_flexCol, width, margin, padding, bg, children, height } =
    props;
  const styles = {
    is_flex,
    is_flexCol,
    width,
    margin,
    padding,
    bg,
    height,
  };

  return (
    <React.Fragment>
      <GridBox {...styles}>{children}</GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  chidren: null,
  is_flex: false,
  is_flexCol: false,
  width: "100%",
  height: "100%",
  padding: false,
  margin: false,
  bg: false,
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) =>
    props.is_flex
      ? `display: flex; align-items: center; justify-content: space-between; `
      : ""}
  ${(props) =>
    props.is_flexCol ? `display: flex; flex-direction: column; ` : ""}
`;

export default Grid;
