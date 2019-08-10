import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export default class AuthButton extends React.Component {
    render() {
        return (
            <TouchableOpacity
                activeOpacity={.8}
                onPress={this.props.onPress}
                style={{
                    backgroundColor:this.props.buttonColor,
                    alignItems: 'center',
                    width: "50%",
                    padding: 20
                }}>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: 'white',
                    }}>
                    {this.props.caption}
                </Text>
            </TouchableOpacity>
        );
    }
}
