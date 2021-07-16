import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { width, height, margin, src, border_radius } = props;

  const styles = {
    width: width,
    height: height,
    margin: margin,
    border_radius,
  };

  return (
    <React.Fragment>
      <DefaultImage {...styles} src={src} />
    </React.Fragment>
  );
};

Image.defaultProps = {
  width: "100%",
  height: "100%",
  margin: false,
  src: "",
  border_radius: "",
};

const DefaultImage = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border-radius: ${(props) => props.border_radius};
  background-image: url("${(props) => props.src}");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default Image;
