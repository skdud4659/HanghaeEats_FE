import React, { useMemo } from 'react';
import { Grid, Text } from "../elements";
import {useSelector} from 'react-redux';
//삭제 icon
import { HiX } from "react-icons/hi";
import { faRProject } from '@fortawesome/free-brands-svg-icons';
//셀렉트박스
import Select from "react-select";

const CartMenuList = (props) => {
  const {name, countPrice, count} = props

  //셀렉트박스
  //useMemo = 연산값 재사용하기(성능 최적화)
  const options = useMemo(
    () => [
      { value: 1, label: 1 },
      { value: 2, label: 2 },
      { value: 3, label: 3 },
      { value: 4, label: 4 },
      { value: 5, label: 5 },
      { value: 6, label: 6 },
      { value: 7, label: 7 },
      { value: 8, label: 8 },
      { value: 9, label: 9 },
      { value: 10, label: 10 },
    ]
  )

  //가격 관련
  //수량 변경에 따른 메뉴 하나의 가격 변경
 

  return (
    <React.Fragment>
      <Grid padding="8px 0px">
              <Grid is_flex>
                <Text margin="20px 20px">{name}</Text>
                <Grid width="true" margin="8px 20px">
                  <HiX />
                </Grid>
              </Grid>
              <Grid is_flex>
                <Text margin="20px 20px"> {countPrice}</Text>
                <Grid width="true" margin="20px 20px">
                  <Select options={options} defaultValue={options[count-1]}/>
                </Grid>
              </Grid>
      </Grid>
    </React.Fragment>
  );
}

CartMenuList.defaultProps = {
    name : '뿌링클',
    price: 17000,
}

export default CartMenuList;