import React from "react";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { enableScreens } from "react-native-screens";
import store from "./store/store";
import { Provider } from "react-redux";
import { LogBox } from "react-native";

import DrawNavigator from "./navigation/DrawNavigator";

enableScreens();
SplashScreen.preventAutoHideAsync();

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

  LogBox.ignoreLogs([
    "Non-serializable values were found in the navigation state",
  ]);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawNavigator />
      </NavigationContainer>
    </Provider>
  );
}
