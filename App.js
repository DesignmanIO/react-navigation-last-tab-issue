import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import { StyleProvider } from "@shoutem/theme";
import Expo, {
  Font,
  Asset,
  AppLoading,
  Permissions,
  Notifications
} from "expo";
import { Platform, Modal, WebView, AlertIOS, Image, Alert } from "react-native";
import { View, Text, Button } from "@shoutem/ui";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import { addNavigationHelpers, NavigationActions } from "react-navigation";
import ActionButton from "react-native-action-button";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import _ from "lodash";
import { connectCallModal } from "@fugood/react-native-call-modal";

import Store from "./config/reducers";
import Theme, { colors, constants } from "./config/theme";
import RootNavigator from "./views/RootNavigator";
import { NavBar, StatusBar } from "./components/Navigation";

const expoSettings = require("./app.json");

/**
 * Passes redux into RootNavigator, and any other root components that need redux
 * @function ReduxNavigator
 */
const ReduxNavigator = connectCallModal(
  connect(state => state)(props => {
    return (
      <View styleName="fill-parent">
        <RootNavigator
          navigation={addNavigationHelpers({
            dispatch: props.dispatch,
            state: props.nav
          })}
        />
        <Modal
          visible={props.app.webViewVisible || false}
          animationType="slide"
        >
          <View styleName="fill-parent">
            <NavBar
              style={{ bar: { zIndex: 1 } }}
              title="Log in"
              renderRight={style => (
                <MaterialIcons
                  style={style}
                  name="close"
                  color={colors.white}
                  size={constants.iconSize}
                  onPress={() =>
                    Store.dispatch({
                      type: "TOGGLE_WEBVIEWVISIBLE",
                      webViewVisible: false
                    })}
                />
              )}
            />
            <WebView
              source={{ html: props.app.webViewContent }}
              style={{ marginTop: 80 }}
              onNavigationStateChange={(a, b, c, d, e) =>
                console.log(a, b, c, d, e)}
            />
          </View>
        </Modal>
      </View>
    );
  })
);

/**
 * Root-level App, contains wrapping components like StyleProvider, and loads assets (images, fonts, etc...)
 * @class App
 */
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    };
  }

  async loadAssets() {
    try {
      await Promise.all([
        Font.loadAsync({
          "Rubik-Regular": require('./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf'),
          "Rubik-Medium": require('./node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf'),
        })
      ]);
    } catch (e) {
      // In this case, you might want to report the error to your error
      // reporting service, for example Sentry
      console.warn(
        "There was an error caching assets (see: App.js), perhaps due to a " +
          "network timeout, so we skipped caching. Reload the app to try again."
      );
      console.log(e);
    } finally {
      this.setState({ loaded: true });
    }
  }

  async componentWillMount() {
    StatusBar.setBarStyle("light-content");
    await this.loadAssets();
  }

  render() {
    // If initial assets aren't loaded, keep showing the loading screen
    if (!this.state.loaded) return <AppLoading />;
    // Initialize redux (Provider), theme (StyleProvider), and root navigation
    return (
      <Provider store={Store}>
        <StyleProvider style={Theme}>
          <ActionSheetProvider>
            <View styleName="fill-parent">
              <StatusBar />
              <ReduxNavigator />
            </View>
          </ActionSheetProvider>
        </StyleProvider>
      </Provider>
    );
  }
}

export default App;
