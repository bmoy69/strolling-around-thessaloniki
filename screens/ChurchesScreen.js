import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Image, FlatList, Modal, TouchableHighlight, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MonumentButton from '../components/MonumentButton.js';
import images from '../constants/images.js';
import titlesChurches from '../constants/titlesChurches.js';
import titlesEnChurches from '../constants/titlesEnChurches.js';
import commonHeaderTitleStyle from "../constants/HeaderTitleStyle.js";
import AppFont from "../constants/AppFont.js";


export default class ChurchesScreen extends React.Component {

  constructor(props)
  {
    super(props);    
    language==='gr'? this.state = {FlatListItems: titlesChurches} : this.state = {FlatListItems: titlesEnChurches}
  }

  static navigationOptions = ({navigation}) => {
      return {
        title: language==='gr'?'Εκκλησίες':'Churches',
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
