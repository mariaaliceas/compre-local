import React, { Component } from 'react';
import {Text, View,TextInput,StyleSheet,TouchableOpacity } from 'react-native';



const login=({navigation})=>{
   
    var email='';
    
    var senha='';
    const logar=()=>{
        if((email && senha)!=''){
            axios.put('http://192.168.1.11:3002/usuarioLogin')
        .then((res) => { 
                
                if (res.status !== 200) {
                    //console.log(jsonRes.message)
                    Alert.alert('Erro no login','Email/Senha incorretas')
                } else {
                    
                    //console.log(jsonRes.message);
                    //Alert.alert("Login feito com sucesso")
                    
                }
            
        })
        .catch((err) => {
            Alert.alert('Erro no login','Não foi possível realizar o login')
            //console.log(err);
        });

        }
        else{
            Alert.alert('Erro no login', 'Preencha os campos corretamente')
        }
    }
    return(
        <View style={styles.container}>
        <Text style={styles.texto}>Bem vindo de volta!</Text>
        <View style={styles.botaoContainer}>
        <TextInput style={styles.textoBotao} placeholder='Email' />
        <TextInput style={styles.textoBotao} placeholder='Senha' secureTextEntry={true} />
        </View>
        
        <TouchableOpacity style={styles.botao2Container} onPress={()=>logar}>
                <Text  style={styles.textoBotao2} >Entrar</Text>
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
export default login;