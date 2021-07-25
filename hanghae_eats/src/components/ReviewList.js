import React from "react";
import styled from "styled-components";
import { Grid, Image, Text } from "../elements";
import BeautyStars from "beauty-stars";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/configStore";

const ReviewList = (props) => {
  const {
    _id,
    shopId,
    image,
    menuId,
    userId,
    orderId,
    reviewDate,
    content,
    star,
  } = props;

  console.log(props.star);

  // const content_list = useSelector((state) => state.review.list);
  const storeId = history.location.pathname.split("/")[2];


  //리뷰 페이지로 이동
  const gotoReview = () => {
    history.push(`/reviews/${storeId}`);
  };

  return (
    <React.Fragment>
    <ReviewItem onClick={gotoReview}>
      <Grid is_flex>
        <Grid width="30%" margin="0px" m_width="30%" height="100px">
            <Image 
              width="80px"
              height="100px"
              back_size="cover" 
              src={props.image}
              //모바일
              m_width="60px"
              m_height="80px"
              />
          </Grid>
          <Grid width="auto" margin="0px 3%" height="50%" m_height="50%">
            {/* 리뷰 가져오기 */}
            <Div>
              {/* // 별점 확인 */}
            {content}
            <BeautyStars value={star} size="15px" /> 
            </Div>
          </Grid>
          <Grid width="auto"></Grid>
        </Grid>
      </ReviewItem>
    </React.Fragment>
  );
};

const ReviewItem = styled.div`
  height: 100px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  display: flex;
  margin: auto 3% 5% auto;
  cursor: pointer;

  @media only screen and (max-width:500px) {
    width:230px;
    height:80px
  }
`;

const Div = styled.div`
  width:90%;
  height:100%;
  overflow: auto;
`;

ReviewList.defaultProps = {
  _id: "60ecfdc2891b59786536a160",
  image:
    "https://i.pinimg.com/originals/18/6a/a3/186aa3d8c6be02a6789f0dda5c2d1806.png",
  shopId: "60ecfdc2891b59786536a160",
  menuId: "60ecfdc2891b59786536a160",
  userId: "60ecfdc2891b59786536a160",
  orderId: "60ecfdc2891b59786536a160",
  reviewDate: "Tue Jul 13 2021 02:43:14 GMT+0000 (Coordinated Universal Time)",
  content: "정말 최고의 맛입니다",
  star: 4,
};

export default ReviewList;
