import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

import Colors from "../constants/Colors";
import DefaultText from "./DefaultText";

const MealItem = (props) => {
  const Touchable = () => {
    Platform.OS === "ios" ? TouchableOpacity : TouchableNativeFeedback;
  };
  return (
    <View style={styles.mealItem}>
      <TouchableNativeFeedback onPress={props.onSelect}>
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={2}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
            <DefaultText>{props.duration} minutes</DefaultText>
            <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
          </View>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    borderRadius: 15,
    overflow: "hidden",
    elevation: 5,
    backgroundColor: "#f5f5f5",
    marginVertical: 20,
  },
  mealRow: {
    flexDirection: "row",
    backgroundColor: "white",
  },
  mealHeader: {
    height: "90%",
  },
  mealDetail: {
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "rgba(255, 217, 102, 0.8)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    color: Colors.textColor,

    textAlign: "center",
  },
});

export default MealItem;
