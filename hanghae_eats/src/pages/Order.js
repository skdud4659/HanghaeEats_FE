import React from 'react';
import styled from 'styled-components';
import {Grid, Text} from '../elements';

import OrderList from '../components/OrderList';

import { useDispatch, useSelector } from 'react-redux';
import { getOrderDB } from '../redux/modules/order';
import { getAllStoreDB } from '../redux/modules/store'

const Order = (props) => {
  const dispatch = useDispatch()
  const order_list = useSelector((state) => state.order.order)

  React.useEffect(() => {
    dispatch(getOrderDB())
    dispatch(getAllStoreDB())
  },[])

  return (
    <React.Fragment>
      <Grid>
        <P>주문 내역</P>
      </Grid>
      {/* 주문 내역 맵돌리기*/}
      {order_list.map((o, idx) => {
        return <OrderList key={o._id} {...o}/>
      })}
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