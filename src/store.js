import allReducers from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

//const initialState = {};

const store = configureStore({
  reducer: allReducers,
});


export default store;
