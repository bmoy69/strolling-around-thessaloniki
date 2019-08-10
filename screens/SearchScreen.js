import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TextInput, Image, FlatList, Modal, TouchableHighlight, ScrollView } from 'react-native';
import SearchableFlatlist from "searchable-flatlist";
import { Ionicons } from '@expo/vector-icons';
import MonumentButton from '../components/MonumentButton.js';
import info from '../constants/info.js';
import images from '../constants/images.js';
import titlesAll from '../constants/titlesAll.js';
import titlesEnAll from '../constants/titlesEnAll.js';
import commonHeaderTitleStyle from "../constants/HeaderTitleStyle.js";
import AppFont from "../constants/AppFont.js";


export default class MonumentsScreen extends React.Component {
  state = { searchTerm: "" };

  constructor(props)
  {
    super(props);
    this.state = {
      FlatListItems: (language==='gr' ? titlesAll : titlesEnAll),
      searchTerm : "",
    };
  }

  static navigationOptions = ({navigation}) => {
      return {
        title: (language==='gr' ? "Αναζήτηση" : "Search"),
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
     'SearchShowThisMonument',
     { MonumentKey, comingFrom :'Search' },
   );
 }

  render() {

  return (
    //let { sContainer, sSearchBar, sTextItem } = styles;

      <View style={styles.container}>
        <TextInput
          placeholder={(language==='gr' ? "π.χ. Μέγας Αλέξανδρος" : "e.g. Alexander the great")}
          style={styles.sSearchBar}
          onChangeText={searchTerm => this.setState({ searchTerm })}
        />
        <SearchableFlatlist
          searchProperty={"title"}
          searchTerm={this.state.searchTerm}
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
      backgroundColor: '#F5FCFF',
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
  sContainer: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  sTextItem: {
    height: 50,
    width: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 18
  },
  sSearchBar: {
    paddingHorizontal: 10,
    margin: 10,
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    fontSize: 18
  }
});
