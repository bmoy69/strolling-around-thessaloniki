import React from 'react';
import { StyleSheet, View, Text, Modal, ScrollView, TouchableHighlight, TouchableOpacity, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';

import images from '../constants/images.js';
import mapMarkers from '../constants/mapmarkers.js';
import AppFont from "../constants/AppFont.js";
import commonHeaderTitleStyle from "../constants/HeaderTitleStyle.js";

import 'prop-types'; // Version can be specified in package.json

const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };

export default class MapSingleScreen extends React.Component {

  static navigationOptions = ({navigation}) => {
      return {
        title: navigation.state.params.MapTitle,
        headerTitleStyle: commonHeaderTitleStyle,
      };
  };

  constructor(props) {
    super(props);
    this.state = {
      location: { coords: {latitude: 0, longitude: 0}},
      markers: mapMarkers,
    }
  }

  componentDidMount() {
    this._getLocationAsync();
    Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          showsUserLocation = {true}
          showsMyLocationButton={true}
          initialRegion={{
            latitude: this.props.navigation.state.params.MapLatitude,
            longitude: this.props.navigation.state.params.MapLongitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
            <MapView.Marker
              coordinate={{
                latitude: this.props.navigation.state.params.MapLatitude,
                longitude: this.props.navigation.state.params.MapLongitude,
              }}
              title={this.props.navigation.state.params.MapTitle}
            />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container :{
      justifyContent: 'center',
      flex:1,
      paddingTop: 7,
      backgroundColor: 'lightgrey',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  backText: {
     width: 100,
     fontSize: 16,
     fontWeight: 'bold',
     padding:5,
     backgroundColor: 'lightblue',
   },
   upperSpace: {
     alignItems: 'center',
     // backgroundColor: 'lightyellow',
     padding:10,
   },
   title: {
     borderTopWidth:1,
     borderBottomWidth:1,
     backgroundColor: 'lightgrey',
     width:360,
     alignItems: 'center',
   },
   titleText: {
     fontWeight: 'bold',
     fontSize: 22,
     padding:10,
   },
   monumentInfo: {
     paddingTop:5,
     paddingBottom:10,
     backgroundColor: 'lightgrey',
     borderTopWidth:1,
     borderBottomWidth:1,
     borderColor: 'grey',
   },
   other: {
     fontSize: 20,
     paddingTop:5,
     paddingLeft:8,
     paddingRight:8,
   },
   description: {
     fontSize: 18,
     padding:20,
   },
 });
