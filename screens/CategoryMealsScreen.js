import { React, useEffect } from "react";
import { StyleSheet, View, Text, Button, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { CATEGORIES, MEALS } from "../data/dummy-data";

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

  const renderMealItem = (itemData) => {
    return (
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
