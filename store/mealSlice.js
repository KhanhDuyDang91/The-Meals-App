import { MEALS } from "../data/dummy-data";
import { createSlice } from "@reduxjs/toolkit";

export const mealSlice = createSlice({
  name: "meal",
  initialState: {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
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
    },
    setFilter: (state, action) => {
      const appliedFilter = action.payload;
      const updatedFilteredMeals = state.meals.filter((meal) => {
        if (appliedFilter.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilter.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilter.vegetarian && !meal.isVegatarian) {
          return false;
        }
        if (appliedFilter.vegan && !meal.isVegan) {
          return false;
        }
        return true;
      });
      return { ...state, filteredMeals: updatedFilteredMeals };
    },
  },
});

export const { toggleFavorite, setFilter } = mealSlice.actions;

export default mealSlice.reducer;
