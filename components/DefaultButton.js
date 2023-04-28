import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Colors from "../constants/Colors";

const DefaultButton = (props) => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }

  if (props.nameBtn === "PRIMARY")
    return (
      <View style={styles.buttonContainer}>
        <ButtonComponent activeOpacity={0.8} onPress={props.onPress}>
          <View style={styles.defaultBtn}>
            <Text style={styles.textButton}>{props.children}</Text>
          </View>
        </ButtonComponent>
      </View>
    );
  else if (props.nameBtn === "SECONDARY")
    return (
      <View style={styles.buttonContainer}>
        <ButtonComponent activeOpacity={0.8} onPress={props.onPress}>
          <View style={styles.secondaryBtn}>
            <Text style={styles.textButtonn}>{props.children}</Text>
          </View>
        </ButtonComponent>
      </View>
    );
};

const styles = StyleSheet.create({
  defaultBtn: {
    backgroundColor: Colors.fifthColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 10,
    width: 100,
    height: 50,
    elevation: 3,
  },
  secondaryBtn: {
    backgroundColor: Colors.forthColor,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 10,
    width: 100,
    height: 50,
    elevation: 3,
  },
  buttonContainer: {
    borderRadius: 10,
    overflow: "visible",
  },
  textButton: {
    color: "white",
    fontFamily: "open-sans",
    fontSize: 18,
  },
  textButtonn: {
    color: Colors.textColor,
    fontFamily: "open-sans",
    fontSize: 18,
  },
});

export default DefaultButton;
