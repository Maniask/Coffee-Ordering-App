import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import MapView, {Marker} from 'react-native-maps'
import Geolocation from 'react-native-geolocation-service'

import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';



export default class SettingsScreen extends Component {

  state={
    coordinate:{
      latitude: 26.873192,
      longitude: 75.758905,
    },
    marginBottom:1
  }


  render() {
    let {latitude, longitude} = this.state.coordinate;
    return (
      <MapView
        style={{ ...StyleSheet.absoluteFillObject }}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: .005,
          longitudeDelta: .005
        }} 
        showsUserLocation={true}
        showsMyLocationButton={true}
        // onPress={(e)=>{this.setState({
        //   coordinate: e.nativeEvent.coordinate
        //   })
        // }}
        onRegionChangeComplete = {(region)=>this.setState({coordinate: region})}
        onMapReady = {()=>{this.setState({marginBottom:0})}}
      >
        
        <Marker
        coordinate={{ latitude, longitude }}
        title="Mayvin's Cafe "
        description='Where the magic happens!'
        />
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map:{
    ...StyleSheet. absoluteFillObject
  }
})