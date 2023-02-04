import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View, Button, StyleSheet, Label } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Configs from './src/components/Configs';
import Product from './src/components/product';
import HomeComercio from './src/components/homeComercio';
Icon.loadFont();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerRight: () => <View style={styles.icons}><Icon size={25} color='#00bb22' name='search' /> <Icon style={styles.sep} size={25} name='bars' color='#00bb22' /> </View> }}>
        <Stack.Screen name="Home"
          component={HomeComercio} />
        <Stack.Screen name="Produto"
          component={Product} />
        <Stack.Screen name="Configs"
          component={Configs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 5
  },
  arrowleft: {
    alignSelf: 'left',
  },
  icons: {
    flexDirection: 'row',
    marginLeft: 'auto'
  },
  sep: {
    paddingLeft: 20,
    paddingRight: 10,
  }
});