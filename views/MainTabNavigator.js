import React from "react";
import { TabNavigator } from "react-navigation";
import { connectStyle, changeColorAlpha } from "@shoutem/theme";

import { colors } from "../config/theme";
import Home from "./Home";
import BBQNavigator from "./BBQ";
import Recipes from "./Recipes";

/**
 * The tab navigator View (contains Home, BBQ, and Recipes). Contained by RootNavigator.
 * @function MainTabNavigator
 */
const MainTabNavigator = TabNavigator(
  {
    Home: { screen: Home },
    BBQ: { screen: BBQNavigator },
    Recipes: { screen: Recipes },
  },
  {
    tabBarOptions: {
      inactiveTintColor: changeColorAlpha(colors.white, 0.9),
      activeTintColor: colors.white,
      inactiveBackgroundColor: colors.darkGrey,
      activeBackgroundColor: colors.darkGrey
    }
  }
);

export default MainTabNavigator;
