import React, { Component } from "react";
import { StyleSheet, StatusBar, Text, View } from "react-native";
import GradientHeader from "./lib/src/components/GradientHeader";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <GradientHeader
          gradient
          title="Title"
          subtitle="Have a nice day Kuray"
          gradientColors={["#00416A", "#E4E5E6"]}
          imageSource={require("./assets/profile.jpg")}
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
