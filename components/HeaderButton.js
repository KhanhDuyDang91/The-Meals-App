import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { Platform, StyleSheet } from "react-native";

import Colors from "../constants/Colors";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === "ios" ? Colors.primaryColor : Colors.accentColor}
      style={{ ...props.style, ...styles.headerButton }}
    />
  );
};

const styles = StyleSheet.create({
  headerButton: {
    backgroundColor: "black",
  },
});

export default CustomHeaderButton;
