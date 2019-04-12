import React, { Component } from 'react';
import { Text, TextInput, Button, View, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class HomePage extends Component {
    render() {
        return (
            <View style={styles.container}>
              <TouchableOpacity style={styles.buttonContainer} onPress = {() => this.props.navigation.navigate('Menu')}>
                <Text style={styles.buttonText}> RxMind-Me Home Page </Text>
              </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#3498db',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    buttonContainer: {
        height: 50,
        borderRadius: 50,
        backgroundColor: '#2980b9',
        paddingVertical: 10,
        justifyContent: 'center'
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
});