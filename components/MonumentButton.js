import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import AppFont from "../constants/AppFont.js";

export default class MonumentButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
          onPress={this.props.onPress}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <LinearGradient
              colors={['#125496', '#145BA3', '#1667B8', '#145BA3', '#125496']}
              style={styles.theButton}>
              <Image
                  style={styles.image}
                  source={this.props.theImage}
              />
              <Text
                style={styles.item}>
                {this.props.caption}
              </Text>
            </LinearGradient>
          </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  theButton: {
      flex:1,
      flexDirection: 'row',
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'black',
      marginLeft:10,
      marginRight:10,
      padding: 15,
      height:100,
      width:340,
  },
  image: {
     flex: 1,
     height: 90,
     resizeMode: 'contain',
     //borderRadius: 2,
     // backgroundColor: 'lightyellow',
     marginLeft:10,
   },
   item: {
     flex:3,
     backgroundColor: 'transparent',
     padding: 10,
     fontSize: 18,
     textAlign: 'center',
     fontFamily: AppFont,
     color: 'white',
   },
});
