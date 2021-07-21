import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "../../shared/Cookie";
import instance from "./instance";

//action
const ADD_REVIEW = "review/ADD_REVIEW";
const GET_REVIEW = "review/GET_REVIEW";

//action creator
const addReview = createAction(ADD_REVIEW, (review) => ({review}));
const getReview = createAction(GET_REVIEW, (storeId) => ({storeId}));

//initialState
const initialState = {
  list: [],
  review: null,
};

const initialReview = {
  user_info: {
    id: 0,
    nickname: "쩝쩝박사",
  },
  content: "맛있네여 !",
  star: 1,
  //별점, 주문내역
};

//리뷰 추가
const addReviewDB = (orderId, content, star) => {
  return function (dispatch, getState, { history }) {
    instance
      .post("/api/review", { orderId: orderId, content: content, star: star })
      .then((res) => {
        dispatch(addReview({content, star}))
        history.push("/"); //위치 적용하기. => 해당 가게로 가기
      })
      .catch((err) => {
        window.alert("리뷰 작성에 오류가 있어요! 관리자에게 문의해주세요.");
        console.log(err);
      });
  };
};

const getReviewDB = (storeId) => {
  return function (dispatch, getState, {history}){
    instance
    .get(`/api/review/${storeId}`)
    .then((res) => {
      let review_list = res.data.review;
      dispatch(getReview(review_list));
    })
    .catch((err) => {
      window.alert("페이지에 오류가 있어요! 관리자에게 문의해주세요.");
      console.log(err);
    })
  }
}

//handleActions

export default handleActions({
    [ADD_REVIEW]: (state, action) => produce(state, (draft) => {
        draft.list.unshift(action.payload.review);
    }),

    [GET_REVIEW]: (state, action) => produce(state, (draft) => {
      draft.list = action.payload.storeId;
    })
}, initialState);

export const actionCreators = {
    addReview,
    addReviewDB,
    getReview,
    getReviewDB,

};
