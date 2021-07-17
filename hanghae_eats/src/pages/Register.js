<<<<<<< Updated upstream
import React from 'react';
=======
import React from "react";
import styled from "styled-components";
import { Grid, Input, Button, Text, Image } from "../elements";
import { history } from "../redux/configStore";
import * as Yup from "yup";
import { useFormik } from "formik";

// import Footer from "../shared/Footer";
import coupang_logo from "../img/coupang_logo.jpg";

// 아이디(이메일) icon
import { HiOutlineMail } from "react-icons/hi";
// 비밀번호 icon
import { HiOutlineLockClosed } from "react-icons/hi";
// user icon
import { HiOutlineUser } from "react-icons/hi";
// 휴대폰번호 icon
import { HiOutlineDeviceMobile } from "react-icons/hi";
>>>>>>> Stashed changes

const Register = (props) => {
  return (
    <React.Fragment>
<<<<<<< Updated upstream

=======
      <Grid padding="16px" align="center" margin="15% 0%">
        <Image 
        height="10vw" 
        src={coupang_logo}
        _onClick = {() => {
          history.push("/");
          window.location.reload();
        }}
        />

        <FromBox name="registerForm" onSubmit={formik.handleSubmit}>
          <Grid margin="0 0 0 auto">
            <Text bold size="17px">
              회원정보를 입력해주세요
            </Text>
          </Grid>

          <Grid is_flex padding="16px 0px">
            <Grid width="10%">
              <HiOutlineMail size="35"/>
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
              <HiOutlineLockClosed size="35"/>
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
              <HiOutlineUser size="35"/>
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
              <HiOutlineDeviceMobile size="35"/>
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
      {/* <Footer /> */}
>>>>>>> Stashed changes
    </React.Fragment>
  );
}

export default Register;