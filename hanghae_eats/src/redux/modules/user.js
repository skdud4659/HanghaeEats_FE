// import { createAction, handleActions } from "redux-actions";
// import { produce } from "immer";
import instance from "./instance";
import { deleteCookie, getCookie, setCookie } from "../../shared/Cookie";
import { createSlice } from "@reduxjs/toolkit";


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

//카카오로 로그인하기
export const KaKaoLoginDB = () => {
  return function(dispatch, getState, {history}) {
    instance
      .get('/api/user/kakao')
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

//구글로 로그인하기
export const GoogleLoginDB = () => {
  return function(dispatch, getState, {history}) {
    instance
      .get('/api/user/google')
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
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
    SetUser: (state, action) => {
      state.user_info = action.payload.username;
      setCookie("token", action.payload.token);
      state.is_login = true;
    },
    LogOut: (state, action) => {
      deleteCookie("token");
      state.is_login = false;
      window.alert("로그아웃이 완료되었습니다.");
    },
    setUserName: (state, action) => {
      state.user_info = action.payload;
      state.is_login = true;
    },
  },
});

export const {SetUser, LogOut, setUserName} = user.actions
export default user;


// //Action
// const GET_USER = "GET_USER";
// const SET_USER = "SET_USER";
// const DELETE_USER = "DELETE_USER";
// const SET_USERNAME = "SET_USERNAME";

// //initialState
// const initialState = {
//   user_info: { nickname: "익명" },
//   is_login: false,
// };

// //Action Creators
// const getUser = createAction(GET_USER, (user) => ({ user }));
// const setUser = createAction(SET_USER, (user) => ({ user }));
// const deleteUser = createAction(DELETE_USER, (user) => ({user}));
// const setUsername = createAction(SET_USERNAME, (user) => ({user}));

// //회원가입 API axios로 만들어보기
// // DB에 이메일 패스워드 받아와서
// // axios 기능(GET,POST)("api주소")/api/user
// // 콘솔로 찍고 return;으로 뒷 내용 삭제

// const signUpDB = (email, password, nickname, phone) => {
//   return function (dispatch, getState, { history }) {
//     instance
//       .post("/api/user", {
//         //빈 배열을 만들었을때는 email.userId이런 식으로 사용가능. 하지만 지금은 각각 갖고 오기 때문에 표현하지 않는다.
//         email,
//         password,
//         nickname,
//         phone,
//       })
//       .then((response) => {
//         const message = response.data.message;
//         if(message !== 'success') {
//           window.alert(response.data.message);
//           return;
//         }
//         window.alert("회원가입 완료!");
//         history.replace("/login");
//       })
//       .catch((error) => {
//         window.alert('회원가입에 오류가 있어요! 관리자에게 문의해주세요!')
//         console.log(error);
//       });
//   };
// };

// const logInDB = (email, password) => {
//   return function (dispatch, getState, { history }) {
//     instance
//       .post("/api/user/auth", {
//         email,
//         password,
//       })
//       .then((response) => {
//         const message = response.data.message;
//         if (message !== "success") {
//           window.alert(response.data.message);
//           return;
//         }

//         const userInfo = {
//           token: response.data.token,
//           username: response.data.user
//         }
//         dispatch(setUser(userInfo));
//         window.alert("로그인 성공!");
//         history.push("/");
//         // window.location.reload();
//       })
//       .catch((error) => {
//         window.alert("회원정보를 확인해주세요.");
//         console.log("회원가입 DB 저장 요류", error);
//       });
//   };
// };

// const loginChk = () => {
//   return function (dispatch, getState, {history}) {
//     const token = getCookie("token")
//         if(token === null) {
//         return;
//         }

//     instance
//       .get('/api/user/me')
//       .then((res) => {
//         if(res.data.message !== 'success') {
//           window.alert(res.data.message)
//         }
//         dispatch(setUsername(res.data.nickname));
//       })
//       .catch((err) =>{
//         window.alert('로그인 정보를 확인해주세요.')
//         console.log(err);
//       })
//   }
// }


// export default handleActions(
//   {
//     [GET_USER]: (state, action) => produce(state, (draft) => {}),

//     [SET_USER]: (state, action) =>
//       produce(state, (draft) => {
//         setCookie("token", action.payload.user.token);
//         draft.user.username = action.payload.user;
//         draft.is_login = true;
//       }),

//     [DELETE_USER]: (state, action) => 
//       produce(state, (draft) => {
//         deleteCookie("token");
//         state.is_login = false;
//         window.alert('로그아웃이 완료되었습니다.')
//       }),

//     [SET_USERNAME]: (state, action) => 
//       produce(state, (draft) => {
//         state.user = action.payload;
//         state.is_login=true;
//       })
//     },
//   initialState
// );

// const actionCreators = {
//   signUpDB,
//   logInDB,
//   getUser,
//   setUser,
//   deleteUser,
//   loginChk,
// };

// export { actionCreators };
