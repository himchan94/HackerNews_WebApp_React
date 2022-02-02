import React, { forwardRef } from "react";
import styled from "styled-components";

const Grid = forwardRef((props, ref) => {
  const {
    is_flex,
    is_flexCol,
    width,
    margin,
    padding,
    bg,
    children,
    height,
    position,
    top,
    left,
  } = props;
  const styles = {
    is_flex,
    is_flexCol,
    width,
    margin,
    padding,
    bg,
    height,
    position,
    top,
    left,
  };

  return (
    <React.Fragment>
      <GridBox ref={ref && ref} {...styles}>
        {children}
      </GridBox>
    </React.Fragment>
  );
});

Grid.defaultProps = {
  chidren: null,
  is_flex: false,
  is_flexCol: false,
  width: "100%",
  height: "100%",
  padding: false,
  margin: false,
  bg: false,
  position: "static",
  top: "",
  left: "",
};

const GridBox = styled.div`
  z-index: 1;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  box-sizing: border-box;
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
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
