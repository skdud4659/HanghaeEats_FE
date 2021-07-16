import React from 'react';
import { Grid, Input, Button, Text } from '../elements';
import Footer from '../shared/Footer';

const Login = (props) => {
  return (
    <React.Fragment>
      <Grid padding ="16px" align="center" width="50%">
        <Grid>
          로고 이미지
        </Grid>

        <Grid padding="16px 0px">
          <Input pading="6px" placeholder="아이디(이메일)입력"/>
        </Grid>

        <Grid padding="16px 0px">
          <Input pading="6px" placeholder="비밀번호 입력"/>
        </Grid>

        <Grid padding="16px 0px">
          <Button width = "90%" height="40px">
            <Text bold color="#ffffff">로그인</Text>
          </Button>
        </Grid>

        <Grid padding="16px 0px">
          <Text size="13px" color="#50A0FF">회원가입</Text>
        </Grid>
        <Grid padding="16px 0px">
          <Footer/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Login;