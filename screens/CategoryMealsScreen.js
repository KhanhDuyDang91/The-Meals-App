import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = ({ route, props }) => {
  const navigation = useNavigation();

  const catId = route.params;
  console.log(JSON.stringify(catId.categoryId));

  /* const catId = navigation.getId(({ categoryId }) => categoryId.item.id); */
  /* const selectedCategory = CATEGORIES.find((cat) => cat.id === catId); */

  return (
    <View style={styles.screen}>
      <Text>This is CategoryMealsScreen</Text>
      {/* {console.log(JSON.stringify(catId.id))} */}
      <Text>{catId.categoryId}</Text>

      <Button
        title="Details"
        onPress={() => props.navigation.navigate("Home")}
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
