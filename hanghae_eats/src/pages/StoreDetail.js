import React from 'react';
import styled from 'styled-components';
import StoreDetailInfo from '../components/StoreDetailInfo';
import ReviewList from '../components/ReviewList';
import Menu from '../components/Menu';

import { Button, Grid, Text } from '../elements';

import {useDispatch, useSelector} from 'react-redux';
import {getMenuDB} from '../redux/modules/store';
import { history } from '../redux/configStore';

const StoreDetail = (props) => {
  const dispatch = useDispatch()
  const storeId = history.location.pathname.split('/')[2]
  const menu_list = useSelector((state) => state.stores.menus)
  const cart_list = useSelector((state) => state.order.cart)

   //로드
  React.useEffect(() => {
    dispatch(getMenuDB(storeId))
  },[])

  //현재 카트에 총 합
  let ttl_price = 0;
  for(let i=0; i<cart_list.length; i++) {
    let price = cart_list[i].price
    ttl_price += price
  }

  //주문하기 버튼
  const orderBtn = () => {
    ttl_price < 15000 ? window.alert('최소 주문 금액은 15,000원 입니다!') : history.push('/cart');
  }

  //TODO 시간 남으면 자세히 모달창
  return (
    <React.Fragment>
        <StoreDetailInfo />
        <Grid is_flex margin="5% 0%;" width="25vmin;">
          <Grid width="8vmin;" margin="0px">
            <Text margin="10% 0%">배달비</Text>
            <Text>최소주문</Text>
          </Grid>
          <Grid width="15vmin;" margin="0px">
            <Text margin="5% 0%">2,000원 <Detail>자세히</Detail></Text>
            <Text>15,000원</Text>
          </Grid>
        </Grid>
        {/* 리뷰 맵돌리기 */}
        <ReviewList />
        <hr/>
        {/* 메뉴 맵돌리기 */}
        {menu_list.map((m, idx) => {
          return <Menu key={m._id} {...m}/>
        })}
        <Grid height="50px;" margin="5% 0% 0% 0%;">
          <Button _onClick={orderBtn}>
            <Grid is_flex>
              <Grid width="10vmin"></Grid>
              <Grid is_flex width="15vmin">
                <Counting>
                  <Text bold color={'#50A0FF'}>{cart_list.length}</Text>
                </Counting>
                <Text size="18px" bold color={'white'}>카트 보기</Text>
              </Grid>
              <TtlPrice>
                <Text size="18px" bold color={'white'}>{ttl_price}원</Text>
              </TtlPrice>
            </Grid>
          </Button>
        </Grid>
    </React.Fragment>
  );
}

const Detail = styled.span`
  width: 5vmin;
  font-size: 1rem;
  color:gray;
`;

const TtlPrice = styled.div`
  width:30vmin;
  align-items: center;
`;

const Counting = styled.div`
  width:4vmin;
  height: 4vmin;
  border-radius: 50%;
  background-color: white;
  color: transparent;
  line-height: 4.3vmin;
`;

export default StoreDetail;