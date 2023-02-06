import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView} from 'react-native';


export default function startLogin(){

    return(
        
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
    );
};
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