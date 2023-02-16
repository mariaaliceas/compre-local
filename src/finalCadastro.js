<<<<<<< HEAD
import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView} from 'react-native';
import {cadastroComercio1} from './cadastroComercio1';
export default function finalCadastro(){
    return(
        
        <SafeAreaView style={styles.container}>     
        <Text style={styles.texto}>Tudo Pronto!</Text>  
        <View style={styles.containerBotao}>
            <TouchableOpacity style={styles.botao}>
                <Text  style={styles.textoBotao}>Continuar como Usuário</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}  onPress={() =>
        navigation.navigate('cadastroComercio1')
      }>
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
=======
import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,SafeAreaView} from 'react-native';
import {cadastroComercio1} from './cadastroComercio1';
export default function finalCadastro(){
    return(
        
        <SafeAreaView style={styles.container}>     
        <Text style={styles.texto}>Tudo Pronto!</Text>  
        <View style={styles.containerBotao}>
            <TouchableOpacity style={styles.botao}>
                <Text  style={styles.textoBotao}>Continuar como Usuário</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botao}  onPress={() =>
        navigation.navigate('cadastroComercio1')
      }>
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
>>>>>>> aa30f40a195e41a5d4e58e3f6810a2a959c1f1ea
});