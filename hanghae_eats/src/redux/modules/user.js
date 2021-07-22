import instance from "./instance";
import { deleteCookie, getCookie, setCookie } from "../../shared/Cookie";
import { createSlice } from "@reduxjs/toolkit";

//회원가입
export const SignUpDB = (email, password, nickname, phone) => {
  return function (dispatch, getState, {history}) {
    instance
    .post("/api/user", {email, password, nickname, phone,})
    .then((res) => {
      const message = res.data.message;
      if(message !== 'success') {
      window.alert(res.data.message);
      return;
    }
      window.alert("회원가입 완료!");
      history.replace("/login");
    })
    .catch((err) => {
      window.alert('회원가입에 오류가 있어요! 관리자에게 문의해주세요!')
      console.log(err);
    });
  }
}

//로그인
export const LogInDB = (email, password) => {
  return function(dispatch, getState, {history}) {
    instance
      .post("/api/user/auth", {email, password,})
      .then((res) => {
        const message = res.data.message;
        if (message !== "success") {
          window.alert(res.data.message);
          return;
        }
        const userInfo = {
          token: res.data.token,
          username: res.data.user
        }
        dispatch(SetUser(userInfo));
        window.alert("로그인 성공!");
        history.push("/");
        window.location.reload();
      })
      .catch((err) => {
        window.alert("회원정보를 확인해주세요.");
        console.log("회원가입 DB 저장 요류", err);
      });
  }
}

//로그인 상태 확인
export const LogInChk = () => {
  return function (dispatch, getState, {history}) {
    const token = getCookie("token")
      if(token === null) {
      return;
      }
    
    instance
      .get('/api/user/me')
      .then((res) => {
        if(res.data.message !== 'success') {
          window.alert(res.data.message)
        }
        dispatch(setUserName(res.data.user));
      })
      .catch((err) =>{
        window.alert('로그인 정보를 확인해주세요.')
        console.log(err);
      })
  }
}

//initialState
const initialState = {
  user_info: "",
  is_login: false,
};

//리덕스
const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    //로그인 > 토큰은 로컬에 저장중
    SetUser: (state, action) => {
      state.user_info = action.payload.username;
      setCookie("token", action.payload.token);
      state.is_login = true;
    },
    //로그아웃
    LogOut: (state, action) => {
      deleteCookie("token");
      state.is_login = false;
      window.alert("로그아웃이 완료되었습니다.");
    },
    // 로그인 시 닉네임이 없어서 닉네임으로 가공해서 웹 내에서 사용
    setUserName: (state, action) => {
      state.user_info = action.payload;
      state.is_login = true;
    },
  },
});

export const {SetUser, LogOut, setUserName} = user.actions
export default user;
