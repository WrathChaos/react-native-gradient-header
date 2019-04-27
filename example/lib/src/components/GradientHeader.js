import React from "react";
import { View } from "react-native";
import Shape from "./Shape/Shape";
import HeaderContent from "./HeaderContent/HeaderContent";

const GradientHeader = props => {
  const {
    start,
    end,
    title,
    gradient,
    subtitle,
    shapeColor,
    imageSource,
    imageOnPress,
    gradientColors,
    headerContentComponent
  } = props;
  return (
    <View style={{ position: "absolute", top: 0 }}>
      <Shape
        start={start}
        end={end}
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

export default GradientHeader;
