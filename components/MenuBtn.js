import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const MenuBtn = (props) => {
  const navigation = useNavigation();

  return (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Menu"
        iconName="menu"
        onPress={() => {
          navigation.toggleDrawer();
        }}
        style={style.btn}
      />
    </HeaderButtons>
  );
};

const style = StyleSheet.create({
  btn: {},
});

export default MenuBtn;
