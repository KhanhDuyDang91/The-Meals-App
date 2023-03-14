import React from "react";
import { StyleSheet, View, Text } from "react-native";

const FavoritesScreens = (props) => {
  return (
    <View style={styles.screen}>
      <Text>This is FavoritesScreens</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreens;
