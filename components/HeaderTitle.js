import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const HeaderTitleCpn = (props) => {
  const [stateFav, setStateFav] = useState(false);

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.title}>
        {props.title}
      </Text>
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName={stateFav === false ? "heart-outline" : "heart"}
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
    backgroundColor: "yellow",
    width: "100%",
    direction: "ltr",
    flexDirection: "row",
  },
  title: {
    backgroundColor: "gray",
    fontFamily: "open-sans-bold",
    fontSize: 20,
    paddingHorizontal: 10,
  },
  headerBtn: {
    marginRight: 0,
    backgroundColor: "red",
    left: 10,
  },
});

export default HeaderTitleCpn;
