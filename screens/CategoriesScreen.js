import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Button } from "react-native";

import CategoryMealsScreen from "./CategoryMealsScreen";

const CategoriesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>This is HomeScreen</Text>
      <Button
        title="Details"
        onPress={() => props.navigation.navigate("Meal")}
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

export default CategoriesScreen;
