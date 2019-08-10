import React from 'react';
import { Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default class BmoyButton extends React.Component {
  render() {
    return (
      <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <View style={{
              flexDirection: 'row',
                padding: 6,
                marginTop: 15,
                //marginBottom: 10,
                borderRadius: 5,
                borderColor: 'white',
                borderWidth: 1,
                backgroundColor: '#0872db',
                width:180,
            }}>
                <Feather name="phone" size={30} color="white"/>
                <Text
                  style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: 'white',
                      textAlign: 'center',
                      opacity: 1,
                      width: 140,

                      // backgroundColor: 'transparent',
                  }}>
                  {this.props.caption}
                </Text>
           </View>
      </View>
    );
  }
}
