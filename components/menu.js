import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class MenuScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
              <TouchableOpacity style={styles.buttoncontainer} onPress = {() => this.props.navigation.navigate('Calendars')}>
                <Text style={styles.buttonText}> Calendars </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttoncontainer} onPress = {() => this.props.navigation.navigate('Agenda')}>
                <Text style={styles.buttonText}> Agenda </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttoncontainer} onPress = {() => this.props.navigation.navigate('Reminder')}>
                <Text style={styles.buttonText}> Add Reminder </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttoncontainer} onPress = {() => this.props.navigation.navigate('CalendarsList')}>
                <Text style={styles.buttonText}> Calendars List </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttoncontainer} onPress = {() => this.props.navigation.navigate('HorizontalCalendarList')}>
                <Text style={styles.buttonText}> Horizontal Calendar List </Text>
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
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 20
  }
});