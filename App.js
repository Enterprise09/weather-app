import { StatusBar } from 'expo-status-bar';
import { Alert } from 'react-native';
import React from 'react';
import Loading from './Loading';
import * as Location from "expo-location"

export default class extends React.Component{
  state = {
    isLoading: true,
  }
  getLocation = async()=> {
    try {
      await Location.requestBackgroundPermissionsAsync();
      const {
        coords: {latitude, longitude}
      } = await Location.getCurrentPositionAsync();
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

