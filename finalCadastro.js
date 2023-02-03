import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView} from 'react-native';
export default function startLogin(){
    return(
        
        <SafeAreaView style={styles.container}>     
        <Text style={styles.texto}>Tudo Pronto!</Text>  
        <View style={styles.containerBotao}>
            <TouchableOpacity style={styles.botao}>
                <Text  style={styles.textoBotao}>Continuar como Usuário</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}>
                <Text  style={styles.textoBotao}>Cadastre seu negócio</Text>
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
    
    texto:{
    color:'white',
    marginBottom:5,
    fontWeight: 'bold',
    marginTop:200,
    fontSize:60
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
        padding:10,
        marginBottom:15,
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