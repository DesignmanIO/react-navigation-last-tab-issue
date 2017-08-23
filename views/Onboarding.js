import React, { Component } from "react";
import { WebBrowser } from "expo";
import {
  Screen,
  HorizontalPager,
  PageIndicators,
  View,
  Button,
  Text,
  Image,
  Title,
  Divider
} from "@shoutem/ui";

import {constants} from '../config/theme';

/**
 * The onboarding horizontal swiper.
 * @class Onboarding
 */
class Onboarding extends Component {

  static navigationOptions = {
    title: 'App',
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {navigation} = this.props;
    return (
      <View styleName="fill-parent vertical v-end">
        <Button onPress={() => navigation.navigate('Home')}><Text>Go to tabs</Text></Button>
      </View>
    );
  }
}

export default Onboarding;
