import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import Shape from "./Shape/Shape";
import HeaderContent from "./HeaderContent/HeaderContent";
import styles, { _shadowStyle } from "./GradientHeader.style";

const GradientHeader = props => {
  const {
    end,
    start,
    title,
    gradient,
    position,
    subtitle,
    shapeColor,
    shadowColor,
    shadowStyle,
    imageSource,
    imageOnPress,
    gradientColors,
    headerContentComponent
  } = props;
  return (
    <View style={[styles.container, shadowStyle || _shadowStyle(shadowColor)]}>
      <Shape
        end={end}
        start={start}
        position={position}
        gradient={gradient}
        shapeColor={shapeColor}
        gradientColors={gradientColors}
      />
      {headerContentComponent || (
        <HeaderContent
          title={title}
          subtitle={subtitle}
          imageSource={imageSource}
          imageOnPress={imageOnPress}
        />
      )}
    </View>
  );
};

GradientHeader.defaultProps = {
  shadowColor: "#000"
};

export default GradientHeader;
