import React from 'react';
import styled from 'styled-components';
import {Grid, Text} from '../elements';

import OrderList from '../components/OrderList';

const Order = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <P>주문 내역</P>
      </Grid>
      {/* 주문 내역 맵돌리기*/}
      <OrderList />
    </React.Fragment>
  );
}

const P = styled.p`
  border-bottom: 4px solid black;
  font-size: 30px;
  font-weight: bold;
  padding-bottom: 20px;
`;

export default Order;