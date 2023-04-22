import React from "react";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";
import { mealSlice } from "../store/reducers/meals";
import { MEALS } from "../data/dummy-data";

const FavoritesScreens = (props) => {
  const availableMeals = useSelector((state) => state.meals.favoriteMeals);

  return <MealList listData={availableMeals} />;
};

export default FavoritesScreens;
