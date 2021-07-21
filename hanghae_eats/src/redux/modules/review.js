import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { createSlice } from "@reduxjs/toolkit";
import { getCookie } from "../../shared/Cookie";
import instance from "./instance";

//action
const ADD_REVIEW = "review/ADD_REVIEW";
const GET_REVIEW = "review/GET_REVIEW";
const DELETE_REVIEW = "review/DELETE_REVIEW";
const UPDATE_REVIEW = "review/UPDATE_REVIEW";

//action creator
const addReview = createAction(ADD_REVIEW, (review) => ({ review }));
const getReview = createAction(GET_REVIEW, (storeId) => ({ storeId }));
const deleteReview = createAction(DELETE_REVIEW, (review) => ({ review }));
const updateReview = createAction(UPDATE_REVIEW, (reviewId) => ({ reviewId }));

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
        dispatch(addReview({ content, star })); //양식 확인
        history.push("/"); //위치 적용하기. => 해당 가게로 가기
      })
      .catch((err) => {
        window.alert("리뷰 작성에 오류가 있어요! 관리자에게 문의해주세요.");
        console.log(err);
      });
  };
};

const getReviewDB = (storeId) => {
  return function (dispatch, getState, { history }) {
    instance
      .get(`/api/review/${storeId}`)
      .then((res) => {
        let review_list = res.data.review;
        dispatch(getReview(review_list));
      })
      .catch((err) => {
        window.alert("페이지에 오류가 있어요! 관리자에게 문의해주세요.");
        console.log(err);
      });
  };
};

//orderId가져와보기! payload._id
const deleteReviewDB = (reviewId) => {
  console.log(reviewId);
  return function (dispatch, getState, { history }) {
    instance
      .delete(`/api/review/${reviewId}`)
      .then((res) => {
        dispatch(deleteReview(reviewId));
        window.alert("리뷰가 삭제되었습니다.");
      })
      .catch((err) => {
        window.alert(
          "리뷰 삭제에 오류가 있어요! 관리자에게 문의 부탁드립니다."
        );
        console.log("err");
      });
  };
};

const updateReviewDB = (reviewId, content, star) => {
  return function (dispatch, getState, { history }) {
    instance
      .put(`/api/review/${reviewId}`, {content: content, star: star})
      .then((res) => {
        console.log(res);
        window.alert("수정완료!");
        history.replace("/");
      })
      .catch((err) => {
        window.alert("리뷰 수정에 오류가 있어요! 관리자에게 문의 해주세요.");
        console.log(err);
      });
  };
};

//handleActions

export default handleActions(
  {
    [ADD_REVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.list.unshift(action.payload.review);
      }),

    [GET_REVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.list = action.payload.storeId;
      }),

    [DELETE_REVIEW]: (state, action) =>
      produce(state, (draft) => {
        //리듀서에서 리덕스에 남아있는 인덱스값 지우기, splice 사용!
        console.log(action.payload.review); //지우고픈 리뷰의 아이디
        let idx = draft.list.findIndex((r) => r._id === action.payload.review);
        draft.list.splice(idx, 1); //조건에 만족하는 idx를 갖고있는 1개를 지워라
      }),

    [UPDATE_REVIEW]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

export const actionCreators = {
  addReview,
  addReviewDB,
  getReview,
  getReviewDB,
  deleteReview,
  deleteReviewDB,
  updateReview,
  updateReviewDB,
};
