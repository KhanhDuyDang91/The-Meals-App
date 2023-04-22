import React from "react";
import { Text, StyleSheet } from "react-native";

const TitleText = (props) => {
  return (
    <Text {...props} style={{ ...styles.text, ...props.style }}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    width: "90%",
    backgroundColor: "red",
    marginLeft: -30,
    textAlign: "center",
  },
});

export default TitleText;
