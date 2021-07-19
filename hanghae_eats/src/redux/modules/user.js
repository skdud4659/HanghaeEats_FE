import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "./instance";
import { deleteCookie, getCookie, setCookie } from "../../shared/Cookie";

//Action
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";
const DELETE_USER = "DELETE_USER";

//initialState
const initialState = {
  user: null,
  is_login: false,
};

const user_initial = {
  nickname: "eatinglover123",
  email: "abc@ddd.com",
  password: "abc1234",
  phone: "01012345678",
};

//Action Creators
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));
const deleteUser = createAction(DELETE_USER, (user) => ({user}));

//회원가입 API axios로 만들어보기
// DB에 이메일 패스워드 받아와서
// axios 기능(GET,POST)("api주소")/api/user
// 콘솔로 찍고 return;으로 뒷 내용 삭제

const signUpDB = (email, password, nickname, phone) => {
  return function (dispatch, getState, { history }) {
    instance
      .post("/api/user", {
        //빈 배열을 만들었을때는 email.userId이런 식으로 사용가능. 하지만 지금은 각각 갖고 오기 때문에 표현하지 않는다.
        email: email,
        password: password,
        nickname: nickname,
        phone: phone,
      })
      .then((response) => {
        console.log("성공", response);
        window.alert("회원가입 완료!");
        history.push("/");
      })
      .catch((error) => {
        console.log("회원가입 DB 저장 요류", error);
      });
  };
};

const logInDB = (email, password) => {
  return function (dispatch, getState, { history }) {
    instance
      .post("/api/user/auth", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response); //1번(reponse data확인)
        //데이터를 사용자로컬에 보존 - setItem(데이터 추가)
        localStorage.setItem("name", JSON.stringify(`${email}`)); //localStorage의 텍스트형이므로 객체 json.stringfy로 변환
        sessionStorage.setItem("token", response.data.token);

        console.log(localStorage);
        console.log(sessionStorage);

        dispatch(
          setUser({
            email: response.data.email,
            password: response.data.password,
          })
        );

        const message = response.data.message;

        if (message !== "success") {
          window.alert("입력하신 아이디 또는 비밀번호가 일치하지 않습니다");
          return;
        }
        window.alert("로그인 성공!");
        history.push("/");
      })
      .catch((error) => {
        window.alert("회원정보를 확인해주세요");
        console.log("회원가입 DB 저장 요류", error);
      });
  };
};

const logOutDB = () => {
  return function (dispatch, getState, {history}){
    dispatch(deleteUser());
  }
}


export default handleActions(
  {
    [GET_USER]: (state, action) => produce(state, (draft) => {}),

    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        setCookie("token", action.payload.token);
        draft.is_login = true;
      }),

    [DELETE_USER]: (state, action) => 
      produce(state, (draft) => {
        deleteCookie("token");
        state.user = null; //여기 확인하기
        state.is_login = false;
      })
    },
  initialState
);

const actionCreators = {
  signUpDB,
  logInDB,
  logOutDB,
  getUser,
  setUser,
  deleteUser,
};

export { actionCreators };
