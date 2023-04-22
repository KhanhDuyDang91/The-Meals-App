import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import { MealStackNavigator, FavStackNavigator } from "./StackNavigator";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const FavoriteMeals = useSelector((state) => state.meals.favoriteMeals);

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
          tabBarLabel: "Favorite",
          tabBarBadge: FavoriteMeals.length,
          tabBarBadgeStyle: {
            fontSize: 10,
            backgroundColor: Colors.fifthColor,
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
