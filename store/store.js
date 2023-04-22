import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import mealReducer from "./reducers/meals";
import logger from "redux-logger";

export default configureStore({
  reducer: {
    meals: mealReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
