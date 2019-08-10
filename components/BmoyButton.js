import React from 'react';
import { Text, View } from 'react-native';

export default class BmoyButton extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text
            style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                padding: 8,
                marginTop: 5,
                marginBottom: 10,
                borderRadius: 5,
                borderColor: 'white',
                borderWidth: 1,
                textAlign: 'center',
                backgroundColor: '#125496',
                opacity: 0.7,
                // backgroundColor: 'transparent',
                width:210,
            }}>
            {this.props.caption}
          </Text>
      </View>
    );
  }
}
