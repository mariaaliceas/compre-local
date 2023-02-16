
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {login} from '../comprelocal/src/login';
import {cadastro} from '../comprelocal/src/cadastro';
import {finalCadastro} from '../comprelocal/src/finalCadastro';
import {cadastroComercio1} from '../comprelocal/src/cadastroComercio1';
import {cadastroComercio2} from '../comprelocal/src/cadastroComercio2';
const Stack = createNativeStackNavigator();
const styles=StyleSheet.create({
  container:{
  display:'flex',
  backgroundColor:'green',
  flexDirection:'column',
  alignItems:'center',
  flex:1,
  
  },
  
  texto1:{
  color:'white',
  fontWeight: 'bold',
  marginTop:100,
  fontSize:30
  },
  
  texto2:{
  color:'white',
  fontWeight: 'bold',
  marginTop:15,
  fontSize:20
  
  },
  
  containerBotao: {
      display:'flex',
      marginTop:20,
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      


      
      
  
  },
  botao:{
      width: 200,
      padding:5,
      marginBottom:20,
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'white',
      borderRadius:8,
  
  
  },
  textoBotao:{
  color:'green',
  
  }
});

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
    <SafeAreaView style={styles.container}>   
        
        <Text style={styles.texto1}>BEM VINDO!</Text>
        <Text style={styles.texto2}>Agradeçemos sua atitude de apoiar o comercio local</Text>  
        <View style={styles.containerBotao}>
            <TouchableOpacity style={styles.botao} 
             onPress={() =>
        navigation.navigate('cadastro')
      }>
                <Text  style={styles.textoBotao}>Criar Conta</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}  
            onPress={() =>
        navigation.navigate('login')
      } >
                <Text  style={styles.textoBotao}>Fazer Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao} >
                <Text  style={styles.textoBotao}>Continuar como Google</Text>
            </TouchableOpacity>
            
        </View>
        </SafeAreaView>


    
      </>
    
  );
}


