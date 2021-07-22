import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {children, border, m_height, m_padding, m_width, align, overflowX, width, is_flex, bg, padding, margin, height, border_radius, _onClick,
  } = props;

  const styles = {
    width,
    is_flex,
    padding,
    margin,
    height,
    bg,
    border_radius,
    align,
    overflowX,
    border,
    m_width,
    m_height,
    m_padding,
  };
  return (
    <Wrapper onClick={_onClick} {...styles}>
      {children}
    </Wrapper>
  );
};

Grid.defaultProps = {
  children: null,
  width: "100%",
  height: "100%",
  is_flex: false,
  padding: "auto",
  margin: "auto",
  bg: null,
  border_radius: "",
  align: false,
  overflowX: "",
  border:false,
  m_width:"100%",
  m_height: "100%",
  m_padding: "auto",
  _onClick: () => {},
};

const Wrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) =>props.is_flex &&`display: flex; justify-content: space-between; align-items: center;`}
  padding : ${(props) => props.padding};
  border: ${(props) => props.border};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bg};
  border-radius: ${(props) => props.border_radius};
  ${(props) => (props.align ? `text-align: ${props.align}` : "")};
  ${(props) => (props.overflowX ? `overflow-x: scroll` : "")};

  @media only screen and (max-width:375px) {
    ${(props) => (props.m_width ? `width: ${props.m_width}` : `width: ${props.width}`)};
    ${(props) => (props.m_height ? `height: ${props.m_height}` : `width: ${props.width}`)};
    ${(props) => (props.m_padding ? `padding: ${props.m_padding}` : `padding: ${props.padding}`)};
  }
`;

export default Grid;
