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

import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreens from "./screens/FavoritesScreen";
import Colors from "./constants/Colors";
import HeaderTitleCpn from "./components/HeaderTitle";

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
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={FavoritesScreens}
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <MaterialCommunityIcons
                  name="star"
                  size={25}
                  color={Colors.thirdColor}
                />
              );
            },
            headerStyle: {
              backgroundColor: Colors.thirdColor,
            },
            headerTintColor: Colors.textColor,
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "open-sans-bold",
            },
            headerTitle: "Favorite Meals",
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
