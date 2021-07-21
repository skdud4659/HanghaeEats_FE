import React from 'react';
import {Grid} from '../elements'

//라우팅
import { Redirect, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configStore";
import Header from './Header';
import {Cart, Coupons, Favorites, Login, Main, MyEats, Order, Register, Aboutus, Reviews, ReviewWrite, ReviewEdit, StoreDetail, AllStores, Stores} from '../pages'
//로그인 인증
import { useSelector, useDispatch } from 'react-redux';
import { LogInChk } from '../redux/modules/user'

const App = (props) => {
  const dispatch = useDispatch()
  const is_login = useSelector((state) => state.user.is_login);

  React.useEffect(() => {
    if(!is_login) {
      dispatch(LogInChk());
    }
  },[])

  return (
    <React.Fragment>
      <Header />
        {/* 너비 고정 */}
        <Grid width="50%" margin="2% auto 1% auto">
            {/* 메인사이드 */}
            <Route path="/" exact component={Main} />
            {/* 특정 카테고리로 들어가기 */}
            <Route path="/stores/:category" exact component={Stores} />
            {/* 모든 카테고리로 들어가기 */}
            <Route path="/stores" exact component={AllStores} />
            <Route path="/storeDetail/:name" exact component={StoreDetail} />
            <Route path="/cart" exact component={Cart} />
            <Route path="/reviews/:storeId" exact component={Reviews} />
            {/* 로그인 회원가입 */}
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />


            {/* 마이이츠 사이드 */}
            {is_login && <Route path="/myEats" exact component={MyEats} />}
            <Route path="/order/:user_name" exact component={Order} />

            {/* <Route path="/favorites/:userId" exact component={Favorites} /> */}
            <Route path="/favorites" exact component={Favorites} />
            <Route path="/coupons" exact component={Coupons} />
            

            <Route path="/reviewWrite/:orderId" exact component={ReviewWrite} />
            {/* 리뷰 수정 */}
            <Route path="/reviewEdit/:reviewId" exact component={ReviewEdit} />
            <Route path="/aboutus" exact component={Aboutus} />
            {/* 잘못된 주소면 메인으로 돌아가기 */}
            {/* <Redirect from="*" to="/" /> */}
        </Grid>
    </React.Fragment>
  );
}

export default App;
