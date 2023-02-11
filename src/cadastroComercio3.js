import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput} from 'react-native';


export default function cadastro(){
    return(
        <View style={styles.container}>
        <Text style={styles.textoContainer}>Tudo pronto!</Text>
        <Text style={styles.textoContainer2}>O cadastro do comércio foi realizado.</Text>
        <Text style={styles.textoContainer2}>Continue explorando no aplicativo. Boas vendas!</Text>
        <View style={styles.containerBotao}>
        <TouchableOpacity style={styles.botao} >
            <Text style={styles.textoBotao} >Próximo</Text>
        </TouchableOpacity>
        </View>
        </View>

    );
};
const styles=StyleSheet.create({
    container:{
    backgroundColor:'green',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    flex:1,
    },
    
    
    textoContainer:{
    marginTop:200,
    color:'white',
    fontWeight:'bold',
    fontSize:30
    },
    
    textoContainer2:{
    
    color:'white',
    fontSize:20,
    marginLeft:10
    },
    
    
    
    botao:{
    padding:15,
    borderRadius:5,
    backgroundColor:'white',
    marginTop:40,
    },
    
    
    textoBotao:{
    color:'green',
    
    }
})