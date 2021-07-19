import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
import instance from "./instance";

//Action
const GET_USER = "GET_USER";

//initialState
const initialState = {
  user: null,
  is_login: false,
};

const user_initial = {
  nickname: "eatinglover123",
  email: "abc@ddd.com",
  password: "abc1234",
  confirmPassword: "abc1234",
  phone: "01012345678",
};

//Action Creators
const getUser = createAction(GET_USER, (user) => ({ user }));

//회원가입 API axios로 만들어보기
// DB에 이메일 패스워드 받아와서
// axios 기능(GET,POST)("api주소")/api/user
// 콘솔로 찍고 return;으로 뒷 내용 삭제

const signUpDB = (email, password, nickname, phone) => {
  return function (dispatch, getState, { history }) {
    instance
      .post('/api/user', { 
      //빈 배열을 만들었을때는 email.userId이런 식으로 사용가능. 하지만 지금은 각각 갖고 오기 때문에 표현하지 않는다.
        email: email,
        password: password,
        nickname: nickname,
        phone: phone,
      })
      .then((response) => {
        console.log("성공", response);
        window.alert("회원가입 완료!");
      })
      .catch((error) => {
        console.log("회원가입 DB 저장 요류", error);
      });
  };
};

export default handleActions(
  {
    [GET_USER]: (state, action) => 
    produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  signUpDB,
  getUser,
};

export { actionCreators };
