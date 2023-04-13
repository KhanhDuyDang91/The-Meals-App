import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";

import HeaderTitleCpn from "../components/HeaderTitle";
import DefaultText from "../components/DefaultText";
import Colors from "../constants/Colors";

const ListDetail = (props) => {
  return (
    <View style={styles.listDetail}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

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
    <ScrollView>
      <Image source={{ uri: mealItem.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <View style={styles.label}>
          <MaterialIcons name="timer" size={20} />
          <DefaultText style={styles.labelText}>
            {mealItem.duration} MINUTES
          </DefaultText>
        </View>

        <View style={styles.label}>
          <MaterialIcons name="restaurant" size={20} />
          <DefaultText style={styles.labelText}>
            {mealItem.complexity.toUpperCase()}
          </DefaultText>
        </View>

        <View style={styles.label}>
          <MaterialCommunityIcons name="chef-hat" size={20} />
          <DefaultText style={styles.labelText}>
            {mealItem.affordability.toUpperCase()}
          </DefaultText>
        </View>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {mealItem.ingredients.map((ingredient) => (
        <ListDetail key={ingredient}>{ingredient}</ListDetail>
      ))}
      <Text style={styles.title}>Steps</Text>
      {mealItem.steps.map((step) => (
        <ListDetail key={step}>{step}</ListDetail>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 5,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listDetail: {
    marginHorizontal: 25,
    marginVertical: 5,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: Colors.accentColor,
  },
  label: {
    flexDirection: "row",
  },
  labelText: {
    marginLeft: 3,
    fontSize: 15,
  },
});

export default MealDetailScreen;
