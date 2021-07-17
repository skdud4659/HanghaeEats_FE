import React from "react";
import styled from "styled-components";
import { Grid, Input, Button, Text, Image } from "../elements";
import { history } from "../redux/configStore";
import CartMenuList from '../components/CartMenuList';

//치타 이미지
import chita from "../img/chita.jpg";

const Cart = (props) => {
  const {address, store_name, ttl_price, delivery } = props

  return (
    <React.Fragment>
        <Grid padding="16px" bg="#E5E5E5">
          {/* 상단 */}
          <Grid padding="16px 0px" bg="#ffffff">
            <Text margin="20px 20px" bold>
              집(으)로 배달
            </Text>
            <Text margin="20px 20px" size="15">
              {props.user.address}
            </Text>
          </Grid>
          {/* 레이아웃 */}
          <Grid height="1vw" bg="#E5E5E5" />
          {/* 중간 */}
          <Grid padding="8px 0px" bg="#ffffff">
            <Grid is_flex>
              <Text width="auto" margin="20px 20px" bold>
                {props.store.store_name}
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
            <CartMenuList />
            <hr style={{ border: "1px solid #E5E5E5" }}/>
            <Grid align="center" padding="25px 0px">
                <Button bg={'white'}>
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
                <Text margin="20px 20px"> {props.store.ttl_price}원 </Text>
              </Grid>

              <Grid is_flex>
                <Text margin="20px 20px"> 배달비 </Text>
                <Text margin="20px 20px"> + {props.store.delive}원 </Text>
              </Grid>

              <hr style={{ border: "1px solid #E5E5E5" }} />

              <Grid is_flex padding="15px 0px">
                <Text margin="4px 20px" bold> 총 결제금액 </Text>
                <Text margin="4px 20px" bold size="20px"> 총 {props.store.ttl_price}원 </Text>
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
  store : {
    store_name : "bhc",
    ttl_price : 17000,
    delivery : 2000
  }
}

export default Cart;
