import React from 'react';
import styled from 'styled-components';
import {Grid, Text} from '../elements';

import ReviewItem from '../components/ReviewItem';
import BeautyStars from 'beauty-stars';

import { useSelector, useDispatch} from 'react-redux';
import { actionCreators as reviewActions } from '../redux/modules/review';

const Reviews = (props) => {
  const {history} = props;
  const dispatch = useDispatch();
  const review_list = useSelector((state) => state.review.list);

  const storeId = history.location.pathname.split('/')[2]

  React.useEffect(() => {
    dispatch(reviewActions.getReviewDB(storeId))
  }, [])

  console.log(review_list);

  return (
    <React.Fragment>
      {/* 매장 데이터 가져오기 */}
      <P>신전떡볶이 메뉴</P>
      <Grid is_flex>
        {/* 별점(서버에서는 소수점 첫째자리로 주고 표출도 그렇게 하지만 별은 반올림해서 표출될 예정) */}
        <Grid width="auto">
          <Text size="55px" bold>4.8</Text>
        </Grid>
        <Grid margin="0% 0% 0% 3%">
          {/* 별점 데이터의 평균값 > value에 평균값 데이터 넣으면 됨! */}
            <BeautyStars value={5} size="20px" activeColor={'#f7d57f'}/>
            {/* 이것도 데이터에 있는 리뷰데이터의 length! */}
            <Text margin="1% 0px 0px 0px">리뷰 1개</Text>
        </Grid>
      </Grid>
      {/* 리뷰 맵돌리기*/}
      {review_list.map((r, idx) => {
            return <ReviewItem key={r._id} {...r}/>
          })}
      <ReviewItem />
    </React.Fragment>
  );
}

const P = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  padding-bottom: 20px;
`;

export default Reviews;