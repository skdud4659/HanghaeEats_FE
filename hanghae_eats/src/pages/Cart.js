import React from "react";
import styled from "styled-components";
import { Grid, Input, Button, Text, Image } from "../elements";
import { history } from "../redux/configStore";
import CartMenuList from '../components/CartMenuList';

import {useDispatch, useSelector} from 'react-redux';

//치타 이미지
import chita from "../img/chita.jpg";

const Cart = (props) => {
  const dispatch = useDispatch();
  const {address, store_name, _id } = props
  const cart_list = useSelector((state)=> state.cart.cart)
  const store_id = cart_list[0].storeId

  //주문금액
  let ttlPrice = useSelector((state)=> state.cart.price)

  //배달비
  let deliveryPrice = ttlPrice >= 50000 ? 0 : 2000  

  //메뉴추가버튼
  const addMenu = () => {
    history.push(`storeDetail/${store_id}`)
  }

  return (
    <React.Fragment>
        <Grid padding="16px" bg="#E5E5E5">
          {/* 상단 */}
          <Grid padding="16px 0px" bg="#ffffff">
            <Text margin="20px 20px" bold>
              집(으)로 배달
            </Text>
            <Text margin="20px 20px" size="15">
              {/* TODO 나중에 주소 입력하는 부분을 따로 만들 수 있을까? */}
              {props.user.address}
            </Text>
          </Grid>
          {/* 레이아웃 */}
          <Grid height="1vw" bg="#E5E5E5" />
          {/* 중간 */}
          <Grid padding="8px 0px" bg="#ffffff">
            <Grid is_flex>
              <Text width="auto" margin="20px 20px" bold>
                {props.order.store_name}
              </Text>
              <Image
                is_slide
                width="10%"
                height="30px"
                margin="8px"
                src={chita}
              />
            </Grid>
            <hr style={{ border: "1px solid #E5E5E5" }} />
            {/* 메뉴 맵돌리기 */}
            {cart_list.map((c, idx) => {
              return  <CartMenuList key={c._id} {...c}/>
            })}
            <hr style={{ border: "1px solid #E5E5E5" }}/>
            <Grid align="center" padding="25px 0px">
                <Button bg={'white'} _onClick={addMenu}>
                  <Text bold color="#50A0FF">
                    + 메뉴추가
                  </Text>
                </Button>
            </Grid>
            {/* 레이아웃 */}
            <Grid height="1vw" bg="#E5E5E5" />
            {/* 하단 */}
            <Grid padding="8px 0px 0px 0px" bg="#ffffff">
              <Grid is_flex>
                <Text margin="20px 20px"> 주문금액 </Text>
                <Text margin="20px 20px"> {ttlPrice}원 </Text>
              </Grid>

              <Grid is_flex>
                <Text margin="20px 20px"> 배달비 </Text>
                <Text margin="20px 20px"> + {deliveryPrice}원 </Text>
              </Grid>

              <hr style={{ border: "1px solid #E5E5E5" }} />

              <Grid is_flex padding="15px 0px">
                <Text margin="4px 20px" bold> 총 결제금액 </Text>
                <Text margin="4px 20px" bold size="20px"> 총 {ttlPrice + deliveryPrice}원 </Text>
              </Grid>
            </Grid>
          </Grid>
          <Button height="70px"> 
            <Text color="#ffffff" bold> 결제하기 </Text> 
          </Button>
        </Grid>
    </React.Fragment>
  );
};

const SelectBox = styled.div`
  margin : 8px 20px;
`;

Cart.defaultProps = {
  user : {
    address : "서울특별시 영등포구"
  },
  order : {
    store_name : "bhc",
    _id : "60f1d842fed5f51e64329954",
  }
}

export default Cart;
