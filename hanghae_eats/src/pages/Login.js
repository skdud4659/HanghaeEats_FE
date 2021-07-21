import React from "react";
import styled from "styled-components";
import { Grid, Input, Button, Text, Image } from "../elements";
import { history } from "../redux/configStore";
import { useDispatch } from "react-redux";
import { LogInDB, KaKaoLoginDB, GoogleLoginDB } from "../redux/modules/user";

// import Footer from "../shared/Footer";
import coupang_logo from "../img/coupang_logo.jpg";

//소셜로그인
import KaKaoLogin from 'react-kakao-login';
import { KAKAO_AUTH_URL } from "../redux/modules/OAuth";

const Login = (props) => {
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState("");
  const [password, setPwd] = React.useState("");

  //login 함수
  const logIn = () => {
    if (email === "" || password === "") {
      window.alert("아이디와 비밀번호를 입력해주세요.");
      return;
    }
    dispatch(LogInDB(email, password));
  }

  //카카오로 로그인
  const kakaoLogin = () => {
    dispatch(KaKaoLoginDB())
  }

  // const responseKaKao = (res) => {
  //   const { data } = this.state;

  //   this.setState({
  //     data: res,
  //   });

  //   fetch('http://3.36.97.199/api/user/kakao/callback', {
  //     //백엔드에서 원하는 형태의 endpoint로 입력해서 fetch한다. 
  //     method: 'GET',
  //     headers: {
  //       Authorization: res.response.access_token,
  //       //받아오는 response객체의 access_token을 통해 유저 정보를 authorize한다. 
      
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((res) => localStorage.setItem('token', res.token), 
  //           //백엔드에서 요구하는 key 값(token)으로 저장해서 localStorage에 저장한다.
  //           //여기서 중요한것은 처음에 console.log(res)해서 들어오는 
  //           //access_token 값을 백엔드에 전달해줘서 백엔드에 저장 해두는 
  //           //절차가 있으므로 까먹지 말 것! 
  //           alert('로그인 성공하였습니다'));
  // };

  //구글로 로그인
  const googleLogin = () => {
    dispatch(GoogleLoginDB())
  }
  return (
    <React.Fragment>

      <Grid padding="16px" align="center" margin="25% 0%">
        <Image
          height="10vw"
          src={coupang_logo}
          _onClick={() => {
            history.push("/");
            window.location.reload();
          }}
        />

        <FromBox name="loginForm">
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
                _onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
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
                type="password"
                _onChange={(e) => {
                  setPwd(e.target.value);
                }}
              />
            </Grid>
          </Grid>

          <Grid padding="16px 0px">
            <Button _onClick={() => {
                logIn()
              }} width="100%" height="40px">
              <Text 
              bold color="#ffffff">
                로그인
              </Text>
            </Button>
          </Grid>

          {/* 구글로 로그인 */}
          <Text margin="2% auto">소설 계정으로 로그인하기</Text>
          <WrapBtn>
            <Grid width="7vmin" margin="0px">
              <Grid name="googleLogin" _onClick={googleLogin} >
                <Image cursor src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvOX5hnNn7kVZ_XHdbTBhgVEa0yERoyi2R_g&usqp=CAU'} width="65px" height="65px" />
              </Grid>
            </Grid>
              {/* 카카오 로그인 */}
              {/* <KaKaoBtn
                 //styled component 통해 style을 입혀 줄 예정 
                jsKey={'84607a25d1431e36c1ece33a0ce1438c'}
                //카카오에서 할당받은 jsKey를 입력
                buttonText='카카오 계정으로 로그인'
                //로그인 버튼의 text를 입력
                onSuccess={responseKaKao}
                //성공했을때 불러올 함수로서 fetch해서 localStorage에 저장할 함수를 여기로 저장 
              /> */}
            <Grid width="7vmin" margin="0px">
              <a name="kakaoLogin" href={KAKAO_AUTH_URL}>
                <Image  cursor src={'http://seoulallnet.org/wp-content/uploads/2020/10/kakaotalk.png'} width="65px" height="65px" />
              </a>
            </Grid>
          </WrapBtn>

          <Grid is_flex padding="30px 0px">
            <Text size="15px">아직 회원이 아니신가요?</Text>
            <Text
              size="15px"
              color="#50A0FF"
              _onClick={() => history.push("/register")}
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

const WrapBtn = styled.div`
  display: flex;
  justify-content: space-between;
  width:30vmin;
  margin: auto;
`;

const KaKaoBtn = styled(KaKaoLogin)`
  padding: 0;
  width: 300px;
  height: 45px;
  line-height: 44px;
  color: #783c00;
  background-color: #ffeb00;
  border: 1px solid transparent;
  border-radius: 3px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  &:hover {
    box-shadow: 0 0px 15px 0 rgba(0, 0, 0, 0.2);
  }
`;

export default Login;
