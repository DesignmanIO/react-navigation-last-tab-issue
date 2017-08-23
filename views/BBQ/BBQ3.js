import React, { Component } from "react";
import { Screen, View } from "@shoutem/ui";
import { MaterialIcons } from "@expo/vector-icons";

import { constants } from "../../config/theme";
import BBQNavigator from "./BBQNavigator";

/**
 * The main BBQ View, mostly a wrapper around BBQNavigator
 * @class BBQ
 */
class BBQ3 extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "BBQ",
      headerRight: null,
      headerLeft: null
    };
  };
  render() {
    return (
      <Screen style={{ backgroundColor: "red" }} ><View styleName="fill-parent"/></Screen>
    );
  }
}

export default BBQ3;
