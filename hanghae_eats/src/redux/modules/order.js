// //import
import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

// 전역 > 서버 배포 
import instance from './instance';

//axios
export const addOrderDB = (menuId, count) => {
  return function (dispatch, getState, {history}) {
    instance
      .post(`/api/order`, {menuId: menuId, count:count})
      .then((res) => {

      })
      .catch((err) => {
        
      })
  }
}

//initialState
const initialState = {
  order: [],
}

//리덕스
const order = createSlice({
  name: "order",
  initialState,
  reducers: {
   //주문하기
    addOrder: (state, action) => {

    },
  }
});

export const {addOrder} = order.actions;

export default order;
