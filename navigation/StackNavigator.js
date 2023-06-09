import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

import Colors from "../constants/Colors";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreens from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import MenuBtn from "../components/MenuBtn";
import { Ionicons } from "@expo/vector-icons";
import FilterCategoryScreen from "../screens/FilterCategoryScreen";

const Stack = createNativeStackNavigator();

const MealStackNavigator = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.thirdColor,
        },
        headerTintColor: Colors.textColor,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "open-sans-bold",
        },
      }}
    >
      <Stack.Screen
        name="Categories Meal"
        component={CategoriesScreen}
        options={{
          headerBackVisible: false,
          headerLeft: () => {
            return <MenuBtn />;
          },
        }}
      ></Stack.Screen>
      <Stack.Screen name="Meal" component={CategoryMealsScreen} />
      <Stack.Screen
        name="MealDetails"
        component={MealDetailScreen}
        options={{
          headerTitleStyle: {
            fontSize: 16,
            fontFamily: "open-sans-bold",
          },
        }}
      />
    </Stack.Navigator>
  );
};

const FavStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.thirdColor,
        },
        headerTintColor: Colors.textColor,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "open-sans-bold",
        },
        headerTitle: "My Favorite List",
      }}
    >
      <Stack.Screen
        name="Fav"
        component={FavoritesScreens}
        options={{
          headerBackVisible: false,
          headerLeft: () => {
            return <MenuBtn />;
          },
        }}
      />
      <Stack.Screen
        name="MealDetails"
        component={MealDetailScreen}
        options={{
          headerTitleStyle: {
            fontSize: 16,
            fontFamily: "open-sans-bold",
          },
        }}
      />
    </Stack.Navigator>
  );
};

const FilterStackNavigator = ({ route }) => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.thirdColor,
        },
        headerTintColor: Colors.textColor,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "open-sans-bold",
        },
      }}
    >
      <Stack.Screen
        name="FiltersScreen"
        component={FiltersScreen}
        options={{
          headerBackVisible: false,
          headerLeft: () => {
            return <MenuBtn />;
          },
          headerTitle: "Filter Screen",
        }}
      />
      <Stack.Screen name="Filtered Meals" component={FilterCategoryScreen} />
      <Stack.Screen name="MealDetails" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

export { MealStackNavigator, FavStackNavigator, FilterStackNavigator };
