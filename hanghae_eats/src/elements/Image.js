import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { width, height, m_width, m_height, size, margin, back_size, is_circle, cursor, _onClick, is_slide, src, border_radius } = props;

  const styles = {
    width,
    height,
    margin,
    border_radius,
    size,
    cursor,
    back_size,
    m_width,
    m_height,
  };

  if(is_circle) {
    return (
    <React.Fragment>
      <CircleImage {...styles} src={src} onClick={_onClick}/>
    </React.Fragment>
    )
  }

  if(is_slide) {
    return (
    <React.Fragment>
      <Slide {...styles} src={src} />
    </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <DefaultImage {...styles} src={src} onClick={_onClick}/>
    </React.Fragment>
  );
};

Image.defaultProps = {
  width: "100%",
  height: "100%",
  margin: false,
  src: "",
  border_radius: "",
  is_slide: null,
  is_circle: null,
  cursor: "",
  size: 100,
  back_size:null,
  m_width:"100%",
  m_height: "100%",
  _onClick: () => {},
};

const DefaultImage = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border-radius: ${(props) => props.border_radius};
  background-image: url("${(props) => props.src}");
  background-position: center;
  background-size: ${(props) => props.back_size};
  background-repeat: no-repeat;
  ${(props) => (props.cursor ? `cursor: pointer;` : "")};
  
  @media only screen and (max-width:500px) {
    width: ${(props) => props.m_width};
    height: ${(props) => props.m_height};
  }
`;

const Slide = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  border-radius: ${(props) => props.border_radius};
  background-image: url("${(props) => props.src}");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  @media only screen and (max-width:375px) {
    width: ${(props) => props.m_width};
    height: ${(props) => props.m_height};
  }
`;

const CircleImage = styled.img`
  --size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;

  background-image: url("${(props) => props.src}");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;

  @media only screen and (max-width:375px) {
    width: ${(props) => props.m_width};
    height: ${(props) => props.m_height};
  }
`;

export default Image;
