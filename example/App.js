import React, { Component } from "react";
import { StyleSheet, StatusBar, Text, View } from "react-native";
import GradientHeader from "react-native-gradient-header";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <GradientHeader
          subtitle="Have a nice day Kuray"
          imageSource={require("./assets/profile.jpg")}
          gradientColors={["#7F7FD5", "#86A8E7", "#91EAE4"]}
        />
        <Text style={styles.welcome}>Welcome to React Native!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  welcome: {
    margin: 16,
    fontSize: 20,
    textAlign: "center"
  }
});
