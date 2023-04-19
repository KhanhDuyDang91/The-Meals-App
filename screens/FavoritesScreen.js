import React from "react";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";

const FavoritesScreens = (props) => {
  const availableMeals = useSelector((state) => state.meals.favoriteMeals);
  const favMeals = availableMeals.filter(
    (meal) => meal.id === "m1" || meal.id === "m2"
  );
  return <MealList listData={favMeals} />;
};

export default FavoritesScreens;
