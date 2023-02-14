import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput} from 'react-native';
import {cadastroComercio2} from './cadastroComercio2'

export default function cadastro1(){
    return(
        <View style={styles.container}>
        <Text style={styles.textoContainer}>Informe os dados de sua Empresa</Text>
        
        <View>
        
        
        </View>
        <View style={styles.containerBotao}>
        <TextInput style={styles.botao} placeholder='Nome Empresa' />
        
        <View style={styles.containerEndereco}>
        <TextInput style={styles.botaoEndereco} placeholder='Endereço' />
        <TextInput style={styles.botaoEndereco} placeholder='Número' />      
        </View>
        
        
        <TextInput style={styles.botao} placeholder='Telefone Comercial(Opcional)' />
        <TextInput style={styles.botao} placeholder='Email Comercial(Opcional)' />
        <TextInput style={styles.botao} placeholder='CNPJ' />
        <TextInput style={styles.botao} placeholder='CPF do titular' />
        <TextInput style={styles.botao} placeholder='RG do titular' />
       

        
        <View style={styles.containerBotao2}>
        <TouchableOpacity style={styles.botao2} >
            <Text style={styles.textoBotao2}  onPress={() =>
        navigation.navigate('cadastroComercio2')
      }>Próximo</Text>
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
    marginBottom:12,
    color:'white',
    fontWeight:'bold',
    marginTop:200,
    fontSize:20
    
    },
    
    
    
    containerBotao2:{
    marginTop:20,
    
    },
    
    containerEndereco:{
    display:'flex',
    flexDirection:'row'
    
    
    },
    
    botao:{
    padding:10,
    borderRadius:5,
    color:'white',
    backgroundColor:'gray',
    marginBottom:5,
    width:250
    },
    
    botaoEndereco:{
    backgroundColor:'gray',
    color:'white',
    borderRadius:5,
    padding:10,
    width:105,
    marginRight:40,
    marginBottom:5
    
    },
    
    botao2:{
    padding:10,
    borderRadius:5,
    backgroundColor:'white',
    marginBottom:5,
    width:80,
    display:'flex',
    alignItems:'center',
    },
    
    
    textoBotao2:{
    color:'green',
    display:'flex',
    alignItems:'center',
    
    }
})