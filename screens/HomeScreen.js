import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  StatusBar,
  View,
  Image,
  Dimensions,
} from 'react-native';

import AppFont from "../constants/AppFont.js";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: "hello",
  };

changeLanguage(lang){
  language=lang;
  this.props.navigation.navigate('ChangeLanguage',{lang});
}

  render() {
    return(
      <View style={styles.container}>
        <TouchableOpacity style={{alignItems: 'center'}} onPress={ () => this.props.navigation.openDrawer() }>
            <StatusBar
              hidden={false}
            />
            <Text style={styles.mainTitle}>
              Strolling around Thessaloniki
            </Text>
            <Text style={styles.subTitle}>
              History, sculptures, monuments
            </Text>
            <View style={{ flexDirection: 'row', marginTop:-20}}>
              <TouchableOpacity onPress={ () => this.changeLanguage('gr') }>
              <Image
                style={{width: 40, height: 40, margin:3}}
                source={require('../assets/flags/greek.png')}
              />
              </TouchableOpacity>
              <TouchableOpacity onPress={ () => this.changeLanguage('en') }>
              <Image
                style={{width: 40, height: 40, margin:3}}
                source={require('../assets/flags/english.png')}
              />
              </TouchableOpacity>
            </View>
            <Image
              style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height*0.57, marginTop:20, borderRadius:2}}
              source={require('../assets/photos/thessaloniki18.jpg')}
            />
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f1efe3',
  },
  mainTitle: {
    fontFamily: AppFont,
    fontSize: 40,
    textAlign: 'center',
    marginTop: 53,
    marginBottom: 13,
    color:"#3b382f",
  },
  subTitle: {
    fontFamily: AppFont,
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 42,
    color:"#3b382f",
  },


})
