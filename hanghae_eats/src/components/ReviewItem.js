import React from "react";
import { Grid, Text, Image, Button } from "../elements";
import BeautyStars from "beauty-stars";
import styled from "styled-components";
import logo from "../shared/logo.PNG";
import ReviewMenuItem from "./ReviewMenuItem";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as reviewActions } from "../redux/modules/review";
import { history } from "../redux/configStore";

//이모지
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";

//삭제 아이콘
import { BsTrashFill } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";

const ReviewItem = (props) => {
  const dispatch = useDispatch();

  const nickname = useSelector((state) => state.user.user_info);
  const reviewMenu = props._id;
  const menuInfo = props.menuIdList;

  //삭제 버튼
  const deleteBtn = () => {
    dispatch(reviewActions.deleteReviewDB(props._id));
  };

  //수정 페이지로 이동
  const reviewBtn = () => {
    history.push(`/reviewEdit/${reviewMenu}`);
  };

  //추천 버튼(각각 2개) - 색괄호 {} -> () 사용해야 적용됨.
  const [chgLike, setChgLike] = React.useState("#9c9c9c"); //기본색깔
  const chgLikeColorBtn = () => {
    setChgLike(() => ("#50A0FF"))
  };

  const [chgDisLike, setChgDisLike] = React.useState("#9c9c9c");
  const chgDisLikeColorBtn = () => {
    setChgDisLike(() => ("#50A0FF"))
  };

  return (
    <React.Fragment>
      <Wrap>
        <Grid is_flex >
            <Text size="18px" bold width="70%">
              {nickname}
            </Text>
          {/* 수정, 삭제 버튼 */}
          <Grid is_flex width="30%" margin="8px">
            <Text _onClick={reviewBtn} size="15px">
              <BiEditAlt /> 수정
            </Text>
            <Text _onClick={deleteBtn} size="15px">
              <BsTrashFill />
              삭제
            </Text>
          </Grid>
        </Grid>

        <Grid margin="1% 0% 0% 0%" padding="10px 0px">
          {/* 별점 데이터 > value에 데이터 넣으면 됨! */}
          <BeautyStars value={props.star} size="13px" activeColor={"#f7d57f"} />
        </Grid>
        {/* 우선은 사진업로드 없읍!! 임의로 내 마음에 드는 사진 ㅎㅎㅎ */}
        <Image height="400px" src={logo} />
        {/* 리뷰 내용 */}
        <Grid margin="2% 0px" padding="10px 0px">
          <Text size="18px">{props.content}</Text>
        </Grid>
        {/* 주문메뉴 */}
        <Grid is_flex>
          <Text width="30%" color={"#9c9c9c"}>
            주문메뉴
          </Text>
          {/* 메뉴아이디 있을때만 map사용 */}
          {menuInfo.map((m, idx) => {
            return (
              <Grid width="30%" is_flex >
                <ReviewMenuItem key={m.menuId} {...m} />
              </Grid>
            );
          })}
          <Grid></Grid>
        </Grid>

        {/* 리뷰가 도움이 되었나요? > 여기 버튼은 그냥 클릭하면 색만 변하도록!!! > useState를 사용하면 가능해요!*/}
        
        <Grid margin="2% 0px">
          <Text size="15px">리뷰가 도움이 되었나요?</Text>
          <Grid is_flex margin="1% 0px">
            {/* 돼요! */}
            <Grid
              width="40vmin"
              border="1px solid #9c9c9c"
              align="center"
              padding="1.5%"
              border_radius="10px"
            >
              <Text 
              color={chgLike} 
              _onClick={chgLikeColorBtn}
              >
                <FaRegThumbsUp
                /> 도움이 돼요
              </Text>
            </Grid>
            {/* 안돼요!. */}
            <Grid
              width="40vmin"
              border="1px solid #9c9c9c"
              align="center"
              padding="1.5%"
              border_radius="10px"
            >
              <Text 
              color={chgDisLike}
              _onClick={chgDisLikeColorBtn}
              >
                <FaRegThumbsDown /> 도움이 안돼요
              </Text>
            </Grid>
          </Grid>
        </Grid>

        <hr style={{ border: "1px solid #E5E5E5" }} />
      </Wrap>
    </React.Fragment>
  );
};

const Wrap = styled.div`
  margin: 5% auto;
`;

export default ReviewItem;
