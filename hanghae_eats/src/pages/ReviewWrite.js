import React from 'react';
import {Grid, Text, Button, Input} from '../elements';

import styled from 'styled-components'
import {useDispatch, useSelector} from "react-redux";
import { actionCreators as reviewActions } from '../redux/modules/review';

//이모지
import { FaShoppingBasket, FaRegEdit } from "react-icons/fa";
import BeautyStars from 'beauty-stars';

//TODO 각 페이지 세로 중앙 정렬 찾아보기
//수정도 한 페이지에서!
const ReviewWrite = (props) => {
  const dispatch = useDispatch();

  //별점
  const [chgRate, setChgRate] = React.useState()
  const chgStar = (value) => {
    setChgRate(value)
  }

  return (
    <React.Fragment>
      <P>만족도 평가 및 리뷰</P>
      <Grid margin="3% 0px">
        {/* 음식평가 title */}
        <Grid is_flex>
          <Grid width="auto">
            <FaShoppingBasket style={{width:"30px", height:"30px", borderRadius:"50%", backgroundColor:"#23c8ff", color:"white", padding:"10px"}}/>
          </Grid>
          <Text margin="0px 0px 0px 10px" width="50%" size="23px" bold>음식 평가</Text>
          <Grid></Grid>
        </Grid>

        {/* 매장 이름 > 주문 내역 데이터 끌고와서 표출 */}
        <Grid margin="2% 0px">
          <Text size="18px" margin="0px 0px 1% 0px">신전떡볶이</Text>
          {/* 별점 > value값으로 평점 가져오기 */}
          <BeautyStars value={chgRate} onChange={chgStar} size="25px" activeColor={'#f7d57f'}/>
        </Grid>
          {/* 메뉴 > 주문 내역 메뉴 데이터 끌고와서 맵돌리기 */}
        <Grid>
          치즈 떡볶이
        </Grid>

        {/* 리뷰 작성 title */}
        <Grid is_flex margin="5% 0px 2% 0px">
          <Grid width="auto">
            <FaRegEdit style={{width:"30px", height:"30px", borderRadius:"50%", backgroundColor:"#23c8ff", color:"white", padding:"10px"}}/>
          </Grid>
          <Text margin="0px 0px 0px 10px" width="50%" size="23px" bold>리뷰 작성하기</Text>
          <Grid></Grid>
        </Grid>
        {/* 작성 textarea */}
        <Grid>
          {/* <Textarea rows={10}/> */}
        </Grid>
        {/* 작성하기 버튼 */}
        <Button 
        border_radius="7px" 
        argin="3% auto" 
        width="20%" 
        height="40px"
        _onClick = {reviewActions.addReview()}
        >
        <Text color={'white'} bold>작성하기</Text>
        </Button>
      </Grid>
    </React.Fragment>
  );
}

const P = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  padding-bottom: 20px;
`; 

const Textarea = styled.textarea`
  width:95%;
  padding:20px;
  font-size:18px;
  resize: none;
  :focus {
    outline: none;
  }
`;

export default ReviewWrite;