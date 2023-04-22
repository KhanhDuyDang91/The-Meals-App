import { MEALS } from "../../data/dummy-data";
import { createSlice } from "@reduxjs/toolkit";

export const mealSlice = createSlice({
  name: "meal",
  initialState: {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
  },
  reducers: {
    toggleFavoriteeee: (state, action) => {
      const { mealId } = action.payload;
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.payload
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        console.log("Removed!");
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const meal = state.meals.find((meal) => meal.id === action.payload);
        console.log("Added!");
        return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) };
      }
      /* const { mealId } = action.payload;
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.payload
      );
      if (existingIndex >= 0) {
        console.log("Yes");
      } else {
        console.log("No");
      }
      console.log(existingIndex); */
    },
  },
});

export const { toggleFavoriteeee } = mealSlice.actions;

export default mealSlice.reducer;
