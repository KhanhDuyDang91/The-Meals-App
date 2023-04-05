import React from "react";
import { StyleSheet, View, Text } from "react-native";

import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FiltersScreen = (props) => {
  const favMeals = MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2");
  return <MealList listData={favMeals} />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FiltersScreen;
