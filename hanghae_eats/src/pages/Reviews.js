import React from 'react';
import styled from 'styled-components';
import {Grid, Text} from '../elements';

import ReviewItem from '../components/ReviewItem';
import BeautyStars from 'beauty-stars';

import { useSelector, useDispatch} from 'react-redux';
import { actionCreators as reviewActions } from '../redux/modules/review';
import {getMenuDB, getOneStoreDB} from '../redux/modules/store'

import {history} from '../redux/configStore'

const Reviews = (props) => {
  const dispatch = useDispatch();
  const review_list = useSelector((state) => state.review.list);

  const store_Id = history.location.pathname.split('/')[2]
  
  //매장 이름 찾기
  const store_list = useSelector((state) => state.stores.store)
  const store_name = store_list.name

  React.useEffect(() => {
    dispatch(getMenuDB(store_Id))
    dispatch(getOneStoreDB(store_Id))
    dispatch(reviewActions.getReviewDB(store_Id))
  }, [])

  return (
    <React.Fragment>
      {/* 매장 데이터 가져오기 */}
      <P>{store_name}메뉴</P>
      <Grid is_flex>
        {/* 별점(서버에서는 소수점 첫째자리로 주고 표출도 그렇게 하지만 별은 반올림해서 표출될 예정) */}
        <Grid width="auto">
          <Text size="55px" bold>4.8</Text>
        </Grid>
        <Grid margin="0% 0% 0% 3%">
          {/* 별점 데이터의 평균값 > value에 평균값 데이터 넣으면 됨! */}
            <BeautyStars value={5} size="20px" activeColor={'#f7d57f'}/>
            {/* 이것도 데이터에 있는 리뷰데이터의 length! */}
            <Text margin="1% 0px 0px 0px">리뷰 {review_list.length}개</Text>
        </Grid>
      </Grid>
      {/* 리뷰 맵돌리기*/}
      {review_list.map((r, idx) => {
          return <ReviewItem key={r._id} {...r}/>
      })}
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