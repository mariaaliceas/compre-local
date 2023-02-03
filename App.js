import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Config from './src/components/Config';
import Configs from './src/components/Configs';
import Product from './src/components/Product';



export default function App() {
  return (
    <View style={styles.container}>
    <Config></Config>
    <Configs></Configs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 30,
    flex: 1,
    backgroundColor: 'white',
    paddingLeft:'10px'    
  }
});
