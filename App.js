import React from "react";
import { Alert } from "react-native";
import Loading from "./loading";
import Weather from "./Weather";
import * as Location from "expo-location";
import axios from "axios";

// 날씨 API_KEY 추가
const API_KEY = "01e150601beef24ea1aff42223f367a6";

export default class extends React.Component {
  state = {
    isLoading: true,
  };
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    console.log(data);
    console.log(data.main.temp);
    this.setState({
      isLoading: false,
      temp: data.main.temp,
      name: data.name,
      condition: data.weather[0].main,
    });
    console.log(this.state);
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, name, condition } = this.state;
    return isLoading ? (
      <Loading />
    ) : (
      <Weather temp={Math.floor(temp)} name={name} condition={condition} />
    );
  }
}
