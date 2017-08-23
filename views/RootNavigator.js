import React from "react";
import { addNavigationHelpers, StackNavigator } from "react-navigation";
import { connect } from "react-redux";

import { colors } from "../config/theme";
import Store from "../config/reducers";
import MainTabNavigator from "./MainTabNavigator";
import Onboarding from "./Onboarding";

/**
 * The main navigator, contains all view
 */
const RootNavigator = StackNavigator(
  {
    Onboarding: { screen: Onboarding },
    MainTabNavigator: { screen: MainTabNavigator },
  },
  {
    headerMode: "screen",
    navigationOptions: {
      headerBackTitle: null,
      headerStyle: {
        backgroundColor: colors.slateGrey
      },
      headerTitleStyle: {
        color: colors.white,
      },
      headerTintColor: colors.white
    },
    initialRoute(test,theis,thing) {
      console.log(test, theis, thing);
      console.log(Store.getState())
      return "Onboarding";
    }
  }
);

export default RootNavigator;
