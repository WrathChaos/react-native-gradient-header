import React from "react";
import {
  View,
  Text,
  Platform,
  Dimensions,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import FastImage from "react-native-fast-image";
import Icon from "react-native-dynamic-vector-icons";
import { ifIphoneX } from "react-native-iphone-x-helper";
import { sanFranciscoWeights } from "react-native-typography";
import styles from "./HeaderContent.style";
import colors from "../../../shared/styles/colors";

const { height, width } = Dimensions.get("window");

const HeaderContent = props => {
  return (
    <SafeAreaView>
      <View
        style={{
          width,
          marginTop: 12,
          flexDirection: "row",
          ...Platform.select({
            ios: {
              ...ifIphoneX(
                {
                  bottom: height * 0.065
                },
                {
                  bottom: height * 0.07
                }
              )
            },
            android: {
              bottom: height * 0.02
            }
          })
        }}
      >
        <View style={styles.leftContainer}>
          <Text style={styles.dateTextStyle}>Today</Text>
          <Text style={styles.saluteTextStyle}>Have a nice day Kuray</Text>
        </View>
        <View style={styles.rightContainer}>
          <TouchableOpacity style={{ right: 24, top: 8 }} onPress={() => {}}>
            <Icon
              size={30}
              color="white"
              type="FontAwesome"
              name="shopping-cart"
            />
            <View
              style={{
                bottom: 10,
                right: -8,
                minWidth: 20,
                height: 20,
                borderRadius: 15,
                alignItems: "center",
                position: "absolute",
                backgroundColor: "white",
                justifyContent: "center"
              }}
            >
              <View
                style={{
                  height: 18,
                  minWidth: 18,
                  borderRadius: 15,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: colors.light.primaryOrange
                }}
              >
                <Text
                  style={{
                    ...sanFranciscoWeights.bold,
                    fontSize: 12,
                    color: "white"
                  }}
                >
                  3
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <FastImage
              source={require("../../../../assets/temp/profile.jpg")}
              style={styles.myProfileImageStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HeaderContent;
