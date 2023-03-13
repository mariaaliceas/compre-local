import React, { Component,useState} from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput} from 'react-native';
import {login} from './login';
import {finalCadastro} from './finalCadastro';
const [ nome, setNome ] = useState('');
const [ telefone, setTelefone ] = useState('');
const [ email, setEmail ] = useState('');
const [ senha, setSenha ] = useState('');
const [ confirma, setConfirma] = useState('');
const [ erroNome, setErroNome] = useState('');
const [ erroTelefone, setErroTelefone] = useState('');
const [ erroEmail, setErroEmail] = useState('');
const [ erroSenha, setErroSenha] = useState('');
const [ erroConfirma, setErroConfirma] = useState('');




const verificar=()=>{
    let erro=false;
    if((nome && telefone && email && senha && confirma)!='' ){
        erro=true;
        return erro
    }
    else{
        if(nome==''){
            setErroNome('Preencha seu nome completo')

        }
        if(telefone==''){
            setErroTelefone('Preencha seu telefone')

        }
        if(email==''){
            setErroEmail('Preencha seu email')

        }
        if(senha==''){
            setErroSenha('Preencha sua senha')

        }
        if(confirma==''){
            setErroConfirma('Confirme sua senha')

        }
        if(senha!=confirma){
            setErroConfirma('Confirme sua senha corretamenta')

        }
        return erro
    }

}
const criar=({navigation})=>{
    if(verificar()){
        return navigation.navigate('finalCadastro')
    }
}

const verificacao=()=>{
    return(
        <View style={styles.container}>
        <Text style={styles.textoContainer}>Crie sua conta para começar</Text>
        <View style={styles.containerBotao}>
        <TextInput style={styles.botao} placeholder='Nome Completo' onChangeText={value=>setNome(value)} errorMessage={erroNome}/>
        <TextInput style={styles.botao} placeholder='Telefone'  onChangeText={value=>setTelefone(value)} errorMessage={erroTelefone}/>
        <TextInput style={styles.botao} placeholder='Email'  onChangeText={value=>setEmail(value)} errorMessage={erroEmail}/>
        <TextInput style={styles.botao} placeholder='Senha' secureTextEntry={true} onChangeText={value=>setSenha(value)} errorMessage={erroSenha}/>
        <TextInput style={styles.botao} placeholder='Confirme sua senha' secureTextEntry={true} onChangeText={value=>setConfirma(value)} errorMessage={erroConfirma}/>
       

        
        <View style={styles.containerBotao2}>
        <TouchableOpacity style={styles.botao2}  onPress={() =>
        criar()}
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


export default verificacao;