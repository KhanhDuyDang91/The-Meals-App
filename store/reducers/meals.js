import { MEALS } from "../../data/dummy-data";
import { createSlice } from "@reduxjs/toolkit";

export const mealSlice = createSlice({
  name: "meal",
  initialState: {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
  },
  reducers: {},
});

export default mealSlice.reducer;
