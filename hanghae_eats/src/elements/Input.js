import React from "react";
import styled from "styled-components";

import { Text, Grid } from "./index";

const Input = (props) => {
  const { label, placeholder, _onChange, type, width} = props;
  

  return (
    <React.Fragment>
      <Grid>
        <Text margin="0px">{label}</Text>
        <ElInput type={type} placeholder={placeholder} onChange={_onChange} width={width} />
      </Grid>
    </React.Fragment>
  );
};

Input.defaultProps = {
  placeholder: "텍스트를 입력해주세요.",
  type: "text",
  width: "90%",
  _onChange: () => {},
};

const ElInput = styled.input`
    border: 1px solid #212121;
    width: ${(props) => props.width};
    padding: 12px 4px;
    box-sizing: border-box;
`;

export default Input;