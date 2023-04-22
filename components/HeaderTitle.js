import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";
import { addFavorite } from "../store/reducers/meals";

const HeaderTitleCpn = (props) => {
  const [stateFav, setStateFav] = useState(false);
  const navigation = useNavigation();

  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text numberOfLines={2} style={styles.title}>
        {props.title}
      </Text>
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName={stateFav === false ? "heart-plus-outline" : "heart-remove"}
          onPress={() => {}}
          style={styles.headerBtn}
        />
      </HeaderButtons>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    overflow: "hidden",
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
  },
  headerBtn: {
    marginRight: 60,
    height: "80%",
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
    borderRadius: 25,
  },
});

export default HeaderTitleCpn;
