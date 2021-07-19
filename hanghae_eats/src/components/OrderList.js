import React from 'react';
import {Grid, Text, Image, Button} from '../elements'
import styled from 'styled-components';
import {history} from '../redux/configStore'

import OrderMenuList from '../components/OrderMenuList';

const OrderList = (props) => {
  return (
    <React.Fragment>
      <Grid width="80%" height="auto" padding="5%" border={'1px solid gray'} border_radius="20px" margin="3% auto">
        {/* 상단 매장 정보 */}
        <Grid is_flex>
          {/* 주문 정보 */}
          <Grid width="60%" margin="0px">
            <Text bold size="35px">신전떡볶이 노량진점</Text>
            <Text color={'gray'} margin="0px 0px 3% 0px">2021-07-13 08:16 pm</Text>
            <Text>주문 완료</Text>
          </Grid>
          <Image width="30%" height="100px"src="https://blog.kakaocdn.net/dn/bZXBw8/btqZefYyrZx/EZ4Zo0gm3HUdeM6ky4kfHK/img.png"/>
        </Grid>
        {/* 주문한 메뉴 정보 - 맵돌리기*/}
        <OrderMenuList />
        {/* 합계 */}
        <Grid margin="0px 0px 5% 0px">
          <Text size="18px">합계: <Span>18,500원</Span></Text>
        </Grid>
        {/* 리뷰쓰기 버튼 */}
        <Grid>
          <Review onClick={() => {history.push('/reviewWrite')}}>
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
