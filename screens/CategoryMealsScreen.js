import { React, useEffect } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = ({ route, props }) => {
  const navigation = useNavigation();

  const catId = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: catId.categoryId.title,
    });
  }, []);

  return (
    <View style={styles.screen}>
      <Text>This is CategoryMealsScreen</Text>
      <Text>{catId.categoryId.title}</Text>
      <Button title="Back" onPress={() => navigation.navigate("Home")} />
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
