import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

import Colors from "../constants/Colors";
import TabNavigator from "./TabNavigator";
import { FilterStackNavigator } from "./StackNavigator";

const Draw = createDrawerNavigator();

const DrawNavigator = ({ navigation }) => {
  return (
    <Draw.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: Colors.fifthColor,
        drawerActiveBackgroundColor: Colors.primaryColor,
        drawerLabelStyle: {
          fontFamily: "open-sans-bold",
          marginLeft: 0,
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
      <Draw.Screen
        name="Home"
        component={TabNavigator}
        options={{
          drawerIcon: () => {
            return (
              <Ionicons
                name="home"
                size={25}
                color={Colors.thirdColor}
                style={{ marginRight: -20 }}
              />
            );
          },
        }}
      />
      <Draw.Screen
        name="Filter"
        component={FilterStackNavigator}
        options={{
          drawerIcon: () => {
            return (
              <MaterialCommunityIcons
                name="filter"
                size={25}
                color={Colors.thirdColor}
                style={{ marginRight: -20 }}
              />
            );
          },
        }}
      />
    </Draw.Navigator>
  );
};

export default DrawNavigator;
