//configStore의 store와 변수명이 같아서 state 사용할 때 stores임!

// //import
import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

//전역 > 서버 배포 후 수정
// import instance from './instance';

//axios
//매장 가져오기
export const getStoresDB = (category) => {
  return function (dispatch, getState, {history}) {
    axios
      .get(`http://localhost:3000/data/data.json`)
      .then((res) => {
        let store_list = res.data.stores.filter((each) => {
          return each.category === category
        })
        dispatch(getStores(store_list))
      })
      .catch((err) => {
        window.alert('매장 정보를 가져오는데 오류가 발생했어요! 관리자에게 문의해주세요.')
        console.log(err)
      })
  }
}

//메뉴 가져오기
export const getMenuDB = (storeId) => {
  return function (dispatch, getState, {history}) {
    axios
      .get(`http://localhost:3000/data/data.json`)
      .then((res) => {
        let menu_list = res.data.menus.filter((each) => {
          return each.storeId === storeId
        })
        dispatch(getMenus(menu_list))
      })
      .catch((err) => {
        window.alert('매장 정보를 가져오는데 오류가 발생했어요! 관리자에게 문의해주세요.')
        console.log(err)
      })
  }
}

//initialState
const initialState = {
  stores: [],
  menus: [],
}

//리덕스
const store = createSlice({
  name: "store",
  initialState,
  reducers: {
    //매장 가져오기 액션
    getStores: (state, action) => {
      state.stores = action.payload
    },

    //메뉴 가져오기 액션
    getMenus: (state, action) => {
      state.menus = action.payload
    },
  }
});

export const {getStores, getMenus} = store.actions;

export default store;