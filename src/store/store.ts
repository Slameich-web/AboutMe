import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { postApi } from "../services/PostService";
import userReducer from "./reducers/UserSlice";

const rootReducer = combineReducers({
  userReducer,
  [postApi.reducerPath]: postApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultmiddleware) =>
      getDefaultmiddleware().concat(postApi.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
