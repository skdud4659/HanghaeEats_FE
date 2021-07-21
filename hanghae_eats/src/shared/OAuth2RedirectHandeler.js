import React from "react";
import { useDispatch } from "react-redux";
import { KaKaoLoginDB } from "../redux/modules/user";

const OAuth2RedirectHandler = (props) => {
  const dispatch = useDispatch();

  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  React.useEffect(() => {
    dispatch(KaKaoLoginDB(code));
  }, []);

  return <React.Fragment />
};

export default OAuth2RedirectHandler;