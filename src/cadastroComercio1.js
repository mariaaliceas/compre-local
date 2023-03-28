
import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput, Alert} from 'react-native';
import {cadastroComercio2} from './cadastroComercio2';
import axios from 'axios'

const cadastroComercio1=({navigation})=>{
    var nome='';
    var endereco='';
    var emailPessoal='';
    var emailEmpresa='';
    var numero='';
    var bairro='';
    var cnpj='';
    var cpf='';
    var rg='';
    var telefone='';

    const criar=()=>{
        if((nome && endereco && numero && bairro && cnpj && cpf && rg && emailPessoal)!=''){
            axios.put('http://192.168.1.11:3002/comercio',{
                nome:nome,
                endereco:endereco,
                idUsuario:emailPessoal,
                emailEmpresa:emailEmpresa,
                numero:numero,
                bairro:bairro,
                cnpj:cnpj,
                cpf:cpf,
                rg:rg,
                telefone:telefone,

            })
        .then((res) => { 
                
                if (res.status !== 200) {
                    //console.log(jsonRes.message)
                    if(res.status==500){
                        Alert.alert('Erro no registro do cadastro', 'Tente novamente ')
                    }
                    else{
                        Alert.alert('Erro no Cadastro','Verifique se o email pessoal cadastrado está correto')
                    }
                } else {
                    
                    //console.log(jsonRes.message);
                    //Alert.alert("Login feito com sucesso")
                    navigation.navigate('cadastroComercio2')
                }
            
        })
        .catch((err) => {
            Alert.alert('Erro no Cadastro','Não foi possível realizar o cadastro')
            //console.log(err);
        });

        }
        else{
            Alert.alert('Erro no Cadastro', 'Preencha os campos obrigatórios corretamente')
        }
    }

    return(
        <View style={styles.container}>
        <Text style={styles.textoContainer}>Informe os dados de sua Empresa</Text>
        
        
        <View style={styles.containerBotao}>
        <TextInput style={styles.botao} placeholder='Nome Empresa' onChangeText={text=>nome=text} />
        
        <View style={styles.containerEndereco}>
        <TextInput style={styles.botaoEndereco} placeholder='Endereço'onChangeText={text=>endereco=text} />
        <TextInput style={styles.botaoEndereco} placeholder='Número' onChangeText={text=>numero=text}/>      
        </View>
        
        <TextInput style={styles.botao} placeholder='Bairro' onChangeText={text=>bairro=text}/>
        <TextInput style={styles.botao} placeholder='Email do usuario cadastrado' onChangeText={text=>emailPessoal=text}/>
        <TextInput style={styles.botao} placeholder='Email Comercial(Opcional)' onChangeText={text=>emailEmpresa=text}/>
        <TextInput style={styles.botao} placeholder='Telefone Comercial(Opcional)' onChangeText={text=>telefone=text}/>
        <TextInput style={styles.botao} placeholder='CNPJ' onChangeText={text=>cnpj=text}/>
        <TextInput style={styles.botao} placeholder='CPF do titular' onChangeText={text=>cpf=text}/>
        <TextInput style={styles.botao} placeholder='RG do titular' onChangeText={text=>rg=text}/>
       

        
        <View style={styles.containerBotao2}>
        <TouchableOpacity style={styles.botao2}  onPress={()=>criar()}>
            <Text style={styles.textoBotao2} >Próximo</Text>
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
    marginTop:140,
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
    marginTop:6,
    marginBottom:5,
    marginLeft:150,
    width:100,
    height:40,
    display:'flex',
    alignItems:'center',
    },
    
    
    textoBotao2:{
    color:'green',
    display:'flex',
    alignItems:'center',
    
    }})

export default cadastroComercio1;