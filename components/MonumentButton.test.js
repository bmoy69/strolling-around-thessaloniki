import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient, Svg } from 'expo';
import AppFont from "../constants/AppFont.js";

export default class MonumentButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
          onPress={this.props.onPress}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

          <Svg height={100} width={100}>
            <Svg.Circle
              cx={50}
              cy={50}
              r={45}
              strokeWidth={2.5}
              stroke="#e74c3c"
              fill="#f1c40f"
            />
            <Svg.Rect
              x={15}
              y={15}
              width={70}
              height={70}
              strokeWidth={2}
              stroke="#9b59b6"
              fill="#3498db"
            />  

              <Image
                style={styles.image}
                source={this.props.theImage}
              />
              <Text
                style={styles.item}>
                {this.props.caption}
              </Text>


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
     //borderRadius: 10,
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
   },
});
