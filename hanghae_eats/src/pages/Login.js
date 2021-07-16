import React from 'react';
import { Grid, Input, Button, Text, Image } from '../elements';
import { history } from '../redux/configStore';
import Footer from '../shared/Footer';

const Login = (props) => {
  return (
    <React.Fragment>
      <Grid padding ="16px" align="center" width="50%">
        <Grid>
          <Text font-size="50px">여기 로고</Text>
        </Grid>

        <Grid is_flex padding="16px 0px">
          <Grid width="10%">
            <Text>아이디</Text>
          </Grid>
          <Grid width="90%">
            <Input pading="6px" placeholder="아이디(이메일)입력"/>
          </Grid>
        </Grid>

        <Grid is_flex padding="16px 0px">
          <Grid width="10%">
            <Text>비밀번호</Text>
          </Grid>
          <Grid width="90%">
            <Input pading="6px" placeholder="비밀번호 입력"/>
          </Grid>
        </Grid>

        <Grid padding="16px 0px">
          <Button width = "100%" height="40px">
            <Text bold color="#ffffff">로그인</Text>
          </Button>
        </Grid>

        <Grid padding="16px 0px">
          <Text size="13px" color="#50A0FF" onClick={() => props.history.push("/register")}>회원가입</Text>
        </Grid>
        <Grid padding="16px 0px">
          <Footer/>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Login;