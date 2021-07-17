
import React from "react";
import styled from "styled-components";
import { Grid, Input, Button, Text, Image } from "../elements";
import { history } from "../redux/configStore";
import { useFormik } from "formik";
import * as Yup from "yup";

// import Footer from "../shared/Footer";
import coupang_logo from "../img/coupang_logo.jpg";

const Login = (props) => {
  const formik = useFormik({
    initialValues: {
      userId: "",
      pwd: "",
    },

    valicationSchema: Yup.object({
      userId: Yup.string()
        .email("아이디는 이메일주소 형식으로 입력해주세요.")
        .required("아이디를 입력해주세요."),

      pwd: Yup.string()
        .min(4, "비밀번호는 4자리 이상이어야 합니다.")
        .matches(/[a-zA-Z]/, "패스워드는 반드시 영문을 포함해야합니다.")
        .required("패스워드르 입력해주세요."),
    }),

    onSubmit: (values) => {},
  });

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
          {/* <Footer/> */}
        </Grid>
      </Grid>
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
    </React.Fragment>
  );
};

const FromBox = styled.form`
  height: 90%;
  margin: 50px;
`;

const HelperMsg = styled.div`
  text-decoration: underline;
  font-size: 15px;
  font-weight: 600;
  color: red;
  margin: auto;
`;
export default Login;
