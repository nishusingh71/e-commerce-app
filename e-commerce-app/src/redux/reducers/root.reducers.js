import { combineReducers } from "@reduxjs/toolkit";

import { productReducer } from "./product.reducers";
import { categoryReducer } from "./category.reducers";
import { userReducer } from "./user.reducers";
export const rootReducers = combineReducers({
  category: categoryReducer,
  product: productReducer,
  user: userReducer,
});
