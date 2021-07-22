import React from 'react';
import {Grid, Text, Image} from '../elements';
import coupon from '../img/coupon.jpg';

import {history} from '../redux/configStore'

//이모지
import { FiHeart, FiTag, FiPhone } from "react-icons/fi";
import { BiFoodMenu } from "react-icons/bi";
import { useSelector } from 'react-redux';

const MyEats = (props) => {
  const user_name = useSelector((state) => state.user.user_info)

  return (
    <React.Fragment>
      <Grid>
        {/* 내 정보 */}
        <Grid height="100px">
          <Text bold size="40px" margin="0% 0% 1% 0%" m_size="25px">{user_name}</Text>
          <Text size="20px">항해이츠에 오신 것을 환영해요!</Text>
        </Grid>
        {/* 쿠폰 */}
        <Grid height="190px" >
          <Image back_size="100%" src={coupon} m_height="100px"/>
        </Grid>
        {/* 목록 */}
        <Grid is_flex margin="3% 0%;" _onClick={() => {history.push(`/order/${user_name}`)}}>
          <BiFoodMenu size="65" />
          <Text width="40vmin" margin="auto 3%" size="20px" cursor>주문 내역</Text>
          <Grid></Grid>
        </Grid>
        <Grid is_flex margin="3% 0%;" _onClick={() => {history.push('/favorites')}}>
          <FiHeart size="65" />
          <Text width="40vmin" margin="auto 3%" size="20px" cursor>즐겨찾기</Text>
          <Grid></Grid>
        </Grid>
        {/* TODO 나중에 */}
        <Grid is_flex margin="3% 0%;">
          <FiTag size="65" />
          <Text width="40vmin" margin="auto 3%" size="20px" cursor>할인쿠폰</Text>
          <Grid></Grid>
        </Grid>
        {/* 프로필 기능 없앰! */}
        {/* <Grid is_flex margin="3% 0%;">
          <BiWrench size="65" />
          <Text width="40vmin" margin="auto 3%" size="20px" cursor>설정</Text>
          <Grid></Grid>
        </Grid> */}
        <Grid is_flex margin="3% 0%;" _onClick={() => {history.push('/aboutus')}}>
          <FiPhone size="65" />
          <Text width="40vmin" margin="auto 3%" size="20px" cursor>고객 지원</Text>
          <Grid></Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default MyEats;