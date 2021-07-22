import React from 'react';
import {Grid, Text, Image, Button} from '../elements'
import styled from 'styled-components';
import {history} from '../redux/configStore'
import moment from 'moment'

import OrderMenuList from '../components/OrderMenuList';
import {useDispatch} from 'react-redux';

const OrderList = (props) => {
  const dispatch=useDispatch()
  const menu_list = props.menus
  
  //시간 가공
  const orderDT = moment(props.orderDate).format('YYYY-MM-DD hh:mm a')

  //리뷰를 작성한 상태인가?
  const is_write = props.checkReview
  const [btnDisabled, setBtnDisabled] = React.useState()
  const reviewWriteBtn = () => {
    if (is_write) {
      setBtnDisabled('disabled');
      window.alert('이미 작성한 리뷰는 리뷰 페이지에서 수정 및 삭제가 가능해요!');
    } else {
      history.push(`/reviewWrite/${props._id}`)
    }
  }
  
  return (
    <React.Fragment>
      <Grid width="80%" height="auto" padding="5%" border={'1px solid gray'} border_radius="20px" margin="3% auto">
        {/* 상단 매장 정보 */}
        <Grid is_flex>
          {/* 주문 정보 */}
          <Grid width="60%" margin="0px">
            <Text bold size="35px">{props.storeId.name}</Text>
            <Text color={'gray'} margin="0px 0px 3% 0px">{orderDT}</Text>
            <Text>주문 완료</Text>
          </Grid>
          <Image width="40%" height="130px"src={props.storeId.image}/>
        </Grid>
        {/* 주문한 메뉴 정보 - 맵돌리기*/}
        {menu_list.map((m, idx) => {
          return <OrderMenuList key={m.menuId} {...m}/>
        })}
        {/* 합계 */}
        <Grid margin="0px 0px 5% 0px">
          <Text size="18px">합계: <Span>{props.price}원</Span></Text>
        </Grid>
        {/* 리뷰쓰기 버튼 */}
        <Grid>
          <Review onClick={reviewWriteBtn} disabled={btnDisabled}>
            <Text color={'#23c8ff'} bold size="18px">리뷰 쓰기</Text>
          </Review>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

const Span = styled.span`
  font-weight: bold;
`;

const Review = styled.button`
  padding: 20px;
  border: 1px solid #23c8ff;
  border-radius: 5px;
  width: 100%;
`;

export default OrderList;
