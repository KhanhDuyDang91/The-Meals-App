import { createDrawerNavigator } from "@react-navigation/drawer";

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

export default DrawNavigator;
