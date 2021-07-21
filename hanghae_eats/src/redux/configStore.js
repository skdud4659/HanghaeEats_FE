import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import thunk from "redux-thunk";
import favorite from "./modules/favorite";
import order from "./modules/order";
import review from "./modules/review";
import user from "./modules/user";
import stores from "./modules/store";
import cart from './modules/cart'

export const history = createBrowserHistory();

const middlewares = [
  thunk.withExtraArgument({
    history,
  }),
];

const env = process.env.NODE_ENV;

if (env === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}

const reducer = combineReducers({
  user: user.reducer,
  favorite: favorite.reducer,
  order: order.reducer,
  review: review,
  stores: stores.reducer,
  cart: cart.reducer,
  router: connectRouter(history),
});

let store = configureStore({ reducer, middleware: middlewares });

export default store;