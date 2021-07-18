// //import
import { createSlice } from "@reduxjs/toolkit";

//initialState
const initialState = {
  cart: [],
  price: 0,
}

//리덕스
const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //카트에 담기 > 리덕스에만 담아놨다가 주문하면 order로 이동 예정
    addCart: (state, action) => {
      state.cart.push(action.payload)
    },

    //총 결제 금액
    ttlPrice: (state, action) => {
      state.price = action.payload
    },
  }
});

export const {addCart, ttlPrice} = cart.actions;

export default cart;
