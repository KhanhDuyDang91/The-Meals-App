import { React, useEffect } from "react";

import { useNavigation } from "@react-navigation/native";

import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealsScreen = ({ route, props }) => {
  const navigation = useNavigation();

  const catId = route.params;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId.categoryId.id) >= 0
  );

  useEffect(() => {
    navigation.setOptions({
      title: catId.categoryId.title,
    });
  }, []);

  return <MealList listData={displayedMeals} />;
};

export default CategoryMealsScreen;
