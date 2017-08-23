import React from "react";
import { StackNavigator } from "react-navigation";
import { MaterialIcons } from "@expo/vector-icons";

import { constants, colors } from "../../config/theme";
import Store from "../../config/reducers";
import BBQ1 from './BBQ1';
import BBQ2 from './BBQ2';
import BBQ3 from './BBQ3';

const BBQNavigator = StackNavigator({
  BBQ1: { screen: BBQ1 },
  BBQ2: { screen: BBQ2 },
  BBQ3: { screen: BBQ3 },
}, {
  headerMode: 'float',
  //TODO: dynamic wizardry goes here
  initialRoute: () => Store.getState().cook.foodTemp ? 'InstructionSlideshow' :'SelectFood',
  navigationOptions({navigation}) {
    return {
      title: 'BBQ',
      headerStyle: {
        backgroundColor: colors.slateGrey
      },
      headerTintColor: colors.white,
      headerBackTitle: null,
      headerRight: null,
      // headerLeft: null
    }
  },
  cardStyle: {
    backgroundColor: colors.darkGrey
  }
});

BBQNavigator.navigationOptions = ({ navigation }) => {
  return {
    title: "BBQ",
    header: null,
  };
};

export default BBQNavigator;
