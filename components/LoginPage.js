import React, { Component } from 'react';
import { Text, TextInput, Button, View, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';
import CalendarPage from './CalendarPage';
import MenuScreen from './menu';
import CalendarScreen from './calendars';
import AgendaScreen from './agenda';
import CalendarsListView from './calendarList';
import AddReminder from './AddReminder';
import HorizontalCalendarListView from './horizontalCalendarList';

export class LoginPage extends Component {
     render() {
         return (
             <View style={styles.container}>
                <View style={styles.textfields}>
                    <TextInput style={styles.input}
                        placeholder = "username"
                        returnKeyType = "next"
                        onSubmitEditing = {() => this.passwordInput.focus()}
                        keyboardType = "email-address"
                        autoCapitalize = "none"
                        autoCorrect = {false}
                    />
                    <TextInput style={styles.input}
                        placeholder = "password"
                        returnKeyType = "go"
                        secureTextEntry
                        ref = {(input) => this.passwordInput=input}
                    />
                    <TouchableOpacity style={styles.buttonContainer} onPress = {() => this.props.navigation.navigate('Home')}>
                        <Text style={styles.buttonText}> Login </Text>
                    </TouchableOpacity>
                    <Button
                        title = "Register Here"
                        color = '#FFF'
                        fontWeight = '700'
                        onPress = {() => this.props.navigation.navigate('Register')}
                    />
                </View>
            </View>
        );
    }
}

const AppStackNavigator = createStackNavigator ({
    Login: LoginPage,
    Register: RegisterPage,
    Home: HomePage,
    Menu: MenuScreen,
    Calendars: CalendarScreen,
    Reminder: AddReminder,
    Agenda: AgendaScreen,
    CalendarsList: CalendarsListView,
    HorizontalCalendarList: HorizontalCalendarListView
});
const App = createAppContainer(AppStackNavigator);

export default App;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#3498db',
        justifyContent: 'center',
        alignText: 'stretch'
    },
    input: {
        paddingLeft: 20,
        borderRadius: 50,
        height: 50,
        fontSize: 25,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderWidth: 1,
        marginBottom: 0,
        color: '#34495e'
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