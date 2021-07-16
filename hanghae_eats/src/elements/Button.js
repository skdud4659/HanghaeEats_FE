import React from "react";
import styled from "styled-components";

const Button = (props) => {

  const { children, bg, width, margin, height, _onClick, border_radius } = props;

  const styles = {
    bg:bg,
    width:width,
    margin:margin,
    height:height,
    border_radius:border_radius
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
};

const ButtonEle = styled.button`
  border: none;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bg};
  color: ${(props) => props.hover_color};
  border-radius: ${(props) => props.border_radius};
`;

export default Button;
