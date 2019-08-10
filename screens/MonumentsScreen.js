import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, FlatList, Modal, TouchableHighlight, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MonumentButton from '../components/MonumentButton.js';
import info from '../constants/info.js';
import images from '../constants/images.js';
import titlesBuildings from '../constants/titlesBuildings.js';
import titlesEnBuildings from '../constants/titlesEnBuildings.js';
import titlesChurches from '../constants/titlesChurches.js';
import titlesEnChurches from '../constants/titlesEnChurches.js';
import titlesLandmarks from '../constants/titlesLandmarks.js';
import titlesEnLandmarks from '../constants/titlesEnLandmarks.js';
import titlesMuseums from '../constants/titlesMuseums.js';
import titlesEnMuseums from '../constants/titlesEnMuseums.js';
import titlesSculptures from '../constants/titlesSculptures.js';
import titlesEnSculptures from '../constants/titlesEnSculptures.js';
import titlesUnesco from '../constants/titlesUnesco.js';
import titlesEnUnesco from '../constants/titlesEnUnesco.js';
import titlesAll from '../constants/titlesAll.js';
import titlesEnAll from '../constants/titlesEnAll.js';
import commonHeaderTitleStyle from "../constants/HeaderTitleStyle.js";
import AppFont from "../constants/AppFont.js";


export default class MonumentsScreen extends React.Component {

  constructor(props)
  {
    super(props);    
    this.state = {
      currentChoice: this.props.navigation.getParam('choice',"Θεσσαλονίκη"),
      reloadScreen: true,
    };

    this.state.currentChoice==='Μουσεία' ? (language==='gr'? this.state = {FlatListItems: titlesMuseums} : this.state = {FlatListItems: titlesEnMuseums}) :
    (this.state.currentChoice==='Εκκλησίες' ? (language==='gr'? this.state = {FlatListItems: titlesChurches} : this.state = {FlatListItems: titlesEnChurches}) :
    (this.state.currentChoice==='Γλυπτική' ? (language==='gr'? this.state = {FlatListItems: titlesSculptures} : this.state = {FlatListItems: titlesEnSculptures}) :
    (this.state.currentChoice==='Τοπόσημα' ? (language==='gr'? this.state = {FlatListItems: titlesLandmarks} : this.state = {FlatListItems: titlesEnLandmarks}) :
    (this.state.currentChoice==='Κτίρια' ? (language==='gr'? this.state = {FlatListItems: titlesBuildings} : this.state = {FlatListItems: titlesEnBuildings}) :
    (this.state.currentChoice==='Μνημεία Unesco' ? (language==='gr'? this.state = {FlatListItems: titlesUnesco} : this.state = {FlatListItems: titlesEnUnesco}) :
                                             (language==='gr' ?this.state = {FlatListItems: titlesAll} : this.state = {FlatListItems: titlesEnAll})))))) ;
  }

  static navigationOptions = ({navigation}) => {
      let screenTitle = navigation.getParam('choice','Θεσσαλονίκη');
      if (language==='en'){
        switch(navigation.getParam('choice')) {
        case 'Μουσεία':
          screenTitle = 'Museums';
          break;
        case 'Εκκλησίες':
          screenTitle = 'Churches';
          break;
        case 'Γλυπτική':
          screenTitle = 'Sculptures';
          break;
        case 'Τοπόσημα':
          screenTitle = 'Landmarks';
          break;
        case 'Κτίρια':
          screenTitle = 'Buildings';
          break;
        case 'Μνημεία Unesco':
          screenTitle = 'Unesco monuments';
          break;
        default:
          screenTitle = 'Thessaloniki';
        }
      }
      return {
        title: screenTitle,
        headerTitleStyle: commonHeaderTitleStyle,
        headerLeft: (
        <TouchableOpacity  style={{marginLeft: 15}} onPress={ () => navigation.openDrawer()}>
           <Ionicons name="ios-menu" size={35} color="#483148"/>
        </TouchableOpacity>),
      };
  };

FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0,
          width: "100%",
          backgroundColor: "#607D8B",
          marginTop: 5,
        }}
      />
    );
  }

 ShowThisMonument(MonumentKey){
   this.props.navigation.navigate(
     'ShowThisMonument',
     { MonumentKey, comingFrom :'' },
   );
 }

  render() {

  return (
      <View style={styles.container}>
        <FlatList
          data={ this.state.FlatListItems }
          ItemSeparatorComponent = {this.FlatListItemSeparator}
          renderItem={({item}) =>
            <MonumentButton
              onPress = {() =>this.ShowThisMonument(item.key)}
              caption = {item.title}
              theImage = {images[item.key]}
            />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      justifyContent: 'center',
      flex:1,
      paddingTop: 7,
      paddingBottom: 7,
      backgroundColor: 'lightgrey',
  },
  monument: {
    flex:1,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightyellow',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'red',
    marginLeft:10,
    marginRight:10,
   },
  item: {
    flex:3,
    padding: 10,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: AppFont,
  },
 image: {
    flex: 1,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 10,
    backgroundColor: 'lightyellow',
    marginLeft:10,
  },
  title: {
    borderTopWidth:1,
    borderBottomWidth:1,
    backgroundColor: 'lightgrey',
    width:360,
    alignItems: 'center',
  },
});
