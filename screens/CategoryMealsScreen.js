import { React, useEffect } from "react";

import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import MealList from "../components/MealList";

const CategoryMealsScreen = ({ route, props }) => {
  const navigation = useNavigation();

  const catId = route.params;

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId.categoryId.id) >= 0
  );

  useEffect(() => {
    navigation.setOptions({
      title: catId.categoryId.title,
    });
  });

  return <MealList listData={displayedMeals} />;
};

export default CategoryMealsScreen;
