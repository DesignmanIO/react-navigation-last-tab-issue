import React from "react";
import PropTypes from 'prop-types';
import { connectStyle } from "@shoutem/theme";
import { View, Text } from "@shoutem/ui";

/**
 * Custom navigation component
 * @param {object} props 
 * @param {object} props.style
 * @param {func} props.renderLeft Component to render left
 * @param {func} props.renderRight Component to render right
 * @param {string} props.title Title of navbar
 */
const NavBar = props => {
  return (
    <View style={props.style.bar} styleName="horizontal v-center h-center">
      {props.renderLeft ? props.renderLeft(props.style.left) : null}
      <Text style={props.style.title} styleName="bold flexible">{props.title}</Text>
      {props.renderRight ? props.renderRight(props.style.right) : null}
    </View>
  );
};

NavBar.propTypes = {
  style: PropTypes.object,
  renderLeft: PropTypes.func,
  renderRight: PropTypes.func,
  title: PropTypes.string
}

export default connectStyle("d.component.NavBar")(NavBar);
