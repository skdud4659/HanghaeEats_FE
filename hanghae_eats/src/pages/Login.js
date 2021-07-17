<<<<<<< Updated upstream
import React from 'react';
import { Grid, Input, Button, Text } from '../elements';
import Footer from '../shared/Footer';
=======
import React from "react";
import styled from "styled-components";
import { Grid, Input, Button, Text, Image } from "../elements";
import { history } from "../redux/configStore";
import { useFormik } from "formik";
import * as Yup from "yup";

// import Footer from "../shared/Footer";

import coupang_logo from "../img/coupang_logo.jpg";
>>>>>>> Stashed changes

const Login = (props) => {
  return (
    <React.Fragment>
<<<<<<< Updated upstream
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
=======
      <Grid padding="16px" align="center" margin="25% 0%">
        <Image 
        height="10vw" 
        src={coupang_logo} 
        _onClick = {() => {
          history.push("/");
          window.location.reload();
        }}
        />

        <FromBox name="loginForm" onSubmit={formik.handleSubmit}>
          <Grid is_flex padding="16px 0px">
            <Grid width="20%">
              <Text>아이디</Text>
            </Grid>

            {/* // 아이디 input name="userId" 제외함 이유 찾을때까지! */}
            <Grid width="80%">
              <Input
                padding="6px"
                placeholder="아이디(이메일)입력"
                id="userId"
                type="userId"
                _onChange={formik.handleChange}
                value={formik.values.userId}
              />
              {formik.touched.userId && formik.errors.userId ? (
                <HelperMsg>{formik.errors.userID}</HelperMsg>
              ) : null}
            </Grid>
          </Grid>

          <Grid is_flex padding="16px 0px">
            <Grid width="20%">
              <Text>비밀번호</Text>
            </Grid>

            {/* //비밀번호 input */}
            <Grid width="80%">
              <Input
                padding="6px"
                placeholder="비밀번호 입력"
                pwd="pwd"
                type="pwd"
                _onChange={formik.handleChange}
                value={formik.values.pwd}
              />
              {formik.touched.pwd && formik.errors.pwd ? (
                <HelperMsg>{formik.errors.pwd}</HelperMsg>
              ) : null}
            </Grid>
          </Grid>

          <Grid padding="16px 0px">
            <Button width="100%" height="40px">
              <Text bold color="#ffffff">
                로그인
              </Text>
            </Button>
          </Grid>

          <Grid padding="16px 0px">
            <Text
              size="15px"
              color="#50A0FF"
              onClick={() => history.push("/register")}
            >
              회원가입
            </Text>
          </Grid>
        </FromBox>
      </Grid>
      {/* <Footer /> */}
>>>>>>> Stashed changes
    </React.Fragment>
  );
}

export default Login;