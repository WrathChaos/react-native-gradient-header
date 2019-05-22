import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export default {
  container: {
    width,
    marginTop: 8,
    flexDirection: "row"
  },
  leftContainer: {
    left: 16
  },
  dateTextStyle: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold"
  },
  saluteTextStyle: {
    fontSize: 14,
    color: "white",
    fontWeight: "500"
  },
  rightContainer: {
    right: 16,
    position: "absolute",
    flexDirection: "row"
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
