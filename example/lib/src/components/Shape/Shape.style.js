import { Dimensions, Platform } from "react-native";
import { ifIphoneX } from "react-native-iphone-x-helper";
const { width, height } = Dimensions.get("window");

export function solidColor(shapeColor) {
  return {
    backgroundColor: shapeColor || "#ba75df"
  };
}

export function _position(position) {
  if (!position) {
    return {
      ...Platform.select({
        ios: {
          ...ifIphoneX(
            {
              top: height * -0.17
            },
            {
              top: height * -0.25
            }
          )
        },
        android: {
          top: height * -0.185
        }
      })
    };
  }
  return position;
}

export default {
  main: {
    width,
    height: width,
    alignSelf: "center",
    position: "absolute",
    alignContent: "center",
    borderRadius: width / 2,
    transform: [{ scaleX: 2 }, { scaleY: 0.5 }]
  },
  customShadowStyle: {
    shadowRadius: 3,
    shadowOpacity: 0.3,
    shadowColor: "#595959",
    shadowOffset: { width: 0, height: 2 }
  }
};
