import { iOSColors, iOSUIKit } from "react-native-typography";

export default {
  leftContainer: {
    left: 16,
    marginTop: 48
    // alignItems: "flex-start"
  },
  dateTextStyle: {
    ...iOSUIKit.largeTitleEmphasized,
    color: iOSColors.white
  },
  saluteTextStyle: {
    ...iOSUIKit.footnoteEmphasizedObject,
    color: iOSColors.white
  },
  rightContainer: {
    bottom: 0,
    right: 16,
    flexDirection: "row",
    position: "absolute"
  },
  ticketImageStyle: {
    top: 8,
    right: 20,
    width: 35,
    height: 35
  },
  myProfileImageStyle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2
  }
};
