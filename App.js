import { StyleSheet, Text, View } from 'react-native';
import {startLogin} from '../comprelocal/src/startLogin';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {login} from '../comprelocal/src/login';
import {cadastro} from '../comprelocal/src/cadastro';
import {finalCadastro} from '../comprelocal/src/finalCadastro';
import {cadastroComercio1} from '../comprelocal/src/cadastroComercio1';
import {cadastroComercio2} from '../comprelocal/src/cadastroComercio2';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Cadastro"
          component={cadastro}
          
        />
        <Stack.Screen name="Login" 
        component={login} />

        <Stack.Screen name="FinalCadastro" 
        component={finalCadastro} />
        
        <Stack.Screen name="CadastroComercio1" 
        component={cadastroComercio1} />

        <Stack.Screen name="CadastroComercio2" 
        component={cadastroComercio2} />

      </Stack.Navigator>
    </NavigationContainer>

    <startLogin></startLogin>
      </>
    
  );
}


