// //import
import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

//전역 > 서버 배포 후 수정
// import instance from './instance';

//axios

//initialState
const initialState = {
  cart: [],
  order: [],
}

//리덕스
const order = createSlice({
  name: "order",
  initialState,
  reducers: {
    //카트에 담기 > 리덕스에만 담아놨다가 주문하면 order로 이동 예정
    addCart: (state, action) => {
      state.cart.push(action.payload)
    },

    //주문하기
    addOrder: (state, action) => {

    },
  }
});

export const {addCart, addOrder} = order.actions;

export default order;
