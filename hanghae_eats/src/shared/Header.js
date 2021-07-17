import React from 'react';
import styled from 'styled-components';
import { Button, Grid, Text } from '../elements';

import {history} from '../redux/configStore';

const Header = (props) => {
  //로그인 이동 버튼
  const gotoLogin = () => {
    history.replace('/login')
    window.location.reload();
  }

  //회원가입 이동 버튼
  const gotoRegister = () => {
    history.replace('/register')
    window.location.reload();
  }

   //로그인, 회원가입 페이지에서는 헤더 안보이게 설정
  if(window.location.pathname === '/login' || window.location.pathname === '/register') return null;
  
  return (
    <React.Fragment>
      <Grid is_flex padding="1% 0%">
        <Grid></Grid>
        <Button width="15vmin" height="40px" margin="0px 10px 0px 0px" _onClick={gotoLogin}>
          <Text bold color={"white"}>로그인</Text>
        </Button>
        <Button width="15vmin" height="40px" margin="0px 10px 0px 0px" _onClick={gotoRegister}>
          <Text bold color={"white"}>회원가입</Text>
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