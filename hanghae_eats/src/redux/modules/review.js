import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "../../shared/Cookie";
import instance from "./instance";

//action
const ADD_RIVEW = "reivew/ADD_REVIEW";

//action creator
const addReview = createAction(ADD_RIVEW, (review) => ({ review }));

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
const addReviewDB = (content, star) => {
  return function (dispatch, getState, { history }) {
    instance
      .post("/api/review", { content: content, star: star })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        window.alert("리뷰 작성에 오류가 있어요! 관리자에게 문의해주세요.");
        console.log(err);
      });
  };
};

//handleActions

export default handleActions({
    [ADD_RIVEW]: (state, action) => produce(state, (draft) => {
        draft.list.unshift(action.payload.review);
    })
}, initialState);

export const actionCreators = {
    addReview,
    addReviewDB,
};


