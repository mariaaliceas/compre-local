import React, { Component } from 'react';
import {Text, View,TextInput,StyleSheet,TouchableOpacity } from 'react-native';



export default function login(){
    return(
        <View style={styles.container}>
        <Text style={styles.texto}>Bem vindo de volta!</Text>
        <View style={styles.botaoContainer}>
        <TextInput style={styles.textoBotao} placeholder='Email' />
        <TextInput style={styles.textoBotao} placeholder='Senha' />
        </View>
        
        <TouchableOpacity style={styles.botao2Container}>
                <Text  style={styles.textoBotao2}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles=StyleSheet.create({
    container:{
    display:'flex',
    backgroundColor:'green',
    flexDirection:'column',
    alignItems:'center',
    flex:1,
  },
    texto:{
    color:'white',
    marginBottom:20,
    fontWeight: 'bold',
    marginTop:200,
    fontSize:30
    },
    
    textoBotao:{
    padding:10,
    borderRadius:5,
    color:'white',
    backgroundColor:'gray',
    marginBottom:5,
    width: 200,
    },
    
    botaoContainer:{
    marginTop:5,
    marginBottom:20
    
    },
    
    botao2Container:{
    marginTop:5,
    
    },
    
    textoBotao2:{
    backgroundColor:'white',
    color:'green',
    padding:10,
    borderRadius:5,
    width:60
    
    
    }
    
    
})