import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View, Button, StyleSheet, Label } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Configs from './src/components/Configs';
import Product from './src/components/product';
import HomeComercio from './src/components/homeComercio';
import Frete from './src/components/frete';
import EditaProduto from './src/components/editProduct';
import AdicionaProduto from './src/components/addProduct';
import Feed from './src/components/feed';
import Encomenda from './src/components/encomenda';
import detEncomenda from './src/components/detEncomenda';
import detPedido from './src/components/detPedido';
import histVendas from './src/components/histVenda';
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
        <Stack.Screen name="Frete"
          component={Frete} />
        <Stack.Screen name="EditaProduto"
          component={EditaProduto} />
        <Stack.Screen name="AdicionaProduto"
          component={AdicionaProduto} />
        <Stack.Screen name="Feed"
          component={Feed} />
        <Stack.Screen name="Encomenda"
          component={Encomenda} />
        <Stack.Screen name="detEncomenda"
          component={detEncomenda} />
          <Stack.Screen name="detPedido"
          component={detPedido} />
          <Stack.Screen name="histVendas"
          component={histVendas} />
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