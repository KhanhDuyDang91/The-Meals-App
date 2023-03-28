import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import Colors from "../constants/Colors";

const HeaderTitleCpn = (props) => {
  const [stateFav, setStateFav] = useState(false);

  return (
    <View style={styles.container}>
      <Text numberOfLines={2} style={styles.title}>
        {props.title}
      </Text>
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName={stateFav === false ? "heart-plus-outline" : "heart-remove"}
          onPress={() => {
            setStateFav(!stateFav);
            stateFav === false
              ? alert("Added to favorite")
              : alert("Removed favorite");
          }}
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
    fontSize: 20,
    paddingHorizontal: 20,
    textAlign: "center",
    width: "60%",
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
