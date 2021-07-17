import React from 'react';
import { Grid, Input, Button, Text, Image } from "../elements";

//삭제 icon
import { HiX } from "react-icons/hi";

const CartMenuList = (props) => {
  const {menu_name, price} = props

  return (
    <React.Fragment>
      <Grid padding="8px 0px">
              <Grid is_flex>
                <Text margin="20px 20px">{menu_name}</Text>
                <Grid width="true" margin="8px 20px">
                  <HiX />
                </Grid>
              </Grid>
              <Grid is_flex>
                <Text margin="20px 20px"> {price}</Text>
                <Grid width="true" margin="20px 20px">
                  <select name="count">
                      <option value="1" >1</option>
                      <option value="2" >2</option>
                      <option value="3" >3</option>
                      <option value="4" >4</option>
                      <option value="5" >5</option>
                      <option value="6" >6</option>
                      <option value="7" >7</option>
                      <option value="8" >8</option>
                      <option value="9" >9</option>
                      <option value="10+">10+</option>
                    </select>
                </Grid>
              </Grid>
      </Grid>
    </React.Fragment>
  );
}

CartMenuList.defaultProps = {
    menu_name : '뿌링클',
    price: 17000,
}

export default CartMenuList;