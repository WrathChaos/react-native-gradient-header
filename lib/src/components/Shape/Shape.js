import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import styles, { solidColor, _position } from "./Shape.style";
import LinearGradient from "react-native-linear-gradient";

const Shape = props => {
  const { start, end, gradient, position, shapeColor, gradientColors } = props;

  function renderGradient() {
    return (
      <LinearGradient
        start={start}
        end={end}
        colors={gradientColors}
        style={[styles.main, styles.customShadowStyle, _position(position)]}
      />
    );
  }

  function renderSolidBG() {
    return (
      <View
        style={[
          styles.main,
          _position(position),
          solidColor(shapeColor),
          styles.customShadowStyle
        ]}
      />
    );
  }

  return gradient ? renderGradient() : renderSolidBG();
};

Shape.propTypes = {
  end: PropTypes.object,
  start: PropTypes.object,
  gradient: PropTypes.bool,
  shapeColor: PropTypes.string,
  gradientColors: PropTypes.array
};

Shape.defaultProps = {
  gradient: true,
  end: { x: 1, y: 0 },
  start: { x: 0, y: 0 },
  shapeColor: "#ba75df",
  gradientColors: ["#12c2e9", "#c471ed", "#f64f59"]
};

export default Shape;
