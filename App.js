import 'react-native-gesture-handler';
import{ StyleSheet, Text, View, SafeAreaView,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './src/login';
import cadastro from './src/cadastro';
import finalCadastro from './src/finalCadastro';
import cadastroComercio1 from './src/cadastroComercio1';
import cadastroComercio2 from './src/cadastroComercio2';
import cadastroComercio3 from './src/cadastroComercio3';



const telaInicial=({navigation})=>{
  return(
    <>    
      <SafeAreaView style={styles.container}>

        <Text style={styles.texto1}>BEM VINDO!</Text>
        <Text style={styles.texto2}>Agradeçemos sua atitude de apoiar o comercio local</Text>
        <View style={styles.containerBotao}>
          <TouchableOpacity style={styles.botao}
           onPress={() =>
            navigation.navigate('cadastro')
             }  >
            <Text style={styles.textoBotao}>Criar Conta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao}
           onPress={() =>
            navigation.navigate('login')
           }
          
             >
            <Text style={styles.textoBotao}>Fazer Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botao} >
            <Text style={styles.textoBotao}>Continuar como Google</Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    </>
  );
 
};
const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName={"telaInicial"}
        >
      <Stack.Screen name="telaInicial" component={telaInicial} />
      <Stack.Screen name="login" component={login} />
      <Stack.Screen name="cadastro" component={cadastro} />
      <Stack.Screen name="cadastroComercio1" component={cadastroComercio1}/>
      <Stack.Screen name="cadastroComercio2" component={cadastroComercio2} />
      <Stack.Screen name="cadastroComercio3" component={cadastroComercio3} />
      <Stack.Screen name="finalCadastro" component={finalCadastro} />



      </Stack.Navigator>
    </NavigationContainer>
        

  );
}


const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'green',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,

  },

  texto1: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 100,
    fontSize: 30
  },

  texto2: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 15,
    fontSize: 20

  },

  containerBotao: {
    display: 'flex',
    marginTop: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',






  },
  botao: {
    width: 200,
    padding: 5,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 8,


  },
  textoBotao: {
    color: 'green',

  }
});