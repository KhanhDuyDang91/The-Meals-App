import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import { MealStackNavigator, FavStackNavigator } from "./StackNavigator";

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

export default TabNavigator;
