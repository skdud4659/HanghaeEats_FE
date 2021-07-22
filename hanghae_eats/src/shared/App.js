import React from 'react';
import styled from 'styled-components'

//라우팅
import { Redirect, Route } from "react-router-dom";
import Header from './Header';
import {Cart, Coupons, Favorites, Login, Main, MyEats, Order, Register, Aboutus, Reviews, ReviewWrite, ReviewEdit, StoreDetail, AllStores, Stores} from '../pages'
//로그인 인증
import { useSelector, useDispatch } from 'react-redux';
import { LogInChk } from '../redux/modules/user'
//소셜 로그인
import { setCookie } from './Cookie';

const App = (props) => {
  const dispatch = useDispatch()
  let is_login = useSelector((state) => state.user.is_login);

  React.useEffect(() => {
    //소셜 로그인 할 때 토큰값 가져오기
    const isToken = window.location.href.includes("token")
    if(isToken) {
      let token = window.location.href.split('/')[3].split('=')[1];
      //구글로 로그인 때 토큰에 자꾸 '#'이 들어와서 가공!
      if(token.includes('#')) {
        const G_token = token.split('#')[0]
        token = G_token
      }
      setCookie("token", token);
      window.location.replace('/');
      is_login = true;
    }

    //로그인 상태 확인
    if(!is_login) {
      dispatch(LogInChk());
    }
  },[])

  return (
    <React.Fragment>
      <Header />
        {/* 너비 고정 */}
        <WrapEx>
            {/* 메인사이드 */}
            <Route path="/" exact component={Main} />
            {/* 특정 카테고리로 들어가기 */}
            <Route path="/stores/:category" exact component={Stores} />
            {/* 모든 카테고리로 들어가기 */}
            <Route path="/stores" exact component={AllStores} />
            <Route path="/storeDetail/:name" exact component={StoreDetail} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/reviews/:storeId" exact component={Reviews} />
            {/* 마이이츠 사이드 */}
            <Route path="/myEats" exact component={MyEats} />
            <Route path="/aboutus" exact component={Aboutus} />
            <Route path="/order/:user_name" exact component={Order} />
            <Route path="/favorites" exact component={Favorites} />
            <Route path="/coupons" exact component={Coupons} />
            <Route path="/reviewWrite/:orderId" exact component={ReviewWrite} />
            <Route path="/reviewEdit/:reviewId" exact component={ReviewEdit} />
            {/* 잘못된 주소면 메인으로 돌아가기 */}
            {/* <Redirect from="*" to="/" /> */}
        </WrapEx>
        <Wrap>
          {/* 로그인 회원가입 */}
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Wrap> 
    </React.Fragment>
  );
}

const Wrap = styled.div`
  width:50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media only screen and (max-width: 500px) {
    width: 90%;
  }
`;

const WrapEx = styled.div`
  width:50%;
  margin:2% auto;

  @media only screen and (max-width: 500px) {
    width: 90%;
  }
`;

export default App;
