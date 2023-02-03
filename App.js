import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {startLogin} from './src/startLogin';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <startLogin></startLogin>
    </NavigationContainer>
  );
}


