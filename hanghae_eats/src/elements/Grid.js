import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const {children, align, overflowX, width, is_flex, bg, padding, margin, height, border_radius, _onClick,
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
    overflowX
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
  _onClick: () => {},
};

const Wrapper = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  ${(props) =>props.is_flex &&`display: flex; justify-content: space-between; align-items: center;`}
  padding : ${(props) => props.padding};
  margin: ${(props) => props.margin};
  background-color: ${(props) => props.bg};
  border-radius: ${(props) => props.border_radius};
  ${(props) => (props.align ? `text-align: ${props.align}` : "")};
  ${(props) => (props.overflowX ? `overflow-x: scroll` : "")};
`;

export default Grid;
