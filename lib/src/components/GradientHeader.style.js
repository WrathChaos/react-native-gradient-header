import { Platform } from "react-native";

export function _shadowStyle(shadowColor) {
  return {
    ...Platform.select({
      ios: {
        shadowRadius: 4.65,
        shadowColor: shadowColor,
        shadowOpacity: 0.29,
        shadowOffset: {
          width: 0,
          height: 3
        }
      },
      android: {
        elevation: 7
      }
    })
  };
}

export default {
  container: {
    top: 0,
    position: "absolute"
  }
};
