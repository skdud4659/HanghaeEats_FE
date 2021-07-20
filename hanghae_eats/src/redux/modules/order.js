// //import
import { createSlice } from "@reduxjs/toolkit";

// 전역 > 서버 배포 
import instance from "./instance";

//axios
export const OrderDB = (storeId, menu_list) => {
  return function (dispatch, getState, {history}) {
    instance
      .post("/api/order", {storeId: storeId, menus:menu_list})
      .then((res) => {
        window.alert('주문이 완료되었어요! 주문은 항해이츠가 쏜다-!')
        dispatch(addOrder({storeId, menu_list}))
        history.push('/')
      })
      .catch((err) => {
        window.alert('주문에 오류가 있어요! 관리자에게 문의해주세요!')
        console.log(err)
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
      const storeId = action.payload.storeId;
      const menu_list = action.payload.menu_list; 
      state.order = {storeId, menu_list}
    },
  }
});

export const {addOrder} = order.actions;

export default order;
