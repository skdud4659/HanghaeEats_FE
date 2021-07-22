//configStore의 store와 변수명이 같아서 state 사용할 때 stores임!

// //import
import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

//전역 > 서버 배포
import instance from './instance';

import {getAllLikeDB} from './favorite';
import {actionCreators as reviewAction} from './review';

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
        dispatch(getAllLikeDB())
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

//페이지네이션
export const getStorePageDB = page => {
  return function (dispatch, getState, {history}) {
    instance
      .get(`/api/store/all/${page}`)
      .then((res) => {
        dispatch(getStorePage(res.data.stores))
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
        dispatch(reviewAction.getReviewDB(storeId))
      })
      .catch((err) => {
        window.alert('매장 정보를 가져오는데 오류가 발생했어요! 관리자에게 문의해주세요.')
        console.log(err)
      })
  }
}

//검색한 매장 가져오기
export const searchStoreDB = (word) => {
  return function (dispatch, getState, {history}) {
    instance
      .get(`/api/store/search?q=${word}`)
      .then((res) => {
        dispatch(searchStore(res.data.searchList))
      })
      .catch((err) => {
        window.alert('검색어가 존재하지 않습니다.')
        history.push('/')
        console.log(err)
      })
  }
}

//initialState
const initialState = {
  //모든 매장
  stores: [],
  //모든 메뉴
  menus: [],
  //하나의 매장(상세)
  store:[],
  //검색 여부
  is_search: false,
  //검색 매장
  search_list: [],
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
    },

    //매장 페이지네이션
    getStorePage: (state, action) => {
      state.stores = action.payload
    },

    //매장 검색
    searchStore: (state, action) => {
      state.search_list = action.payload
      state.is_search = true
    }
  }
});

export const {getStores, getMenus, getOneStore, getAllStore, getStorePage, searchStore} = store.actions;

export default store;