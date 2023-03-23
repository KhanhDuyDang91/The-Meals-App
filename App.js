import React from "react";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";

import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import Colors from "./constants/Colors";

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

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Group
          screenOptions={{
            headerStyle: {
              backgroundColor: Colors.accentColor,
            },
            headerTintColor: Colors.textColor,
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "open-sans-bold",
            },
          }}
        >
          <Stack.Screen
            name="Home"
            component={CategoriesScreen}
            options={{
              title: "Categories Meal",
            }}
          />
          <Stack.Screen name="Meal" component={CategoryMealsScreen} />
          <Stack.Screen name="MealDetails" component={MealDetailScreen} />
        </Stack.Group>
      </Stack.Navigator>
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
