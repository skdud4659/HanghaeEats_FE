import React from "react";
import { Grid, Button, Text, Image } from "../elements";
import { history } from "../redux/configStore";
import CartMenuList from '../components/CartMenuList';

import {useDispatch, useSelector} from 'react-redux';

//치타 이미지
import chita from "../img/chita.jpg";
import { OrderDB } from "../redux/modules/order";

const Cart = (props) => {
  const dispatch = useDispatch();
  const {address, store_name, _id } = props
  const cart_list = useSelector((state)=> state.cart.carts)
  const store_id = cart_list[0].storeId

  //주문금액
  let _price = 0;
  for(let i=0; i<cart_list.length; i++) {
    let price = cart_list[i].countPrice
    _price+=price
  }

  //배달비
  let deliveryPrice = _price >= 50000 ? 0 : 2000  

  //메뉴추가버튼
  const addMenu = () => {
    history.push(`storeDetail/${store_id}`)
  }

  //주문하기 버튼
  const orderBtn = () => {
    let menu_list = []
    for(let i=0; i<cart_list.length; i++) {
      let menuId = cart_list[i]._id
      let count = cart_list[i].count
      menu_list.push({menuId, count})
    }
    dispatch(OrderDB(store_id, menu_list))
  }

  return (
    <React.Fragment>
        <Grid padding="16px" bg="#E5E5E5">
          {/* 상단 */}
          <Grid padding="16px 0px" bg="#ffffff">
            <Text margin="20px 20px" bold>
              내 마음속(으)로 배달
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
                width="15%"
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
                <Text margin="20px 20px"> {_price}원 </Text>
              </Grid>

              <Grid is_flex>
                <Text margin="20px 20px"> 배달비 </Text>
                <Text margin="20px 20px"> + {deliveryPrice}원 </Text>
              </Grid>

              <hr style={{ border: "1px solid #E5E5E5" }} />

              <Grid is_flex padding="15px 0px">
                <Text margin="4px 20px" bold> 총 결제금액 </Text>
                <Text margin="4px 20px" bold size="20px"> 총 {_price + deliveryPrice}원 </Text>
              </Grid>
            </Grid>
          </Grid>
          <Button height="70px" _onClick={orderBtn}> 
            <Text color="#ffffff" bold> 결제하기 </Text> 
          </Button>
        </Grid>
    </React.Fragment>
  );
};

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
