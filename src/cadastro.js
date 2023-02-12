import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput} from 'react-native';
import {login} from './login';
import {finalCadastro} from './finalCadastro';


export default function cadastro(){
    return(
        <View style={styles.container}>
        <Text style={styles.textoContainer}>Crie sua conta para começar</Text>
        <View style={styles.containerBotao}>
        <TextInput style={styles.botao} placeholder='Nome Completo' />
        <TextInput style={styles.botao} placeholder='Telefone' secureTextEntry={true} />
        <TextInput style={styles.botao} placeholder='Email' secureTextEntry={true} />
        <TextInput style={styles.botao} placeholder='Senha' secureTextEntry={true} />
        <TextInput style={styles.botao} placeholder='Confirme sua senha' secureTextEntry={true} />
       

        
        <View style={styles.containerBotao2}>
        <TouchableOpacity style={styles.botao2}  onPress={() =>
        navigation.navigate('finalCadastro')
      } >
            <Text style={styles.textoBotao2} >Criar conta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botao2}  onPress={() =>
        navigation.navigate('login')
      }>
            <Text style={styles.textoBotao2}>Já tem uma conta?</Text>
        </TouchableOpacity>
        </View>
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
    flex:1
    },
    textoContainer:{
    marginTop:200,
    marginBottom:15,
    color:'white',
    fontSize:25
    },
    
    
    
    containerBotao2:{
    marginTop:20,
    display:'flex',
    flexDirection:'row'
    
    },
    
    botao:{
    padding:15,
    borderRadius:5,
    color:'white',
    backgroundColor:'gray',
    marginBottom:5,
    width:250
    },
    
    botao2:{
    padding:15,
    borderRadius:5,
    color:'',
    backgroundColor:'white',
    marginBottom:5,
    marginRight:20,
    },
    
    
    textoBotao2:{
    color:'green',
    
    }
})