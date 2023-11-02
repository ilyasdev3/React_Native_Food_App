import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./auth/auth.slice";
import productSlice from "./product/product.slice";

//redcuers

export const rootReducer = combineReducers({
  authReducer: authSlice,
  productReducer: productSlice,
});
