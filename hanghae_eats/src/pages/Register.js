import React from "react";
import styled from "styled-components";
import { Grid, Input, Button, Text, Image } from "../elements";
import { history } from "../redux/configStore";


import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

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

const Register = (props) => {
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState("");
  const [password, setPwd] = React.useState("");
  const [nickname, setUserName] = React.useState("");
  const [phone, setPhoneNumber] = React.useState("");

  // 리덕스에서 함수를 만들때 데이터 묶음이 아니라 따로따로 인자로 받는다고 정해둠.
  // 리덕스를 불러오니까 리덕스 규칙을 따라야 함.
  // const data = {
  //   email : email,
  //   password : password,
  //   nickname : nickname,
  //   phone : phone,
  // }

  //함수를 실행하면, 데이터를 만들고 액션 실행함.
  const signUp = () => {
    dispatch(userActions.signUpDB(email, password, nickname, phone))
  };

  return (
    <React.Fragment>
      <Grid padding="16px" align="center" margin="15% 0%">
        <Image
          height="10vw"
          src={coupang_logo}
          _onClick={() => {
            history.push("/");
            window.location.reload();
          }}
        />

        <FromBox>
          <Grid margin="0 0 0 auto">
            <Text bold size="17px">
              회원정보를 입력해주세요
            </Text>
          </Grid>

          <Grid is_flex padding="16px 0px">
            <Grid width="10%">
              <HiOutlineMail size="35" />
            </Grid>

            <Grid width="90%">
              <Input
                padding="6px"
                placeholder="아이디(이메일)입력"
                id="userId"
                name="userId"
                type="userId"
                _onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Grid>
          </Grid>

          <Grid is_flex padding="16px 0px">
            <Grid width="10%">
              <HiOutlineLockClosed size="35" />
  
            </Grid>
            <Grid width="90%">
              <Input
                padding="6px"
                placeholder="비밀번호 입력"
                id="pwd"
                name="pwd"
                type="pwd"
                _onChange={(e) => {
                  setPwd(e.target.value);
                }}
              />
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
                name="userName"
                type="userName"
                _onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </Grid>
          </Grid>

          <Grid is_flex padding="16px 0px">
            <Grid width="10%">
              <HiOutlineDeviceMobile size="35" />
            </Grid>
            <Grid width="90%">
              <Input
                padding="6px"
                placeholder="휴대폰 번호"
                id="phoneNumber"
                name="phoneNumber"
                type="phoneNumber"
                _onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
            </Grid>
          </Grid>

          {/* // 가입 버튼 */}
          <Grid padding="16px 0px">
            <Button
              _onClick={() => {
                signUp()
              }}
              width="100%"
              height="40px"
            >
              <Text bold color="#ffffff">
                가입하기
              </Text>
            </Button>
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

export default Register;