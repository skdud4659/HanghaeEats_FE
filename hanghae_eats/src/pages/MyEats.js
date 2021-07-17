import React from 'react';
import {Grid, Text, Image} from '../elements';
import coupon from '../img/coupon.jpg';

import {history} from '../redux/configStore'

//이모지
import { FiHeart, FiTag, FiMessageSquare, FiPhone } from "react-icons/fi";
import { BiRocket, BiFoodMenu } from "react-icons/bi";

const MyEats = (props) => {
  const {nickname, phone} = props

  return (
    <React.Fragment>
      <Grid>
        {/* 내 정보 */}
        <Grid height="100px">
          <Text bold size="40px" margin="0% 0% 1% 0%">{props.nickname}</Text>
          <Text size="20px">{props.phone}</Text>
        </Grid>
        {/* 쿠폰 */}
        <Grid height="200px">
          <Image src={coupon}/>
        </Grid>
        {/* 목록 */}
        <Grid is_flex margin="3% 0%;" _onClick={() => {history.push('/order')}}>
          <BiFoodMenu size="65" />
          <Text width="40vmin" margin="auto 3%" size="20px">주문 내역</Text>
          <Grid></Grid>
        </Grid>
        <Grid is_flex margin="3% 0%;">
          <FiHeart size="65" />
          <Text width="40vmin" margin="auto 3%" size="20px">즐겨찾기</Text>
          <Grid></Grid>
        </Grid>
        <Grid is_flex margin="3% 0%;">
          <FiTag size="65" />
          <Text width="40vmin" margin="auto 3%" size="20px">할인쿠폰</Text>
          <Grid></Grid>
        </Grid>
        {/* 우선 나중에 만들기 */}
        <Grid is_flex margin="3% 0%;">
          <BiRocket size="65" />
          <Text width="40vmin" margin="auto 3%" size="20px">배달파트너 모집</Text>
          <Grid></Grid>
        </Grid>
        {/* 우선 나중에 만들기 */}
        <Grid is_flex margin="3% 0%;">
          <FiPhone size="65" />
          <Text width="40vmin" margin="auto 3%" size="20px">고객 지원</Text>
          <Grid></Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

MyEats.defaultProps = {
  nickname: "fall_of_jul",
  phone: '010-9597-6951',
}

export default MyEats;