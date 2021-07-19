//configStore의 store와 변수명이 같아서 state 사용할 때 stores임!

// //import
import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

//전역 > 서버 배포
import instance from './instance';

//axios
//특정 카테고리 매장들 가져오기
export const getStoresDB = (category) => {
  return function (dispatch, getState, {history}) {
    instance
      .get(`/api/store?category=${category}`)
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

//모든 카테고리 매장 가져오기
export const getAllStoreDB = () => {
  return function (dispatch, getState, {history}) {
    instance
      .get('/api/store')
      .then((res) => {
        let stores_list = res.data.stores
        dispatch(getAllStore(stores_list))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

//매장 하나 가져오기
export const getOneStoreDB = (storeID) => {
  return function (dispatch, getState, {history}) {
    instance
      .get(`/api/store/one/${storeID}`)
      .then((res) => {
        let oneStore = res.data.store
        dispatch(getOneStore(oneStore))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

//메뉴 가져오기
export const getMenuDB = (storeId) => {
  return function (dispatch, getState, {history}) {
    instance
      .get(`/api/menu/${storeId}`)
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
  store:[],
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

    //한 매장만 가져오기 액션
    getOneStore: (state, action) => {
      state.store = action.payload
    },
    
    //모든 매장 가져오기 액션
    getAllStore: (state, action) => {
      state.stores = action.payload
    }
  }
});

export const {getStores, getMenus, getOneStore, getAllStore} = store.actions;

export default store;