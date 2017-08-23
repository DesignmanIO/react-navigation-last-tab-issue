import React, { Component } from "react";
import { Text, View, Button, Screen, Title, ScrollView } from "@shoutem/ui";
import { FlatList } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { constants } from "../config/theme";

/**
 * Homepage view
 * @class Home
 */
class Home extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Home",
      backTitle: null,
      headerRight: null,
      headerLeft: null
    };
  };
  render() {
    // return <Settings />;
    return (
      <Screen style={{ backgroundColor: "orange" }} ><View styleName="fill-parent"/></Screen>
    );
  }
}

export default Home;
