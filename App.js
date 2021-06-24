import { StatusBar } from 'expo-status-bar';
import { Alert } from 'react-native';
import React from 'react';
import Loading from './Loading';
import * as Location from "expo-location"
import axios from 'axios';

const API_KEY = "422caf1114fed313af799fb184b2f130";

export default class extends React.Component{
  state = {
    isLoading: true,
  };
  getWeather = async()=>{
    const {data} = await axios.get()
  };
  getLocation = async()=> {
    try {
      await Location.requestBackgroundPermissionsAsync();
      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({isLoading: true});
    } catch (error) {
      Alert.alert("Can't find you.", "So Sad");
    } 
  };

  componentDidMount(){
    this.getLocation();
  }

  render(){
    const { isLoading } = this.state;
    return isLoading ? <Loading/> : null;
  }
}

