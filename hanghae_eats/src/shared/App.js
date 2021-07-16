import React from 'react';

//라우팅
import { Redirect, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";

import {Cart, Coupons, Favorites, Login, Main, MyEats, Order, Register, Reviews, ReviewWrite, StoreDetail, Stores} from '../pages'

const App = (props) => {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        {/* 메인사이드 */}
        <Route path="/" exact component={Main} />
        <Route path="/stores/:CategoryId" exact component={Stores} />
        <Route path="/storeDetail/:storeId" exact component={StoreDetail} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/reviews/:storeId" exact component={Reviews} />
        {/* 로그인 회원가입 */}
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        {/* 마이이츠 사이드 */}
        <Route path="/myEats/:userId" exact component={MyEats} />
        <Route path="/favorites/:userId" exact component={Favorites} />
        <Route path="/coupons" exact component={Coupons} />
        <Route path="/order:/userId" exact component={Order} />
        <Route path="/reviewWrite" exact component={ReviewWrite} />
        {/* 리뷰 수정 */}
        <Route path="/reviewWrite/:reviewId" exact component={ReviewWrite} />
        {/* 잘못된 주소면 메인으로 돌아가기 */}
        <Redirect from="*" to="/" />
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
