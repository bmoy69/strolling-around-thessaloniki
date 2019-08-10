import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class LanguageScreen extends React.Component {

    componentDidMount() {
      setTimeout(() => {
          this.props.navigation.goBack();
      }, 1000);
      //console.log(this.props.navigation.state.params.lang);
    }

    render () {
      const chosenLang = this.props.navigation.state.params.lang;
      if (chosenLang==='en'){
        showText = 'English';
        showImage = require('../assets/flags/english.png');
      } else if (chosenLang==='gr'){
        showText = 'Ελληνικά';
        showImage = require('../assets/flags/greek.png');
      }
        return (

          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 30 }}>{showText}</Text>
            <Image
              style={{width: 100, height: 100, margin:3}}
              source={showImage}
            />
          </View>
        );
    }
}
