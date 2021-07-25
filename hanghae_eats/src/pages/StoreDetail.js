import React from "react";
import styled from "styled-components";
import StoreDetailInfo from "../components/StoreDetailInfo";
import ReviewList from "../components/ReviewList";
import Menu from "../components/Menu";

import { Button, Grid, Text } from "../elements";

import { useDispatch, useSelector } from "react-redux";
import { getMenuDB } from "../redux/modules/store";

import { ttlPrice } from "../redux/modules/cart";
import { history } from "../redux/configStore";

//자세히 모달창 패키지
import Modal from "react-awesome-modal";
import { useMediaQuery} from "@material-ui/core";

const StoreDetail = (props) => {
  const dispatch = useDispatch();
  const storeId = history.location.pathname.split("/")[2];
  const menu_list = useSelector((state) => state.stores.menus);
  const cart_list = useSelector((state) => state.cart.carts);
  const _review_list = useSelector((state) => state.review.list);

  //로드
  React.useEffect(() => {
    dispatch(getMenuDB(storeId));
  }, []);

  //현재 카트에 총 합
  let ttl_price = 0;
  for (let i = 0; i < cart_list.length; i++) {
    let price = cart_list[i].countPrice;
    ttl_price += price;
  }

  //주문하기 버튼
  const orderBtn = () => {
    ttl_price < 15000
      ? window.alert("최소 주문 금액은 15,000원 입니다!")
      : history.replace("/cart");
    dispatch(ttlPrice(ttl_price));
  };

  //리뷰 페이지로 이동
  const gotoReview = () => {
    history.push(`/reviews/${storeId}`);
  };

  const reviewList = _review_list.length > 0

  //모달창
  const [visible, setVisible] = React.useState();
  const showModal = () => {
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
  };
  const is_mobile = useMediaQuery("(max-width: 500px)");

  return (
    <React.Fragment>
      <Grid>
      {/* 매장 정보 */}
      {/* //props로 받아오기 자식 페이지에 */}
        <StoreDetailInfo />
        <Grid is_flex margin="5% 0%;" width="25vmin;">
          <Grid width="8vmin;" margin="0px" m_width="25%">
            <Text margin="10% 0%">배달비</Text>
            <Text>최소주문</Text>
          </Grid>
          <Grid width="15vmin;" margin="0px">
            <Text margin="5% 0%" m_margin="0%">2,000원
            {/* 모달창 */}
            {is_mobile &&
            <React.Fragment>
              <Detail onClick={showModal}> 자세히 </Detail>
              <Modal visible={visible} width="70%" height="250px" effect="fadeInDown" onClickAway={closeModal}>
                <Grid>
                  <Grid align="center" height="auto" margin="5% auto" m_height="30px">
                    <Text>배달비 안내</Text>
                  </Grid>
                  <Grid is_flex height="auto" m_height="20px">
                    <Text>주문금액</Text>
                    <Text>배달비</Text>
                  </Grid>
                  <hr style={{color:"#e2e2e2", width:"90%"}}/>
                  <Grid is_flex height="auto" m_height="20px">
                    <Text>5만원 ~</Text>
                    <Text>무료</Text>
                  </Grid>
                </Grid>
              </Modal>
            </React.Fragment>
            }
            {/* 최소주문 금액 위에서 is_flex 중 */}
            </Text>
            <Text>15,000원</Text>
          </Grid>
        </Grid>
        {/* 리뷰 맵돌리기 */}
        <Grid is_flex>
            <MenuList>
              {reviewList && _review_list.map((r, idx) => {
                return <ReviewList key={idx} {...r} />;
              })}
            </MenuList>
          {/* 리뷰 더보기 버튼 */}
          <Grid
            border="1px solid gray"
            padding="10px"
            width="15%"
            height="30px"
            margin="0px 0px 5% auto"
            border_radius="5px"
            m_width="19%">
            <Button _onClick={gotoReview} bg={'white'} margin="0px auto;">
              <Text margin="0px auto;" cursor bold>></Text>
            </Button>
          </Grid>
        </Grid>
        <hr/>
        {/* 메뉴 맵돌리기 */}
        {menu_list.map((m, idx) => {
          return <Menu key={m._id} {...m}/>
        })}
        <Grid height="50px;" margin="5% 0% 0% 0%;" m_height="30px">
          <Button _onClick={orderBtn}>
            <Grid is_flex>
              <Grid width="10vmin" m_width="80%"></Grid>
              <Grid is_flex width="15vmin" m_width="90%">
                <Counting>
                  <Text bold color={'#50A0FF'}>{cart_list.length}</Text>
                </Counting>
                <Text size="18px" bold color={'white'} m_margin="auto auto auto 2%">카트 보기</Text>
              </Grid>
              <TtlPrice>
                <Text size="18px" bold color={'white'}>{ttl_price}원</Text>
              </TtlPrice>
            </Grid>
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const Detail = styled.span`
  width: 5vmin;
  font-size: 1rem;
  color: gray;
`;

const TtlPrice = styled.div`
  width: 30vmin;
  align-items: center;

  @media only screen and (max-width:500px) {
    width: 50%
  }
`;

const Counting = styled.div`
  width: 4vmin;
  height: 4vmin;
  border-radius: 50%;
  background-color: white;
  color: transparent;
  line-height: 4.3vmin;

  @media only screen and (max-width:500px) {
    width: 6vmin;
    height: 6vmin;
    line-height: 6.3vmin ;
  }
`;

const MenuList = styled.div`
  overflow-x: scroll;
  display: flex;
  justify-content: space-between;
`;
export default StoreDetail;
