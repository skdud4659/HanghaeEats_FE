import React from "react";
import styled from "styled-components";

const Button = (props) => {

  const { children, bg, m_width, m_height, is_circle, width, margin, height, _onClick, border_radius } = props;

  const styles = {
    bg,
    width,
    margin,
    height,
    border_radius,
    m_width,
    m_height,
  }

  if(is_circle) {
    return <CircleBtn {...styles} onClick={_onClick } type="button">{children}</CircleBtn>;
  }

  return <ButtonEle {...styles} onClick={_onClick } type="button">{children}</ButtonEle>;

};

Button.defaultProps = {
  children: null,
  bg: "#23c8ff",
  width: "100%",
  margin: "auto",
  height: "100%",
  _onClick: () => {},
  border_radius: "0px",
  is_circle : false,
  m_width:"100%",
  m_height: "100%",
};

const ButtonEle = styled.button`
  display: block;
  border: none;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bg};
  color: ${(props) => props.hover_color};
  border-radius: ${(props) => props.border_radius};

  @media only screen and (max-width:375px) {
    width: ${(props) => props.m_width};
    height: ${(props) => props.m_height};
  }
`;

const CircleBtn = styled.button`
  border: 1px solid gray;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 50%;
  margin: ${(props) => props.margin};
  background-color: white;
  color: ${(props) => props.hover_color};

  @media only screen and (max-width:375px) {
    width: ${(props) => props.m_width};
    height: ${(props) => props.m_height};
  }
`;

export default Button;
