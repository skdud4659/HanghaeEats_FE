//소셜 로그인 할 때 사용하려고 했는데 다른 방법 써서 전체 주석 처리! 나중에 참고용!

// import React from "react";
// import { useDispatch } from "react-redux";
// import { KaKaoLoginDB } from "../redux/modules/user";

// const OAuth2RedirectHandler = (props) => {
//   const dispatch = useDispatch();

//   // 인가코드
//   let code = new URL(window.location.href).searchParams.get("code");

//   React.useEffect(() => {
//     dispatch(KaKaoLoginDB(code));
//   }, []);

//   return <React.Fragment />
// };

// export default OAuth2RedirectHandler;