// //import
import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

//전역 > 서버 배포
import instance from './instance';

//axios
//즐겨찾기 선택
export const likeToggleDB = (storeId) => {
  return function (dispatch, getState, {history}) {
    instance
      .post('/api/user/like-a-store', {storeId})
      .then((res) => {
        dispatch(likeToggle())
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

//내가 즐겨찾기 한 가게인지 확인하기
export const getLikeDB = (storeId) => {
  return function (dispatch, getState, {history}) {
    instance
      .get(`/api/user/like-stores/${storeId}`)
      .then((res) => {
        dispatch(getLike(res.data.liked))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

//즐겨찾기 해제
export const unlikeToggleDB = (storeId) => {
  return function (dispatch, getState, {history}) {
    instance
      .post('/api/user/unlike-a-store', {storeId})
      .then((res) => {
        dispatch(unlikeToggle())
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

//즐겨찾기 가져오기
export const getAllLikeDB = () => {
  return function (dispatch, getState, {history}) {
    instance
      .get('/api/user/like-stores')
      .then((res) => {
        dispatch(getAllLike(res.data.stores))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

const initialState = {
  favorite_list:[],
  is_like :false,
}

const favorite = createSlice({
  name:"favorite",
  initialState,
  reducers:{
    likeToggle: (state, action) => {
      state.is_like = true
    },
    getLike: (state, action) => {
      state.is_like = action.payload
    },
    unlikeToggle: (state, action) => {
      state.is_like = false
    },
    getAllLike: (state, action) => {
      state.favorite_list = action.payload
    }
  }
})

export const {likeToggle, getLike, unlikeToggle, getAllLike} = favorite.actions;

export default favorite