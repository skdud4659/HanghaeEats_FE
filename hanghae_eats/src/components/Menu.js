import React from 'react';
import {Grid, Text, Image, Button} from '../elements';
import styled from 'styled-components';

import {useDispatch, useSelector} from 'react-redux';
import {addCart} from '../redux/modules/order';

const Menu = (props) => {
  const dispatch = useDispatch();
  const {_id, storeId, name, price, image} = props
  const cart_list = useSelector((state) => state.order.cart)

  // 메뉴 사진 누르면 카트에 담기 버튼 활성화
  const [display, setDisplay] = React.useState(false);
  const activeCartBtn = () => {
    setDisplay((prev) => !prev);
  }

  //카트에 담기 + 다른 매장인 경우 주문 불가
  const addCartBtn = () => {
    //카트가 비었을 경우 그냥 담기
    console.log(cart_list)
    if (cart_list.length === 0) {
      dispatch(addCart({_id, storeId, name, price}))
    } else {
       //카트에 리스트가 있을 경우 아이디값 대조하여 return
      if(storeId !== cart_list[0].storeId) {
        window.alert('동일한 매장에서만 주문이 가능해요!')
      } else {
        dispatch(addCart({_id, storeId, name, price}))
      }
    }
  }

  return (
    <React.Fragment>
      <Grid is_flex _onClick={activeCartBtn}>
        {/* 좌측 */}
        <Grid is_flex width="80%">
          <Grid align="left">
            {/* 메뉴 이름 */}
            <Grid margin="3% 0%">
              <Text bold size="25px">{props.name}</Text>
            </Grid>
            {/* 가격 */}
            <Grid margin="3% 0%">
              <Text >{props.price}원</Text>
            </Grid>
          </Grid>
          {/* 중간 - 메뉴 사진 */}
          <Grid width="50%" height="150px">
            <Image is_slide src={props.image}/>
          </Grid>
        </Grid>  
      </Grid>
      {/* 장바구니 버튼 활성화 */}
      {display && (
        <Grid height="50px;" margin="5% 0% 0% 0%;">
          <Button _onClick={addCartBtn}>
            <Text size="18px" bold color={"white"}>카트에 담기</Text>
          </Button>
        </Grid>
      )}
    </React.Fragment>
  );
}

Menu.defaultProps = {
  _id : "60f23b2a7686d334ff5cd298",
  storeId :"60f1d842fed5f51e64329954",
  name : "뿌링클",
  price : 17000,
  image : "http://www.bhc.co.kr//upload/bhc/menu//BB(0).jpg",
}

export default Menu;