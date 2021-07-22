import React from "react";
import { Grid, Text, Button } from "../elements";

import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as reviewActions } from "../redux/modules/review";
import Menu from "../components/Menu";

//이모지
import { FaShoppingBasket, FaRegEdit } from "react-icons/fa";
import BeautyStars from "beauty-stars";

//수정도 한 페이지에서!
const ReviewWrite = (props) => {
  const dispatch = useDispatch();
  const { history } = props;

  //useEffect

  //매장 이름 가져오기
  const storeInfo = useSelector((state) => state.order.order);
  const _orderId = history.location.pathname.split("/")[2];

  let _storeId= storeInfo.findIndex((r) => r._id === _orderId); //인덱스

  const store_name = storeInfo[_storeId].storeId.name;
  console.log(storeInfo[_storeId]);

  //메뉴 가져오기 
  const menu_name = storeInfo[_storeId].menus; //맵은 배열로 돌린다.
  console.log(menu_name);


  //리뷰 콘텐츠
  const [content, setContent] = React.useState();
  const orderId = props.match.params.orderId;
  const input_content = (e) => {
    setContent(e.target.value);
  };

  //별점
  const [chgRate, setChgRate] = React.useState();
  const chgStar = (value) => {
    setChgRate(value);
  };

  //작성버튼
  const AddBtn = () => {
    dispatch(reviewActions.addReviewDB(orderId, content, chgRate));
  };

  
  //글쓰기일때
  return (
    <React.Fragment>
      <P>만족도 평가 및 리뷰</P>
      <Grid margin="3% 0px">
        {/* 음식평가 title */}
        <Grid is_flex>
          <Grid width="auto" m_width="auto">
            <FaShoppingBasket
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "#23c8ff",
                color: "white",
                padding: "10px",
              }}
            />
          </Grid>
          <Text margin="0px 0px 0px 10px" width="50%" size="23px" bold m_margin="0px 0px 0px 10px">
            음식 평가
          </Text>
          <Grid></Grid>
        </Grid>

        {/* 매장 이름 > 주문 내역 데이터 끌고와서 표출 */}
        <Grid margin="2% 0px">
          <Text size="18px" margin="0px 0px 1% 0px">
          {store_name}
          </Text>
          {/* 별점 > value값으로 평점 가져오기 */}
          <BeautyStars
            value={chgRate}
            onChange={chgStar}
            size="25px"
            activeColor={"#f7d57f"}
          />
        </Grid>
        {/* 메뉴 > 주문 내역 메뉴 데이터 끌고와서 맵돌리기 */}
        {menu_name.map((m, idx) => {
          return <Grid key={m.menuId} {...m}> {m.name} </Grid>
        })}
        

        {/* 리뷰 작성 title */}
        <Grid is_flex margin="5% 0px 2% 0px">
          <Grid width="auto" m_width="auto">
            <FaRegEdit
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "#23c8ff",
                color: "white",
                padding: "10px",
              }}
            />
          </Grid>
          <Text margin="0px 0px 0px 10px" width="50%" size="23px" bold m_margin="0px 0px 0px 10px">
            리뷰 작성하기
          </Text>
          <Grid></Grid>
        </Grid>
        {/* 작성 textarea */}
        <Grid>
          <Textarea rows={10} onChange={input_content} />
        </Grid>
        {/* 작성하기 버튼 */}
        <Button
          border_radius="7px"
          argin="3% auto"
          width="20%"
          height="40px"
          _onClick={() => {
            AddBtn();
          }}
          m_height="40px"
        >
          <Text color={"white"} bold>
            작성하기
          </Text>
        </Button>
      </Grid>
    </React.Fragment>
  );
};

const P = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  padding-bottom: 20px;
`;

const Textarea = styled.textarea`
  width: 95%;
  padding: 20px;
  font-size: 18px;
  resize: none;
  :focus {
    outline: none;
  }

  @media only screen and (max-width:375px) {
    width: 87%
  }
`;

export default ReviewWrite;
