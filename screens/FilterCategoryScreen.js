import { React, useEffect } from "react";

import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { mealSlice } from "../store/reducers/meals";
import { MEALS } from "../data/dummy-data";
import { View, StyleSheet, FlatList } from "react-native";

import MealList from "../components/MealList";
import MealItem from "../components/MealItem";

const FilterCategoryScreen = ({ route, props }) => {
  const navigation = useNavigation();

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const renderMealItem = (itemData) => {
    const isFavorite = availableMeals.some(
      (meal) => meal.id === itemData.item.id
    );
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        affordability={itemData.item.affordability}
        complexity={itemData.item.complexity}
        onSelect={() => {
          navigation.navigate("MealDetails", {
            mealItem: itemData.item,
            mealTitle: itemData.item.title,
            mealId: itemData.item.id,
            isFav: isFavorite,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={availableMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
  },
});

export default FilterCategoryScreen;
