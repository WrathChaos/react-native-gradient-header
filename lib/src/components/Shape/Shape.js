import React, { Component } from "react";
import { View } from "react-native";
import styles from "./Shape.style";
import colors from "../styles/colors";
import LinearGradient from "react-native-linear-gradient";

export default class Shape extends Component {
  renderGradient(gradientColors) {
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        // colors={["#667eea", "#764ba2"]}
        // colors={["#764ba2", "#fbc2eb"]}
        colors={gradientColors || ["#FB73BA", "#BC75DF", "#807DE7"]}
        style={[styles.shape.main, styles.shape.customShadowStyle]}
      />
    );
  }

  renderSolidBG(shapeColor) {
    return (
      <View
        style={[
          styles.shape.main,
          styles.shape.customShadowStyle,
          {
            backgroundColor: shapeColor || colors.light.primaryBackground
          }
        ]}
      />
    );
  }

  render() {
    const { shapeColor, gradientColors, gradient } = this.props;
    return gradient
      ? this.renderGradient(gradientColors)
      : this.renderSolidBG(shapeColor);
  }
}
