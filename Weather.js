import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Proptypes from "prop-types";

//  stateless 컴포넌트 작성 예정
export default function Weather({ temp, name, condition }) {
  return (
    <View style={styles.container}>
      <Text>온도 : {temp}</Text>
      <Text>위치 : {name}</Text>
      <Text>날씨 : {condition}</Text>
    </View>
  );
}

Weather.Proptypes = {
  temp: Proptypes.number.isRequired,
  name: Proptypes.string.isRequired,
  condition: Proptypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atomosphere",
    "Clear",
    "Clouds",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
