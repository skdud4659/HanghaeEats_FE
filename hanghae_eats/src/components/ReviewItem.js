import React from 'react';
import {Grid, Text, Image, Button} from '../elements';
import BeautyStars from 'beauty-stars';
import styled from 'styled-components'
import logo from '../shared/logo.PNG'

//이모지
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

const ReviewItem = (props) => {
  // 나중에 데이터에 따라 변경해도 무방!
  const {user_name,star,content,menu} = props

  return (
    <React.Fragment>
      <Wrap>
        <Text size="18px">{props.user_name}</Text>
        <Grid margin="1% 0% 0% 0%">
          {/* 별점 데이터 > value에 데이터 넣으면 됨! */}
            <BeautyStars value={4} size="13px" activeColor={'#f7d57f'}/>
        </Grid>
        {/* 우선은 사진업로드 없읍!! 임의로 내 마음에 드는 사진 ㅎㅎㅎ */}
        <Image height="400px" src={logo}/>
        {/* 리뷰 내용 */}
        <Grid margin="2% 0px">
          <Text size="18px">{props.content}</Text>
        </Grid>
        {/* 주문메뉴 */}
        <Grid is_flex>
          <Text width="10vmin" color={'#9c9c9c'}>주문메뉴</Text>
          {/* 메뉴가 여러개인 경우 중간점(·)으로 연결 가능? */}
          <Text width="30vmin">{props.menu}</Text>
          <Grid></Grid>
        </Grid>
        {/* 리뷰가 도움이 되었나요? > 여기 버튼은 그냥 클릭하면 색만 변하도록!!! > useState를 사용하면 가능해요!*/}
        <Grid margin="2% 0px">
          <Text size="15px">리뷰가 도움이 되었나요?</Text>
          <Grid is_flex margin="1% 0px">
            {/* 돼요! */}
            <Grid width="40vmin" border="1px solid #9c9c9c" align="center" padding="1.5%" border_radius="10px">
                <Text color={'#9c9c9c'}><FaRegThumbsUp /> 도움이 돼요</Text>
            </Grid>
            {/* 안돼요!. */}
            <Grid width="40vmin" border="1px solid #9c9c9c" align="center" padding="1.5%" border_radius="10px">
                <Text color={'#9c9c9c'}><FaRegThumbsDown /> 도움이 안돼요</Text>
            </Grid>
          </Grid>
        </Grid>
      </Wrap>
    </React.Fragment>
  );
}

const Wrap = styled.div`
  margin: 5% auto;
`;

ReviewItem.defaultProps = {
  user_name : "맛있으면 야옹하는 고양이",
  star : "4",
  content: "야야야야양오양야야오야야오ㅑㅇ야야야ㅑ야양오야야오양야옹",
  menu: "치즈떡볶이"
}

export default ReviewItem;