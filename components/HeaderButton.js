import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { Platform, StyleSheet } from "react-native";

import Colors from "../constants/Colors";

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={MaterialCommunityIcons}
      iconSize={30}
      color={Platform.OS === "ios" ? Colors.primaryColor : "#89df7b"}
      style={{ ...props.style, ...styles.headerButton }}
      buttonStyle={{ paddingBottom: 5 }}
    />
  );
};

const styles = StyleSheet.create({});

export default CustomHeaderButton;
