import React from "react";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { enableScreens } from "react-native-screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreens from "./screens/FavoritesScreen";
import Colors from "./constants/Colors";
import HeaderTitleCpn from "./components/HeaderTitle";
import FiltersScreen from "./screens/FiltersScreen";
import HeaderButton from "./components/HeaderButton";
import MenuBtn from "./components/MenuBtn";

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

  const MealStackNavigator = () => {
    const navigation = useNavigation();
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
              headerBackVisible: false,
              headerLeft: () => {
                return <MenuBtn />;
              },
            }}
          ></Stack.Screen>
          <Stack.Screen name="Meal" component={CategoryMealsScreen} />
          <Stack.Screen name="MealDetails" component={MealDetailScreen} />
        </Stack.Group>
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
        <Stack.Screen name="MealDetails" component={MealDetailScreen} />
      </Stack.Navigator>
    );
  };

  const FilterStackNavigator = () => {
    const props = useNavigation();

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
          headerTitle: "Your Filter",
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
          }}
        />
        <Stack.Screen name="MealDetails" component={MealDetailScreen} />
      </Stack.Navigator>
    );
  };

  const Tab = createBottomTabNavigator();

  const TabNavigator = () => {
    return (
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
          name="Meals"
          component={MealStackNavigator}
          options={{
            headerShown: false,

            tabBarIcon: (tabInfo) => {
              return (
                <MaterialIcons
                  name="restaurant-menu"
                  size={25}
                  color={Colors.thirdColor}
                />
              );
            },
            tabBarBadge: "hihi",
            tabBarBadgeStyle: { fontSize: 10 },
          }}
        />
        <Tab.Screen
          name="Favoritee"
          component={FavStackNavigator}
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
            tabBarLabel: "Favortites",
          }}
        />
      </Tab.Navigator>
    );
  };

  const Draw = createDrawerNavigator();

  const DrawNavigator = ({ navigation }) => {
    return (
      <Draw.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: Colors.thirdColor,
          drawerActiveBackgroundColor: Colors.primaryColor,
          drawerLabelStyle: {
            fontFamily: "open-sans-bold",
            marginLeft: 10,
          },
          drawerStyle: {
            borderRadius: 15,
            width: "50%",
          },
          drawerItemStyle: {
            borderRadius: 15,
          },
        }}
      >
        <Draw.Screen name="Home" component={TabNavigator} />
        <Draw.Screen name="Filter" component={FilterStackNavigator} />
      </Draw.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <DrawNavigator />
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
