import { Dimensions, Platform } from "react-native";
import colors from "../styles/colors";

const { width, height } = Dimensions.get("window");

export default {
  shape: {
    main: {
      width,
      height: width,
      alignSelf: "center",
      position: "absolute",
      alignContent: "center",
      borderRadius: width / 2,
      transform: [{ scaleX: 2 }, { scaleY: 0.5 }],
      ...Platform.select({
        ios: {
          bottom: height * 0.7
        },
        android: {
          bottom: height * 0.75
        }
      })
    },
    customShadowStyle: {
      shadowRadius: 3,
      shadowOpacity: 0.3,
      shadowColor: colors.light.shadowColor,
      shadowOffset: { width: 0, height: 2 }
    }
  }
};
