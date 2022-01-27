import React from "react";
import styled from "styled-components";

const ImageBox = (props) => {
  const { image, margin, br, width, height, alt } = props;
  const attr = {
    image,
    margin,
    br,
    width,
    height,
    alt,
  };

  return <ImageContainer {...attr} />;
};

export default ImageBox;

ImageBox.defaultProps = {
  width: "100%",
  height: "100%",
  padding: false,
  margin: false,
};

const ImageContainer = styled.img.attrs((props) => ({
  src: `${props.image ? props.image : null}`,
  alt: `${props.alt ? props.alt : null}`,
}))`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.br ? `border-radius: ${props.br};` : "")}
`;
