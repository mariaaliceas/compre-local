
import React, { useState} from 'react';
import { Alert,StyleSheet, Text, View,TouchableOpacity,TextInput} from 'react-native';
import {login} from './login';
import {finalCadastro} from './finalCadastro';

var nome='';
var email='';
var telefone='';
var senha='';
var confirma='';

/* antes de chamar a funcao criar, onPress chamava 
o navigation para 'finalCadastro'*/
const criar=()=>{

    //Testando somente as condicoes de validacao
    if((nome && telefone && email && senha && confirma)!='' && (senha==confirma)){
        Alert.alert('Cadastro realizado','Continue explorando o app')
    }
    else{
        Alert.alert('Erro no cadastro', 'Preencha os campos corretamente!')
    }
    
}

const cadastro=({navigation})=>{
    return(
        <View style={styles.container}>
        <Text style={styles.textoContainer}>Crie sua conta para começar</Text>
        <View style={styles.containerBotao}>
        <TextInput style={styles.botao} placeholder='Nome Completo' onChangeText={text=>nome=text} />
        <TextInput style={styles.botao} placeholder='Telefone'  onChangeText={text=>telefone=text}/>
        <TextInput style={styles.botao} placeholder='Email'  onChangeText={text=>email=text}/>
        <TextInput style={styles.botao} placeholder='Senha' secureTextEntry={true} onChangeText={text=>senha=text}/>
        <TextInput style={styles.botao} placeholder='Confirme sua senha' secureTextEntry={true} onChangeText={text=>confirma=text} />
       

        
        <View style={styles.containerBotao2}>
            
        <TouchableOpacity style={styles.botao2}  onPress={() =>criar()}
       >
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
    marginTop:140,
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
});

export default cadastro;
/* //Tentativa de fazer a validacao por campo para aparecer os campos que nao foram preenchidos corretamente
import React from 'react';
import {Alert, StyleSheet, Text, View,TouchableOpacity,TextInput} from 'react-native';
import {login} from './login';
import {finalCadastro} from './finalCadastro';

var nome='';
var email='';
var telefone='';
var senha='';
var confirma='';


const criar=({navigation})=>{
    let erro=false;
    if((nome && telefone && email && senha && confirma && (senha==confirma))!='' ){
        return navigation.navigate('finalCadastro')
    }
    else{
        
    }

       
}

const cadastro=({navigation})=>{
    return(
        <View style={styles.container}>
        <Text style={styles.textoContainer}>Crie sua conta para começar</Text>
        <View style={styles.containerBotao}>
        <TextInput style={styles.botao} placeholder='Nome Completo' onChangeText={text=>nome=text} />
        <TextInput style={styles.botao} placeholder='Telefone'  onChangeText={text=>telefone=text}/>
        <TextInput style={styles.botao} placeholder='Email'  onChangeText={text=>email=text}/>
        <TextInput style={styles.botao} placeholder='Senha' secureTextEntry={true} onChangeText={text=>senha=text}/>
        <TextInput style={styles.botao} placeholder='Confirme sua senha' secureTextEntry={true} onChangeText={text=>confirma=text} />
       

        
        <View style={styles.containerBotao2}>
        <TouchableOpacity style={styles.botao2}  onPress={() =>criar()}>
       
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
    marginTop:140,
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
});

export default cadastro;
*/