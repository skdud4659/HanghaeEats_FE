import React from 'react';
import styled from 'styled-components';
import { Grid, Image, Text } from '../elements';
import BeautyStars from 'beauty-stars';

import {history} from '../redux/configStore';

const ReviewList = (props) => {
  const {_id, shopId, image, menuId, userId, orderId, reviewDate, content, star} = props

  //리뷰 페이지로 이동
  const gotoReview = () => {
    history.push(`/reviews/${shopId}`)
  }

  return (
    <React.Fragment>
      <ReviewItem onClick={gotoReview}>
          <Grid width="30%" margin="0px">
            <Image src={props.image}/>
          </Grid>
          <Grid width="auto" margin="5% 0px">
            <Text>{props.content}</Text>
            <Grid margin="7% 0% 0% 0%">
              <BeautyStars value={props.star} size="20px"/>
            </Grid>
          </Grid>
      </ReviewItem>
    </React.Fragment>
  );
}

const ReviewItem = styled.div`
  width:40vmin;
  height:100px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  display: flex;
  margin-bottom: 5%;
  cursor: pointer;
`;

ReviewList.defaultProps = {
  _id: "60ecfdc2891b59786536a160",
  image: "https://i.pinimg.com/originals/18/6a/a3/186aa3d8c6be02a6789f0dda5c2d1806.png",
  shopId: "60ecfdc2891b59786536a160",
  menuId: "60ecfdc2891b59786536a160",
  userId: "60ecfdc2891b59786536a160",
  orderId : "60ecfdc2891b59786536a160",
  reviewDate: "Tue Jul 13 2021 02:43:14 GMT+0000 (Coordinated Universal Time)",
  content : "정말 최고의 맛입니다",
  star : 4,
}

export default ReviewList;