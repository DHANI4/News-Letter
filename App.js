import * as React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import AppHeader from './components/AppHeader';
import HomeScreen from './Screens/HomeScreen';
import JokeScreen from './Screens/JokeScreen';
import Horoscope from './Screens/Horroscope';
import Weather from './Screens/Weather';
import News from './Screens/News';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppHeader />
        <Container />
      </View>
    ); 
  }
}

let navigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  JokeScreen: JokeScreen,
  Horoscope: Horoscope,
  Weather: Weather,
  News: News,
});

const Container = createAppContainer(navigator);
