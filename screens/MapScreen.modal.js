import React from 'react';
import { StyleSheet, View, Text, Modal, ScrollView, TouchableHighlight, TouchableOpacity, Image } from 'react-native';
import MapView from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';

import images from '../constants/images.js';
import info from '../constants/info.js';

import 'prop-types'; // Version can be specified in package.json

export default class MapScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
      return {
        title: "Χάρτης",
        headerLeft: (
        <TouchableOpacity  style={{marginLeft: 15}} onPress={ () => navigatinavigation.openDrawer()}>
           <Ionicons name="ios-menu" size={35} color="#483148"/>
        </TouchableOpacity>),
      };
  };


  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      currentKey:"1",
      markers: [
      {
        key:'1',
        title: info[1].title,
        description: 'Περισσότερα...',
        coordinates: {
          latitude: info[1].coordinates.latitude,
          longitude: info[1].coordinates.longitude
        },
      },
      {
        key:'2',
        title: info[2].title,
        description: 'Περισσότερα...',
        coordinates: {
          latitude: info[2].coordinates.latitude,
          longitude: info[2].coordinates.longitude
        },
      },
      {
        key:'3',
        title: info[3].title,
        description: 'Περισσότερα...',
        coordinates: {
          latitude: info[3].coordinates.latitude,
          longitude: info[3].coordinates.longitude
        },
      },
      {
        key:'4',
        title: info[4].title,
        description: 'Περισσότερα...',
        coordinates: {
          latitude: info[4].coordinates.latitude,
          longitude: info[4].coordinates.longitude
        },
      },
      {
        key:'5',
        title: info[5].title,
        description: 'Περισσότερα...',
        coordinates: {
          latitude: info[5].coordinates.latitude,
          longitude: info[5].coordinates.longitude
        },
      },
      {
        key:'6',
        title: info[6].title,
        description: 'Περισσότερα...',
        coordinates: {
          latitude: info[6].coordinates.latitude,
          longitude: info[6].coordinates.longitude
        },
      },
      {
        key:'7',
        title: info[7].title,
        description: 'Περισσότερα...',
        coordinates: {
          latitude: info[7].coordinates.latitude,
          longitude: info[7].coordinates.longitude
        },
      },
      {
        key:'8',
        title: info[8].title,
        description: 'Περισσότερα...',
        coordinates: {
          latitude: info[8].coordinates.latitude,
          longitude: info[8].coordinates.longitude
        },
      },
      {
        key:'9',
        title: info[9].title,
        description: 'Περισσότερα...',
        coordinates: {
          latitude: info[9].coordinates.latitude,
          longitude: info[9].coordinates.longitude
        },
      },
      {
        key:'10',
        title: info[10].title,
        description: 'Περισσότερα...',
        coordinates: {
          latitude: info[10].coordinates.latitude,
          longitude: info[10].coordinates.longitude
        },
      },
      {
        key:'11',
        title: info[11].title,
        description: 'Περισσότερα...',
        coordinates: {
          latitude: info[11].coordinates.latitude,
          longitude: info[11].coordinates.longitude
        },
      },
      {
        key:'12',
        title: info[12].title,
        description: 'Περισσότερα...',
        coordinates: {
          latitude: info[12].coordinates.latitude,
          longitude: info[12].coordinates.longitude
        },
      },
   ],
    }
  }

  showMonument(theKey) {
      this.setState({ modalVisible: true })
      this.setState({ currentKey: theKey})
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          showsUserLocation = {true}
          initialRegion={{
            latitude: 40.640063,
            longitude: 22.944419,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {this.state.markers.map(marker => (
            <MapView.Marker
              coordinate={marker.coordinates}
              title={marker.title}
              description={marker.description}
              onCalloutPress={() => this.showMonument(marker.key)}
            />
        ))}
        </MapView>
        <Modal
              animationType="slide"
              transparent={false}
              visible={this.state.modalVisible}
              >

             <View style={{marginTop: 22}}>
              <View>
              <ScrollView stickyHeaderIndices={[0]}>
                <TouchableHighlight style={styles.backButton} onPress={() => {
                  this.setState({ modalVisible: false })}}>
                  <Text style={styles.backText} > &laquo;  Χάρτης</Text>
                </TouchableHighlight>
                  <View style={styles.upperSpace}>
                    <View style={styles.title}>
                     <Text style={styles.titleText}>
                      {info[this.state.currentKey].title}
                     </Text>
                    </View>
                    <Image
                      style={styles.bigImage}
                      source={images[this.state.currentKey]}
                    />
                  </View>
                  <View style={styles.monumentInfo}>
                    <Text style={styles.other}>
                      Θεματική κατηγορία: {info[this.state.currentKey].category}
                    </Text>
                    <Text style={styles.other}>
                      Όνομα γλύπτη: {info[this.state.currentKey].sculpturist}
                    </Text>
                    <Text style={styles.other}>
                      Φορέας ανάθεσης: {info[this.state.currentKey].carrier}
                    </Text>
                    <Text style={styles.other}>
                      Χρονολογία εγκατάστασης: {info[this.state.currentKey].year}
                    </Text>
                    <Text style={styles.other}>
                      Τοποθεσία: {info[this.state.currentKey].location}
                    </Text>
                  </View>
                  <Text style={styles.description}>
                      {info[this.state.currentKey].description}
                  </Text>
              </ScrollView>
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
