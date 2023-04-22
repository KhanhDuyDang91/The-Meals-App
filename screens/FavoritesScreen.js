import React from "react";
import { useSelector } from "react-redux";
import MealList from "../components/MealList";
import { mealSlice } from "../store/reducers/meals";
import { MEALS } from "../data/dummy-data";
import { View, StyleSheet } from "react-native";
import TitleText from "../components/TitleText";

const FavoritesScreens = (props) => {
  const availableMeals = useSelector((state) => state.meals.favoriteMeals);

  if (availableMeals.length === 0 || !availableMeals) {
    return (
      <View style={styles.content}>
        <TitleText style={styles.text}>
          No favorite meals found. Start adding some!!
        </TitleText>
      </View>
    );
  }

  return <MealList listData={availableMeals} />;
};

const styles = StyleSheet.create({
  content: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    marginLeft: 0,
  },
});
export default FavoritesScreens;
