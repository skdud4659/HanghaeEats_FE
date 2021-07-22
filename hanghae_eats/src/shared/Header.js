import React from 'react';
import styled from 'styled-components';
import { Button, Grid, Text, Image } from '../elements';

import {history} from '../redux/configStore';
import {useSelector, useDispatch} from 'react-redux'
import {LogOut} from '../redux/modules/user'

import logo from '../shared/logo.PNG'

const Header = (props) => {
  const dispatch = useDispatch()
  const loginChk = useSelector((state) => state.user.is_login)

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

  //마이페이지 이동 버튼
  const gotoMyEats = () => {
    history.push('/myEats')
  }

  //로그아웃 버튼
  const logOutBtn = () => {
    dispatch(LogOut())
    history.replace('/')
  }

   //로그인, 회원가입 페이지에서는 헤더 안보이게 설정
  if(window.location.pathname === "/login" || window.location.pathname === "/register") return null;
  
  //로그인 상태일 때 헤더
  if(loginChk === true) {
    return (
      <React.Fragment>
          <Grid is_flex padding="1% 0%">
            <Grid margin="0px 0px 0px 1%" _onClick={() => {history.push('/')}}>
              <Image back_size="contain" width="15vmin" height="50px" src={logo}/>
            </Grid>
            <Button width="15vmin" height="40px" margin="0px 10px 0px 0px" _onClick={gotoMyEats}>
              <Text bold color={"white"}>마이페이지</Text>
            </Button>
            <Button width="15vmin" height="40px" margin="0px 10px 0px 0px" _onClick={logOutBtn}>
              <Text bold color={"white"}>로그아웃</Text>
            </Button>
          </Grid>
          <Hr/>
    </React.Fragment>
    )
  }
  
  return (
    <React.Fragment>
      <Grid is_flex padding="1% 0%">
        <Grid margin="0px 0px 0px 1%" _onClick={() => {history.push('/')}}>
          <Image back_size="contain" width="15vmin" height="50px" src={logo}/>
        </Grid>
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