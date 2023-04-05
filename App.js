import React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreens from "./screens/FavoritesScreen";
import Colors from "./constants/Colors";
import HeaderTitleCpn from "./components/HeaderTitle";
import FiltersScreen from "./screens/FiltersScreen";

enableScreens();
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans-bold": require("./fonts/OpenSans-Bold.ttf"),
    "open-sans": require("./fonts/OpenSans-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  const Draw = createDrawerNavigator();

  const DrawNavigator = () => {
    return (
      <Draw.Navigator>
        <Draw.Screen name="Filter" component={FilterNavigator} />
        <Draw.Screen name="Favorite" component={FavNavigator} />
      </Draw.Navigator>
    );
  };

  const FilterNavigator = () => {
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
          headerTitle: "Your Favorite Meals",
        }}
      >
        <Stack.Screen name="Filter" component={FiltersScreen} />
        <Stack.Screen name="MealDetails" component={MealDetailScreen} />
      </Stack.Navigator>
    );
  };

  const Tab = createBottomTabNavigator();

  const MealNavigator = () => {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Group
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
              title: "Categories Meal",
            }}
          ></Stack.Screen>
          <Stack.Screen name="Meal" component={CategoryMealsScreen} />
          <Stack.Screen name="MealDetails" component={MealDetailScreen} />
        </Stack.Group>
      </Stack.Navigator>
    );
  };

  const FavNavigator = () => {
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
          headerTitle: "Your Favorite Meals",
        }}
      >
        <Stack.Screen name="Fav" component={FavoritesScreens} />
        <Stack.Screen name="MealDetails" component={MealDetailScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: Colors.thirdColor,
          tabBarActiveBackgroundColor: Colors.primaryColor,
          tabBarLabelStyle: {
            fontFamily: "open-sans-bold",
            fontSize: 13,
            paddingBottom: 5,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={MealNavigator}
          options={{
            headerShown: false,

            tabBarIcon: (tabInfo) => {
              return (
                <MaterialCommunityIcons
                  name="home"
                  size={25}
                  color={Colors.thirdColor}
                />
              );
            },
            tabBarBadge: "hihi",
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={FavNavigator}
          options={{
            headerShown: false,
            tabBarIcon: (tabInfo) => {
              return (
                <MaterialCommunityIcons
                  name="star"
                  size={25}
                  color={Colors.thirdColor}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
