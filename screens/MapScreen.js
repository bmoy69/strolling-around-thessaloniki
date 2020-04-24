import React from 'react';
import { ActivityIndicator, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import MapView, { Polyline } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import mapMarkers from '../constants/mapmarkers.js';
import commonHeaderTitleStyle from "../constants/HeaderTitleStyle.js";
import Slider from 'react-native-slider';
import Modal from 'react-native-modal';
import { getDistance, isPointWithinRadius } from 'geolib';

import 'prop-types'; // Version can be specified in package.json
import info from '../constants/info.js';

const MAX_RADIUS = 5000;
const INITIAL_RADIUS = 5001;
const INITIAL_LATITUDE = 40.640063;
const INITIAL_LONGITUDE = 22.944419;

const GEOLOCATION_OPTIONS = { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 };

export default class MapScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
      return {
        title: language==='gr'?'Χάρτης':'Map',
        headerTitleStyle: commonHeaderTitleStyle,
        headerLeft: (
        <TouchableOpacity  style={{marginLeft: 15}} onPress={ () => navigation.openDrawer()}>
           <Ionicons name="ios-menu" size={35} color="#483148"/>
        </TouchableOpacity>),
        headerRight: (
          <TouchableOpacity  style={{marginRight: 15}} onPress={ () => navigation.state.params.modal() }>
             <Ionicons name="ios-cog" size={35} color="#483148"/>
          </TouchableOpacity>),
        };
  };

  constructor(props) {
    super(props);
    this.state = {
      location: { coords: {latitude: 0, longitude: 0}},
      regionLat: INITIAL_LATITUDE, 
      regionLon: INITIAL_LONGITUDE, 
      markers: mapMarkers,
      radius: INITIAL_RADIUS,
      filteredBy : null,
      modalVisible: false,
      path: null,
    }
  }

  componentDidMount() {
    this._getLocationAsync();
    Location.watchPositionAsync(GEOLOCATION_OPTIONS, this.locationChanged);
    this.props.navigation.setParams({ modal: this.handleModal });
  }

  handleModal = () => {
    this.setState( {modalVisible: !this.state.modalVisible });
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

  showThisMonument(MonumentKey){
    this.props.navigation.navigate(
      'ShowThisMonument',
      { MonumentKey },
    );
  }
  

  filterTheMap = (category, path) => {
    const showAll = path || this.state.radius > MAX_RADIUS;
    let tempMarkers = [];

    if (path || this.state.radius > MAX_RADIUS){
      this.setState({ 
        regionLat : INITIAL_LATITUDE,
        regionLon : INITIAL_LONGITUDE
       });
    } else {
      this.setState({ 
        regionLat : this.state.location.coords.latitude,
        regionLon : this.state.location.coords.longitude
       });
    }

    // narrow down by radius if necessary
    if (showAll){
      tempMarkers = [...mapMarkers];
    } else {
      tempMarkers = mapMarkers.filter( marker => {
        return isPointWithinRadius(
          marker.coordinates, 
          { latitude: this.state.location.coords.latitude, longitude: this.state.location.coords.longitude},
          this.state.radius)});
    }

    // check whether category was defined and update filteredBy property
    if (category){
      if (category === this.state.filteredBy){
        this.setState({ filteredBy: null})
      } else {
        this.setState({ filteredBy: category})
      }
    } else if (!path) {
      this.setState({ filteredBy: null})
    }

    // apply filter if defined
    if (!category) {                              // category is null      
      if (!this.state.filteredBy || !path){     
        this.setState({ markers: tempMarkers });
      } else {                          
        this.setState({ markers: tempMarkers.filter(marker => marker.type.includes(this.state.filteredBy)) });
      }  
    } else {                                      // category selected
      if (this.state.filteredBy === category){     
        this.setState({ markers: tempMarkers });
      } else {                                                                
        this.setState({ markers: tempMarkers.filter(marker => marker.type.includes(category)) });
      }
    }
    
    if (path){
      const coordinates = Object.values(info)
        .filter(monument => monument.type.includes(category))
        .sort((a, b) => a.path > b.path)
        .map(marker => {
          return {
            latitude: marker.coordinates.latitude,
            longitude: marker.coordinates.longitude
          }
        });
      this.setState({ path: coordinates});
    } else {
      this.setState({ path: null });
    }

    this.setState({ modalVisible: false });      // Close the modal box
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <MapView
          style={styles.map}
          showsUserLocation = {true}
          region={{
            latitude: this.state.regionLat,
            longitude: this.state.regionLon,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }} >
          {this.state.markers.map((marker) => (
            <MapView.Marker
              key={marker.key}
              coordinate={marker.coordinates}
              title={language==='gr'?marker.title:marker.titleEN}
              description={
                language==='gr'?`Απόσταση: ${getDistance(this.state.location.coords,marker.coordinates)}m - Περισσότερα...`:`Distance: ${getDistance(this.state.location.coords,marker.coordinates)}m - More...`
              }
              onCalloutPress={() => this.showThisMonument(marker.key)}
              image={marker.marker}
            />
          ))}
          {this.state.path && <Polyline
            coordinates={this.state.path}
        		strokeColor="#00f" 
        		strokeWidth={5}
	        />}
        </MapView>
        <Modal 
            transparent={true}
            visible={this.state.modalVisible}
            animationType='slide'
            onBackdropPress={ () => this.setState({ modalVisible: false })}
            >
          <View style={styles.modalOuterView}>
            <View style={styles.modalSliderOuterView}>
              <View style={styles.modalSliderView}>
                <Text style={styles.modalSliderText}>
                    Εμφάνισε {this.state.radius > MAX_RADIUS ? "όλα τα μνημεία" : `σε ακτίνα ${this.state.radius} m`}
                </Text>
                <Slider
                  minimumValue={100}
                  maximumValue={MAX_RADIUS+1}
                  value={this.state.radius}
                  step={100}
                  onValueChange={newValue => this.setState({ radius: newValue })}
                  onSlidingComplete={() => this.filterTheMap(null)}
                />
              </View>
            </View>
            <View style={styles.modalInnerView}>
              <Text style = {{ fontSize: 20, color: 'white', marginBottom: 10 }}>
                Κατηγορίες
              </Text>
              <TouchableOpacity
                style={[styles.topbar,{backgroundColor: this.state.filteredBy === 'sculpture'? 'lightgreen':'lightblue'}]}
                onPress={ ()=> this.filterTheMap('sculpture', false) }
              >
                <Text style={ styles.topBarText }>
                  {language==='gr'?"Γλυπτά":"Sculptures"}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.topbar,{backgroundColor: this.state.filteredBy === 'museum'? 'lightgreen':'lightblue'}]}
                onPress={ ()=> this.filterTheMap('museum', false) }
            >
                <Text style={ styles.topBarText }>
                  {language==='gr'?"Μουσεία":"Museums"}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.topbar,{backgroundColor: this.state.filteredBy === 'building'? 'lightgreen':'lightblue'}]}
                onPress={ ()=> this.filterTheMap('building', false) }
            >
                <Text style={ styles.topBarText }>
                  {language==='gr'?"Κτίρια":"Buildings"}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.topbar,{backgroundColor: this.state.filteredBy === 'landmark'? 'lightgreen':'lightblue'}]}
                onPress={ ()=> this.filterTheMap('landmark', false) }
            >
                <Text style={ styles.topBarText }>
                  {language==='gr'?"Τοπόσημα":"Landscapes"}               
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.topbar,{backgroundColor: this.state.filteredBy === 'church'? 'lightgreen':'lightblue'}]}
                onPress={ ()=> this.filterTheMap('church', false) }
            >
                <Text style={ styles.topBarText }>
                  {language==='gr'?"Εκκλησίες":"Churches"}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.topbar,{backgroundColor: this.state.filteredBy === 'unesco'? 'lightgreen':'lightblue'}]}
                onPress={ ()=> this.filterTheMap('unesco', false) }
            >
                <Text style={ styles.topBarText }>
                  Unesco
                </Text>
            </TouchableOpacity>
            <Text style = {{ fontSize: 20, color: 'white', marginBottom: 10, marginTop: 15 }}>
                Διαδρομές
              </Text>
            <TouchableOpacity
                style={[styles.topbar,{backgroundColor: this.state.filteredBy === 'ottoman'? 'lightgreen':'lightblue'}]}
                onPress={ ()=> this.filterTheMap('ottoman', !this.state.path) }
            >
                <Text style={ styles.topBarText }>
                  Οθωμανική
                </Text>
            </TouchableOpacity>
           </View>
          </View>
        </Modal>
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
  topbar: {
    height: 35,
    width:130,
    justifyContent: 'center',
    borderRadius: 5,
    opacity: 0.7,
    flexDirection: "row",
    alignItems:"center",
    paddingHorizontal: 3,
    borderWidth:0.2,
    margin: 2,
  },
  topBarText: {
    fontSize: 18,
    justifyContent: 'center',
  },
  modalOuterView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'rgba(52, 52, 52, 0)',
  },
  modalInnerView: {
    alignItems: 'center',
    width: 250,
    height: 400,
    backgroundColor:'rgba(52, 52, 52, 0.8)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,  },
  modalSliderOuterView: {    
    width: 250, 
    backgroundColor:'rgba(52, 52, 52, 0.8)',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalSliderView: {
    marginLeft: 10,
    justifyContent: 'center',
    width: 230,  
  },
  modalSliderText: {
    color:'white', 
    fontSize: 18,
    marginTop: 20,
    justifyContent: 'center',
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
     backgroundColor: 'lightyellow',
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
