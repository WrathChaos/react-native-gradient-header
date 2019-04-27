import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import styles, { solidColor } from "./Shape.style";
import LinearGradient from "react-native-linear-gradient";

const Shape = props => {
  const { start, end, gradient, shapeColor, gradientColors } = props;

  function renderGradient() {
    return (
      <LinearGradient
        start={start}
        end={end}
        colors={gradientColors}
        style={[styles.main, styles.customShadowStyle]}
      />
    );
  }

  function renderSolidBG() {
    return (
      <View
        style={[styles.main, styles.customShadowStyle, solidColor(shapeColor)]}
      />
    );
  }

  return gradient ? renderGradient() : renderSolidBG();
};

Shape.propTypes = {
  start: PropTypes.object,
  end: PropTypes.object,
  gradient: PropTypes.bool,
  shapeColor: PropTypes.string,
  gradientColors: PropTypes.array
};

Shape.defaultProps = {
  gradient: true,
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
  shapeColor: "#ba75df",
  gradientColors: ["#FB73BA", "#BC75DF", "#807DE7"]
};

export default Shape;
