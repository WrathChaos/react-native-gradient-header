import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import Shape from "./Shape/Shape";
import HeaderContent from "./HeaderContent/HeaderContent";
import colors from "../../shared/styles/colors";

const GradientHeader = props => {
  const { headerContentComponent } = props;
  return (
    <View>
      <Shape />
      {headerContentComponent || <HeaderContent />}
    </View>
  );
};

GradientHeader.propTypes = {
  // TODO: Auto-generated - Replace them!
  stars: PropTypes.number,
  ratings: PropTypes.number,
  reviews: PropTypes.number,
  starSize: PropTypes.number,
  starColor: PropTypes.string,
  reviewsText: PropTypes.string
};

GradientHeader.defaultProps = {
  // TODO: Auto-generated - Replace them!
  stars: 5,
  ratings: 0,
  reviews: 0,
  starSize: 16,
  starColor: "#ffa114",
  reviewsText: "reviews"
};

export default GradientHeader;
