// //import
import { createSlice } from "@reduxjs/toolkit";

//initialState
const initialState = {
  carts: [],
  price: 0,
  last_price : 0,
}

//리덕스
const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //카트에 담기 > 리덕스에만 담아놨다가 주문하면 order로 이동 예정
    addCart: (state, action) => {
      state.carts.push(action.payload)
      window.alert('메뉴가 추가되었습니다!')
    },

    //1차 카트 결제 금액
    ttlPrice: (state, action) => {
      state.price = action.payload
    },

    //수량에 따른 갯수, 가격 변동
    chgItem: (state, action) => {
      let idx = state.carts.findIndex((c) => c._id === action.payload._id)
      state.carts[idx].count = action.payload.value
      state.carts[idx].countPrice = action.payload.extraPrice
    },

    //카트 삭제
    delCart: (state, action) => {
      let idx = state.carts.findIndex((d) => d.name === action.payload)
      if (idx !== -1) {
        state.carts.splice(idx, 1);
      }
      window.alert('메뉴가 삭제되었습니다!')
    }
  }
});

export const {addCart, ttlPrice, delCart, chgItem} = cart.actions;

export default cart;
