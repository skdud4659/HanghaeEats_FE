import React from "react";
import styled from "styled-components";

import { Text, Grid } from "./index";

const Input = (props) => {
  const { label, is_submit, onSubmit, placeholder, _onChange, bg, type, border, width, border_radius} = props;

  const styles = {
    width:width,
    border_radius:border_radius,
    bg:bg,
    border:border,
  }
  
  if(is_submit) {
    return (
    <React.Fragment>
      <Grid>
        <Text margin="0px">{label}</Text>
        <ElInput {...styles}
          type={type}
          placeholder={placeholder}
          onChange={_onChange}
          onKeyPress={(e) => {
            if(e.key === "Enter"){
              onSubmit(e);
            }
          }} />
      </Grid>
    </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <Grid>
        <Text margin="0px">{label}</Text>
        <ElInput {...styles}
          type={type}
          placeholder={placeholder}
          onChange={_onChange} />
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  placeholder: "텍스트를 입력해주세요.",
  type: "text",
  width: "90%",
  border_radius : "",
  border: "1px solid black",
  _onChange: () => {},
  bg: null,
  is_submit: false,
  onSubmit: () => {},
};

const ElInput = styled.input`
    font-size: 17px;
    border: ${(props) => props.border};
    width: ${(props) => props.width};
    border-radius: ${(props) => props.border_radius};
    background-color: ${(props) => props.bg};
    padding: 2%;
    box-sizing: border-box;
    :focus {
      outline: none;
    }
`;

export default Input;