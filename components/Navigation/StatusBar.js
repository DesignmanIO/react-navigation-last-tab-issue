import React from "react";
import { View, Text } from "@shoutem/ui";
import { StatusBar as RNStatusBar } from "react-native";
import { connect } from "react-redux";

import { colors, constants } from "../../config/theme";
const expoSettings = require("../../app.json");

/**
 * Custom statusbar that can change color and stuff
 * @param {object} props Props passed in via redux, work in progress
 */
const StatusBar = props => {
  return (
    <View
      style={{
        backgroundColor: colors.slateGrey,
        height: constants.statusBarHeight,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1
      }}
    >
      <RNStatusBar />
      <Text
        style={{
          position: "absolute",
          fontSize: 10,
          right: "25%",
          top: 6,
          color: "#fff"
        }}
      >
        {expoSettings.expo.version}
      </Text>
    </View>
  );
};

StatusBar.setBarStyle = RNStatusBar.setBarStyle;

// export default connect(({app}) => app)(StatusBar)
export default StatusBar;
