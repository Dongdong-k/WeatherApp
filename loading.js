import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loading() {
  return (
    <View style={sytles.container}>
      <Text style={sytles.text}>We are getting the Weather</Text>
    </View>
  );
}

const sytles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end", // 내용 아래로 정렬
    backgroundColor: "#FDF6AA",
    paddingHorizontal: 30, // HTML CSS에는 없는 내용
    paddingVertical: 100, // HTML CSS에는 없는 내용
  },
  text: {
    color: "#2c2c2c",
    fontSize: 30, //20px 입력시 "20px" 입력하기, 그냥 정수만 적으면 알아서 px로 인식해줌
  },
});
