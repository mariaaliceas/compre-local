
import React, { useState} from 'react';
import { Alert,StyleSheet, Text, View,TouchableOpacity,TextInput} from 'react-native';
import {login} from './login';
import {finalCadastro} from './finalCadastro';
import axios from 'axios'



const cadastro=({navigation})=>{
    var nome='';
    var email='';
    var telefone='';
    var senha='';
    const criar=()=>{
     if((nome && telefone && email && senha)!='' && (senha.length>7)){
        
        axios.put('http://192.168.1.11:3002/usuarioCadastro',{
            nome:nome,
            email:email,
            telefone:telefone,
            senha:senha,
        })
        .then((res) => { 
                
                if (res.status !== 200) {
                    //console.log(jsonRes.message)
                    if(res.status ==500){
                        Alert.alert('Erro no registro do cadastro', 'Tente novamente ')
                    }
                    else{
                        Alert.alert('Erro no registro do cadastro','Email já cadastrado')
                    }
                } 
                else {
                    //console.log(jsonRes.message);

                    
                    return navigation.navigate('finalCadastro')
                }
            
        })
        .catch((err) => {
            Alert.alert('Erro no cadastro','Não foi possível realizar o cadastro')
            //console.log(err);
        });
    }
    else if((nome || telefone || email || senha)==''){
        
        Alert.alert('Erro no cadastro', 'Preencha os campos corretamente!')

    }
     else{
        Alert.alert("Erro no cadastro", "Digite uma senha com pelo menos 8 caracteres")
    }
}  
    return(
        <View style={styles.container}>
        <Text style={styles.textoContainer}>Crie sua conta para começar</Text>
        <View style={styles.containerBotao}>
        <TextInput style={styles.botao} placeholder='Nome Completo' onChangeText={text=>nome=text} />
        <TextInput style={styles.botao} placeholder='Telefone'  onChangeText={text=>telefone=text}/>
        <TextInput style={styles.botao} placeholder='Email'  onChangeText={text=>email=text}/>
        <TextInput style={styles.botao} placeholder='Senha(Com no mínimo 8 caracteres)' secureTextEntry={true} onChangeText={text=>senha=text}/>
        
       

        
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
    width:260
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
