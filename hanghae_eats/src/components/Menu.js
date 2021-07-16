import React from 'react';
import {Grid, Text, Image, Button} from '../elements';

//장바구니 추가 아이콘
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = (props) => {
  const {name, price, image} = props

  return (
    <React.Fragment>
      <Grid is_flex>
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
          {/* 우측 추가 아이콘 */}
          <Grid width="auto">
            <Button bg="white">
              <FontAwesomeIcon icon={faPlusCircle} size="4x"/>
            </Button>
          </Grid>
      </Grid>
    </React.Fragment>
  );
}

Menu.defaultProps = {
  name: "뿌링클",
  price: 17000,
  image: "http://www.bhc.co.kr//upload/bhc/menu//BB(0).jpg"
}

export default Menu;