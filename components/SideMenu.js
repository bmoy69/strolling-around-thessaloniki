import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';
import AppFont from "../constants/AppFont.js";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default class DrawerContainer extends React.Component {
    state = {
      language: false,
      search: false,
      museums: false,
      churches: false,
      sculptures: false,
      landmarks: false,
      buildings: false,
      unesco: false,
      map: false,
      corrossion: false
    }  

  render() {
    const { navigation } = this.props
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container}>
          <Image
            source={require('../assets/images/menubackground.jpg')}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '30%',
              resizeMode: 'stretch'
            }} />

            <View style={[styles.drawerItem, {borderTopWidth:0}, {backgroundColor: !this.state.language?'white':'lightblue'}]}>
              <View style={styles.drawerIcon}>
                <MaterialIcons name="language" size={25} color="#333" />
              </View>
              <Text
                onPress={() => {
                    this.setState({ language: true });
                    navigation.navigate('Homepage');
                    navigation.closeDrawer();
                    setTimeout(() => {
                      this.setState({ language: false });
                    }, 1000)
                  }
                }
                style={styles.drawerText}>
                {language==='gr'?'Γλώσσα':'Language'}
              </Text>
            </View>

            <View style={[styles.drawerItem, {backgroundColor: !this.state.search?'white':'lightblue'}]}>
              <View style={styles.drawerIcon}>
                <Feather name="search" size={25} color="#333" />
              </View>
              <Text
                onPress={() => {
                  this.setState({ search: true });
                  navigation.navigate('Searching')
                  navigation.closeDrawer();
                  setTimeout(() => {
                    this.setState({ search: false });
                  }, 1000)
                 }
                } 

                style={styles.drawerText}>
                {language==='gr'?'Αναζήτηση':'Search'}
              </Text>
            </View>

            <View style={[styles.drawerItem, {backgroundColor: !this.state.museums?'white':'lightblue'}]}>
              <Image  source={require('../assets/markers/museumsMarker.png')}
                      style={styles.drawerImage} />
            <Text
              onPress={() => {
                this.setState({ museums: true });
                navigation.navigate('ShowMuseums')
                navigation.closeDrawer();
                setTimeout(() => {
                  this.setState({ museums: false });
                }, 1000)
               }
              } 
            style={styles.drawerText}>
              {language==='gr'?' Μουσεία':' Museums'}
            </Text>
            </View>

            <View style={[styles.drawerItem, {backgroundColor: !this.state.churches?'white':'lightblue'}]}>
            <Image  source={require('../assets/markers/churchesMarker.png')}
                    style={styles.drawerImage} />
              <Text
              onPress={() => {
                this.setState({ churches: true });
                navigation.navigate('ShowChurches')
                navigation.closeDrawer();
                setTimeout(() => {
                  this.setState({ churches: false });
                }, 1000)
               }
              } 
              style={styles.drawerText}>
                {language==='gr'?' Εκκλησίες':' Churches'}
              </Text>
            </View>

            <View style={[styles.drawerItem, {backgroundColor: !this.state.sculptures?'white':'lightblue'}]}>
              <Image  source={require('../assets/markers/sculpturesMarker.png')}
                      style={styles.drawerImage} />
              <Text
              onPress={() => {
                this.setState({ sculptures: true });
                navigation.navigate('ShowSculptures')
                navigation.closeDrawer();
                setTimeout(() => {
                  this.setState({ sculptures: false });
                }, 1000)
               }
              } 
              style={styles.drawerText}>
              {language==='gr'?' Γλυπτική':' Sculptures'}
            </Text>
            </View>


            <View style={[styles.drawerItem, {backgroundColor: !this.state.landmarks?'white':'lightblue'}]}>
              <Image  source={require('../assets/markers/landmarksMarker.png')}
                      style={styles.drawerImage} />
              <Text
              onPress={() => {
                this.setState({ landmarks: true });
                navigation.navigate('ShowLandmarks')
                navigation.closeDrawer();
                setTimeout(() => {
                  this.setState({ landmarks: false });
                }, 1000)
               }
              } 
              style={styles.drawerText}>
              {language==='gr'?' Τοπόσημα':' Landmarks'}

            </Text>
            </View>

            <View style={[styles.drawerItem, {backgroundColor: !this.state.buildings?'white':'lightblue'}]}>
              <Image  source={require('../assets/markers/buildingsMarker.png')}
                      style={styles.drawerImage} />
              <Text
              onPress={() => {
                this.setState({ buildings: true });
                navigation.navigate('ShowBuildings')
                navigation.closeDrawer();
                setTimeout(() => {
                  this.setState({ buildings: false });
                }, 1000)
               }
              } 
              style={styles.drawerText}>
              {language==='gr'?' Κτίρια':' Buildings'}
            </Text>
            </View>

            <View style={[styles.drawerItem, {backgroundColor: !this.state.unesco?'white':'lightblue'}]}>
              <Image  source={require('../assets/markers/unescoMarker.png')}
                      style={styles.drawerImage} />
              <Text
              onPress={() => {
                this.setState({ unesco: true });
                navigation.navigate('ShowUnesco')
                navigation.closeDrawer();
                setTimeout(() => {
                  this.setState({ unesco: false });
                }, 1000)
               }
              } 
              style={styles.drawerText}>
              {language==='gr'?' Μνημεία Unesco':' Unesco monuments'}
            </Text>
            </View>

            <View style={[styles.drawerItem, {backgroundColor: !this.state.map?'white':'lightblue'}]}>
              <View style={styles.drawerIcon}>
                <Feather name="map" size={25} color="#333" />
              </View>
            <Text
              onPress={() => {
                this.setState({ map: true });
                navigation.navigate('Map')
                navigation.closeDrawer();
                setTimeout(() => {
                  this.setState({ map: false });
                }, 1000)
               }
              } 
              style={styles.drawerText}>
              {language==='gr'?'Χάρτης':'Map'}
            </Text>
            </View>

            <View style={[styles.drawerItem, {backgroundColor: !this.state.corrossion?'white':'lightblue'}]}>
              <View style={styles.drawerIcon}>
                <Entypo name="round-brush" size={25} color="#333" />
              </View>
              <Text
              onPress={() => {
                this.setState({ corrossion: true });
                navigation.navigate('Maintenance')
                navigation.closeDrawer();
                setTimeout(() => {
                  this.setState({ corrossion: false });
                }, 1000)
               }
              } 
                style={styles.drawerText}>
                {language==='gr'?'Διάβρωση':'Corrosion'}
              </Text>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  drawerItem: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: .6,
  },
  drawerIcon: {
    marginLeft:17,
    flex:1,
  },
  drawerImage: {
    marginLeft:11,
    flex:1,
    height: 37,
    resizeMode: 'contain',
  },
  drawerText: {
    fontFamily: AppFont,
    fontSize: 18,
    color: '#333',
    borderColor: '#333',
    opacity: 0.7,
    flex: 7,
  }
})
