import React from 'react';
import styled from 'styled-components';
import { Grid, Image, Text } from '../elements';
import BeautyStars from 'beauty-stars';

const ReviewList = (props) => {
  const {_id, shopId, image, menuId, userId, orderId, reviewDate, content, star} = props

  return (
    <React.Fragment>
      <ReviewItem>
          <Grid width="25%" margin="0px">
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
  width:50%;
  height:100px;
  border: 1px solid gray;
  display: flex;
  margin-bottom: 5%;
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