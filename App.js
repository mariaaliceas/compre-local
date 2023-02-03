import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './src/components/logo';
import Configs from './src/components/Configs';
import Product from './src/components/Product';
import Headers from './src/components/headers';


export default function App() {
  return (
    <View style={styles.container}>
      <Headers></Headers>
      <Logo></Logo>
      <Configs></Configs>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 30,
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: '10px'
  }
});
