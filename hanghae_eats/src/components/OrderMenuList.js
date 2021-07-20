import React from 'react';
import {Grid, Text} from '../elements';

const OrderMenuList = (props) => {
  return (
    <React.Fragment>
      <Grid is_flex margin="7% 0%">
        <Grid bg={'#ebebeb'} align="center" width="3%" margin="0px 3% 0px 0px">
          <Text>1</Text>
        </Grid>
        <Grid>
          <Text size="18px">치즈떡볶이</Text>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default OrderMenuList;