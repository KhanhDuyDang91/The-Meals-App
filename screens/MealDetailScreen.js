import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

import HeaderTitleCpn from "../components/HeaderTitle";

const MealDetailScreen = ({ props, route }) => {
  const navigation = useNavigation();
  const mealParam = route.params;
  const mealItem = mealParam.mealItem;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <HeaderTitleCpn title={mealItem.title} />,
    });
  }, []);

  return (
    <View style={styles.screen}>
      <Text>{mealItem.ingredients}</Text>
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

export default MealDetailScreen;
