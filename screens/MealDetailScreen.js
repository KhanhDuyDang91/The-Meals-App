import React from "react";
import { StyleSheet, View, Text, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useLayoutEffect, useCallback } from "react";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

import DefaultText from "../components/DefaultText";
import TitleText from "../components/TitleText";
import Colors from "../constants/Colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { toggleFavorite } from "../store/reducers/meals";

const ListDetail = (props) => {
  return (
    <View style={styles.listDetail}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealDetailScreen = ({ props, route }) => {
  const availableMeals = useSelector((state) => state.meals.meals);
  const navigation = useNavigation();
  const mealParam = route.params;
  const mealItem = mealParam.mealItem;
  const mealId = mealParam.mealId;
  const isFavorite = mealParam.isFav;

  const selectedMeal = availableMeals.find((meal) => meal.id === mealItem.id);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  /* useEffect(() => {
    navigation.setParams({ toggleFav: toggleFavoriteHandler });
  }, [toggleFavoriteHandler]); */

  /* const toggleFavoritee = mealParam.toggleFav; */

  const currentMealIsFavorite = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId)
  );

  useEffect(() => {
    navigation.setParams({ isFav: currentMealIsFavorite });
  }, [currentMealIsFavorite]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => {
        return <TitleText numberOfLines={1}>{selectedMeal.title}</TitleText>;
      },
      headerRight: () => {
        return (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Favorite"
              iconName={isFavorite ? "heart-remove" : "heart-plus-outline"}
              onPress={toggleFavoriteHandler}
              style={styles.headerBtn}
            />
          </HeaderButtons>
        );
      },
    });
  });

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <View style={styles.label}>
          <MaterialIcons name="timer" size={20} />
          <DefaultText style={styles.labelText}>
            {selectedMeal.duration} MINUTES
          </DefaultText>
        </View>

        <View style={styles.label}>
          <MaterialIcons name="restaurant" size={20} />
          <DefaultText style={styles.labelText}>
            {selectedMeal.complexity.toUpperCase()}
          </DefaultText>
        </View>

        <View style={styles.label}>
          <MaterialCommunityIcons name="chef-hat" size={20} />
          <DefaultText style={styles.labelText}>
            {selectedMeal.affordability.toUpperCase()}
          </DefaultText>
        </View>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <ListDetail key={ingredient}>{ingredient}</ListDetail>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
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
  headerBtn: {
    marginRight: -15,
    height: "100%",
    alignItems: "center",
  },
});

export default MealDetailScreen;
