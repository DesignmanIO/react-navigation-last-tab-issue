import React, { Component } from "react";
import { Screen, View } from "@shoutem/ui";
import { MaterialIcons } from "@expo/vector-icons";

import { constants } from "../config/theme";

/**
 * Recipes view
 * @class Recipes
 */
class Recipes extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Recipes",
      backTitle: null,
      headerRight: null,
      headerLeft: null
    };
  };
  render() {
    return (
    <Screen style={{ backgroundColor: "purple" }} ><View styleName="fill-parent"/></Screen>
  );
  }
}

export default Recipes;
