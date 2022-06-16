import { createStore, combineReducers } from "redux";
import { userReducer } from "./userReducers";
import { productsReducer } from "./productReducers";
import { cartReducers } from "./cartReducers";

const reducers = combineReducers({
  userMain: userReducer,
  cartMain: cartReducers,
  productsMain: productsReducer
})

export const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)