import React from 'react';
import styled from 'styled-components';
import { Button, Grid, Text } from '../elements';

const Header = (props) => {
  return (
    <React.Fragment>
      <Grid is_flex padding="1% 0%">
        <Grid></Grid>
        <Button width="10%" height="40px" margin="0px 10px 0px 0px">
          <Text>로그인</Text>
        </Button>
        <Button width="10%" height="40px" margin="0px 10px 0px 0px">
          <Text>회원가입</Text>
        </Button>
      </Grid>
      <Hr/>
    </React.Fragment>
  );
}

const Hr = styled.hr`
  margin: 0px;
`;


export default Header;