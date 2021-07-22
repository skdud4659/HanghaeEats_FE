import React from 'react';
import styled from 'styled-components';
import StoreDetailInfo from '../components/StoreDetailInfo';
import ReviewList from '../components/ReviewList';
import Menu from '../components/Menu';

import { Button, Grid, Text } from '../elements';

import {useDispatch, useSelector} from 'react-redux';
import {getMenuDB} from '../redux/modules/store';

import {ttlPrice} from '../redux/modules/cart';
import { history } from '../redux/configStore';

//자세히 모달창 패키지
import Modal from 'react-awesome-modal';

const StoreDetail = (props) => {
  const dispatch = useDispatch()
  const storeId = history.location.pathname.split('/')[2]
  const menu_list = useSelector((state) => state.stores.menus)
  const cart_list = useSelector((state) => state.cart.carts)

   //로드
  React.useEffect(() => {
    dispatch(getMenuDB(storeId))
  },[])

  //현재 카트에 총 합
  let ttl_price = 0;
  for(let i=0; i<cart_list.length; i++) {
    let price = cart_list[i].countPrice
    ttl_price += price
  }

  //주문하기 버튼
  const orderBtn = () => {
    ttl_price < 15000 ? window.alert('최소 주문 금액은 15,000원 입니다!')
    : history.replace('/cart')
      dispatch(ttlPrice(ttl_price))
  }

  //리뷰 페이지로 이동
  const gotoReview = () => {
    history.push(`/reviews/${storeId}`)
  }

  //모달창
  const [visible, setVisible] = React.useState();
  const showModal = () => {
    setVisible(true)
  }
  const closeModal = () => {
    setVisible(false)
  }


  return (
    <React.Fragment>
      {/* 매장 정보 */}
        <StoreDetailInfo />
        <Grid is_flex margin="5% 0%;" width="25vmin;">
          <Grid width="8vmin;" margin="0px">
            <Text margin="10% 0%">배달비</Text>
            <Text>최소주문</Text>
          </Grid>
          <Grid width="15vmin;" margin="0px">
            <Text margin="5% 0%">2,000원
            <Detail onClick={showModal}> 자세히 </Detail>
            {/* 모달창 */}
            <Modal visible={visible} width="400px" height="150px" effect="fadeInDown" onClickAway={closeModal}>
              <Grid>
                <Grid align="center" height="auto" margin="5% auto">
                  <Text>배달비 안내</Text>
                </Grid>
                <Grid is_flex height="auto">
                  <Text>주문금액</Text>
                  <Text>배달비</Text>
                </Grid>
                <hr style={{color:"#e2e2e2", width:"90%"}}/>
                <Grid is_flex height="auto">
                  <Text>5만원 ~</Text>
                  <Text>무료</Text>
                </Grid>
              </Grid>
            </Modal>
            {/* 최소주문 금액 위에서 is_flex 중 */}
            </Text>
            <Text>15,000원</Text>
          </Grid>
        </Grid>
        {/* 리뷰 맵돌리기 */}
        <Grid is_flex>
          <ReviewList />
          {/* 리뷰 더보기 버튼 */}
          <Grid border="1px solid gray" padding="10px" width="10%" height="80px" margin="0px 0px 5% auto" border_radius="5px" >
            <Button _onClick={gotoReview} bg={'white'} margin="0px auto;">
              <Text margin="0px auto;" cursor bold>리뷰 <br/> 더 보기</Text>
            </Button>
          </Grid>
        </Grid>
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