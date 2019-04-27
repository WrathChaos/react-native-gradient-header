import React from "react";
import { View } from "react-native";
import Shape from "./Shape/Shape";
import HeaderContent from "./HeaderContent/HeaderContent";

const styles = {
  container: { top: 0, position: "absolute" }
};

const GradientHeader = props => {
  const {
    end,
    start,
    title,
    gradient,
    position,
    subtitle,
    shapeColor,
    imageSource,
    imageOnPress,
    gradientColors,
    headerContentComponent
  } = props;
  return (
    <View style={styles.container}>
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

export default GradientHeader;
