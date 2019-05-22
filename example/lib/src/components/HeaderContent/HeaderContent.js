import React from "react";
import PropTypes from "prop-types";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";
import styles from "./HeaderContent.style";

const HeaderContent = props => {
  const { title, subtitle, imageSource, imageOnPress } = props;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Text style={styles.dateTextStyle}>{title}</Text>
          <Text style={styles.saluteTextStyle}>{subtitle}</Text>
        </View>
        <View style={styles.rightContainer}>
          {imageSource && (
            <TouchableOpacity onPress={imageOnPress}>
              <FastImage
                source={
                  imageSource || require("../../../../assets/profile.jpg")
                }
                style={styles.myProfileImageStyle}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

HeaderContent.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  imageOnPress: PropTypes.func
};

HeaderContent.defaultProps = {
  title: "Today",
  subtitle: "Have a nice day",
  imageOnPress: () => {}
};

export default HeaderContent;
