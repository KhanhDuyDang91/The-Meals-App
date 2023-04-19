import { configureStore } from "@reduxjs/toolkit";
import mealReducer from "./reducers/meals";

export default configureStore({
  reducer: {
    meals: mealReducer,
  },
});
