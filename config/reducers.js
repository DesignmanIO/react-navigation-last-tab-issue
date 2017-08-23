import { combineReducers, createStore, compose } from "redux";
import { persistStore, autoRehydrate } from "redux-persist";
import { AsyncStorage } from "react-native";
import { NavigationActions } from "react-navigation";
import _ from "lodash";

import RootNavigator from "../views/RootNavigator";
import MainTabNavigator from "../views/MainTabNavigator";

const initialState = RootNavigator.router.getStateForAction(
  RootNavigator.router.getActionForPathAndParams("Onboarding")
);

/**
 * Prevent duplicate navigation, goes into navigation reducer
 * @function navigateOnce
 * @param {function} getStateForAction
 * @return {object} State
 */
const navigateOnce = getStateForAction => (action, state) => {
  const { type, routeName } = action;
  return state &&
    type === NavigationActions.NAVIGATE &&
    routeName === state.routes[state.routes.length - 1].routeName
    ? state
    : getStateForAction(action, state);
};

RootNavigator.router.getStateForAction = navigateOnce(
  RootNavigator.router.getStateForAction
);
MainTabNavigator.router.getStateForAction = navigateOnce(
  MainTabNavigator.router.getStateForAction
);

/**
 * Navigation reducers (used by react-navigation package)
 * @function nav
 * @param  {object} state
 * @param  {object} action
 * @return {object} state
 */
const nav = (state = initialState, action) => {
  return RootNavigator.router.getStateForAction(action, state) || state;
};

/**
 * Reducer for user
 * @function user
 * @param  {object} state
 * @param  {object} action
 * @return {object} state
 */
const initialUserState = {
  weight_unit: "lbs",
  degree_unit: "F"
};
const user = (
  state = initialUserState,
  action
) => {
  switch (action.type) {
    case "SET_WEIGHT_UNIT": {
      const { weight_unit } = action;
      return { ...state, weight_unit };
    }
    case "SET_DEGREE_UNIT": {
      const { degree_unit } = action;
      return { ...state, degree_unit };
    }
    case "TOGGLE_PUSH_NOTIFICATIONS": {
      const { push_enabled } = action;
      return { ...state, push_enabled };
    }
    case "TOGGLE_TEXT_NOTIFICATIONS": {
      const { texting_enabled } = action;
      return { ...state, texting_enabled };
    }
    case "SET_FIELDS": {
      const { fields } = action;
      return { ...state, ...fields };
    }
    case "LOGOUT": {
      // clears state
      return initialUserState;
    }
    default: {
      return state;
    }
  }
};

/**
 * Reducer for the cook status
 * @param {object} state 
 * @param {object} action 
 * @return {object} state
 */
const cook = (state = {}, action) => {
  switch (action.type) {
    case "SET_COOKVALUES": {
      const {
        cookerTemp = state.cookerTemp,
        foodTemp = state.foodTemp,
        weight = state.weight,
        foodTypeId = state.foodTypeId
      } = action;
      console.log('set cook values', action);
      return { ...state, cookerTemp, foodTemp, weight, foodTypeId };
    }
    default: {
      return state;
    }
  }
};

/**
 * App states that aren't related to the user (i.e. display stuff)
 * @function app
 * @param  {object} state
 * @param  {object} action
 * @return {object} state
 */
const app = (state = {}, action) => {
  switch (action.type) {
    case "SET_NEXTVIEW": {
      const { nextView } = action;
      return { ...state, nextView };
    }
    case "STATUSBAR_STYLE": {
      return { ...state, ...action.style };
    }
    case "TOGGLE_WEBVIEWVISIBLE": {
      const { webViewVisible } = action;
      return { ...state, webViewVisible };
    }
    case "SET_WEBVIEWCONTENT": {
      const { webViewContent } = action;
      return { ...state, webViewContent };
    }
    default: {
      return state;
    }
  }
};

const AppReducer = combineReducers({
  nav,
  user,
  app,
  cook
});

const Store = createStore(AppReducer, undefined, compose(autoRehydrate()));

persistStore(Store, { storage: AsyncStorage, blacklist: 'nav' });

export default Store;
export { AppReducer };
