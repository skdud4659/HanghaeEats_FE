import React from "react";
import styled from "styled-components";
import { Grid, Input, Button, Text, Image } from "../elements";
import { history } from "../redux/configStore";
import * as Yup from "yup";
import { useFormik } from "formik";

import Footer from "../shared/Footer";
import coupang_logo from "../img/coupang_logo.jpg";

// 아이디(이메일) icon
import { HiOutlineMail } from "react-icons/hi";
// 비밀번호 icon
import { HiOutlineLockClosed } from "react-icons/hi";
// user icon
import { HiOutlineUser } from "react-icons/hi";
// 휴대폰번호 icon
import { HiOutlineDeviceMobile } from "react-icons/hi";

const Register = (props) => {
  const formik = useFormik({
    initialValues: {
      userId: "",
      pwd: "",
      userName: "",
      phoneNumber: "",
    },

    validationSchema: Yup.object({
      userId: Yup.string()
        .email("이메일을 올바르게 입력해주세요.")
        .required("이메일을 입력하세요."),
      pwd: Yup.string()
        .min(8, "비밀번호는 8자리 이상이어야 합니다.")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/,
          "영문/숫자 포함 조합 (8~20자)"
        )
        .required("비밀번호를 입력하세요."),
      userName: Yup.string().required("이름을 정확히 입력하세요."),
    }),

    onSubmit: (values) => {},
  });

  return (
    <React.Fragment>
      <Grid padding="16px" align="center">
        <Image height="100px" src={coupang_logo} />

        <FromBox name="registerForm" onSubmit={formik.handleSubmit}>
          <Grid margin="0 0 0 auto">
            <Text bold size="14px">
              회원정보를 입력해주세요
            </Text>
          </Grid>

          <Grid is_flex padding="16px 0px">
            <Grid width="10%">
              <HiOutlineMail />
            </Grid>

            <Grid width="90%">
              <Input
                pading="6px"
                placeholder="아이디(이메일)입력"
                id="userId"
                type="userId"
                _onChange={formik.handleChange}
                value={formik.values.userId}
              />

              {formik.touched.userId && formik.errors.userId ? (
                <HelperMsg>{formik.errors.userId}</HelperMsg>
              ) : null}
            </Grid>
          </Grid>

          <Grid is_flex padding="16px 0px">
            <Grid width="10%">
              <HiOutlineLockClosed />
            </Grid>
            <Grid width="90%">
              <Input
                padding="6px"
                placeholder="비밀번호 입력"
                id="pwd"
                type="pwd"
                _onChange={formik.handleChange}
                value={formik.values.pwd}
              />

              {formik.touched.pwd && formik.errors.pwd ? (
                <HelperMsg>{formik.errors.pwd}</HelperMsg>
              ) : null}
            </Grid>
          </Grid>

          <Grid is_flex padding="16px 0px">
            <Grid width="10%">
              <HiOutlineUser />
            </Grid>
            <Grid width="90%">
              <Input
                padding="6px"
                placeholder="이름"
                id="userName"
                type="userName"
                _onChange={formik.handleChange}
                value={formik.values.userName}
              />

              {formik.touched.userName && formik.errors.userName ? (
                <HelperMsg>{formik.errors.userName}</HelperMsg>
              ) : null}
            </Grid>
          </Grid>

          <Grid is_flex padding="16px 0px">
            <Grid width="10%">
              <HiOutlineDeviceMobile />
            </Grid>
            <Grid width="90%">
              <Input
                padding="6px"
                placeholder="휴대폰 번호"
                id="phoneNumber"
                type="phoneNumber"
                _onChange={formik.handleChange}
                value={formik.values.phoneNumber}
              />

              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <HelperMsg>{formik.errors.phoneNumber}</HelperMsg>
              ) : null}
            </Grid>
          </Grid>

          <Grid padding="16px 0px">
            <Button width="100%" height="40px">
              <Text bold color="#ffffff">
                가입하기
              </Text>
            </Button>
          </Grid>
        </FromBox>
      </Grid>
      <Footer />
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
export default Register;
