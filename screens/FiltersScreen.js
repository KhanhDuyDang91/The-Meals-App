import React, {
  useState,
  useEffect,
  useCallback,
  useLayoutEffect,
} from "react";
import { StyleSheet, View, Text, Switch } from "react-native";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useDispatch } from "react-redux";

import DefaultText from "../components/DefaultText";
import Colors from "../constants/Colors";
import { setFilter } from "../store/reducers/meals";
import DefaultButton from "../components/DefaultButton";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <DefaultText style={styles.text}>{props.label}</DefaultText>
      <Switch
        value={props.state}
        onValueChange={props.onChange}
        trackColor={{ true: Colors.fifthColor }}
        thumbColor={Colors.thirdColor}
      />
    </View>
  );
};

const FiltersScreen = ({ props, route }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    dispatch(setFilter(appliedFilters));
    navigation.navigate("Filtered Meals");
  }, [
    isGlutenFree,
    isLactoseFree,
    isVegan,
    isVegetarian,
    dispatch,
    navigation,
  ]);

  //render the first and whenever saveFilters changes
  /* useLayoutEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]); */

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filter / Restrictions</Text>
      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={(newValue) => setIsVegetarian(newValue)}
      />
      <View style={styles.buttonContainer}>
        <DefaultButton
          onPress={() => {
            setIsGlutenFree(false);
            setIsLactoseFree(false);
            setIsVegan(false);
            setIsVegetarian(false);
          }}
        >
          Reset
        </DefaultButton>
        <DefaultButton onPress={saveFilters}>Apply</DefaultButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",

    marginTop: 20,
  },
});

export default FiltersScreen;
