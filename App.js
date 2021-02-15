import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up App.js to start working on your app!
      </Text>
      <Text style={styles.text}>안드로이드 에뮬레이터 실행 불가...</Text>
      <StatusBar style="auto" />
      <View style={styles.yellowView}>
        <Text>yellowView</Text>
      </View>
      <View style={styles.blueView}>
        <Text>blueView</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
    alignItems: "center", // 가운데 정렬 & 컨텐츠 크기에 영역을 맞춰줌
    justifyContent: "center",
  },
  text: {
    color: "blue",
    alignItems: "center",
    backgroundColor: "red",
  },
  yellowView: {
    flex: 1,
    backgroundColor: "yellow",
  },
  blueView: {
    flex: 9,
    backgroundColor: "blue",
  },
});
