import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-ico-material-design';
import Checkbox from 'expo-checkbox';
import axios from 'axios';

const FinalizarCompra = ({ route, navigation }) => {
    const params = route.params;
    const comercio = params.comercio;
    const [isChecked, setChecked] = useState(true);
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios.get(global.api_ip+ '/users/' + params.usuario);
          const user = result.data;
          setUser(user);
        };
    
        fetchData();
      }, []);

    const finalizarCompra = () => {
      var date = new Date().getDate().toString();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear().toString();
      var hours = new Date().getHours().toString();
      var min = new Date().getMinutes().toString();
      var sec = new Date().getSeconds().toString();
  
      var codigo = year + month + date + hours + min + sec;
      var tpPagamento = 'Pagamento na entrega';
      var idUsuario = params.usuario;

      axios.post('http://192.168.237.136:3002/compra/finalizar-pedido',{
        codigo: codigo,
        idUsuario: idUsuario,
        tpPagamento: tpPagamento,
        total: route.params.total
      })
      .then((res) => {
        navigation.navigate('PedidoConfirmado', {
          usuario: route.params.usuario,
          comercio: comercio,
          codigo: codigo
        })
      })
      .catch ((err) => {
        Alert.alert(err.response.data.err)
      })
    }

  return (
    <ScrollView automaticallyAdjustKeyboardInsets={true}>
        <View style={styles.itemContainer}>
            <Image source={require('../assets/bar_beto.png')} style={styles.image} />
            <View>
            <Text style={styles.title}>{comercio.nomeComercio}</Text>
            </View>
        </View>
        <View style={{width: '90%', marginLeft:20, borderRadius: 10, height: 5, backgroundColor: 'green'}} />
        <View style={{backgroundColor: 'lightgreen', width: '90%', marginLeft:20, marginTop: 10, borderRadius: 10}}>
            <Text style={styles.title}>Total: R$ {route.params.total.toFixed(2)}</Text>
        </View>
        <View style={{marginLeft:20, marginRight: 20}}>
            <View style={{backgroundColor: 'white', width: '100%', marginTop: 10, borderRadius: 5}}>
                <Text style={styles.adress}>Entrega</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{backgroundColor: 'white', width: '30%', marginTop: 10, borderRadius: 5}}>
                    <Text style={styles.adress}>Endereco</Text>
                </View>
                <View style={{marginLeft: 10}}>
                    <Text style={{fontSize:20}}>{user.map(item => item.endereco)}</Text>
                    <Text style={{color: 'green', fontSize: 20}}>(Frete: R$ 4,00)</Text>
                </View>
            </View>

            <View >
                <Text style={styles.title}>Selecione o método de pagamento</Text>
                <View style={{marginVertical: 5, flexDirection: 'row', alignItems: 'center'}}>
                    <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
                    <Text style={{color:'black', fontSize: 20}}>Pagamento na entrega</Text>
                </View>
            </View>

            <View style={{marginBottom: 20}}>
                <Text style={styles.title}>Comentários</Text>
                <TextInput
                    style={inputStyle}
                    placeholder="Digite alguma coisa"
                    keyboardType="default"
                  />
            </View>

            <View style={{marginBottom: 20}}>
                <TouchableOpacity 
                    style={{width: '90%', padding:10, backgroundColor: 'green', borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}
                    onPress={() => {finalizarCompra()}}
                >
                    <Text style={{color: 'white', fontSize: 24}}>Finalizar Compra</Text>
                    <Icon name="shopping-cart" height={20} width={20} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
  );
};

const pickerStyle = {
    inputIOS: {
        color: 'black',
        padding: 20,
        marginBottom: 10,
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 5,
        width: '100%'
    },
    placeholder: {
        color: 'black',
    },
    inputAndroid: {
      color: 'white',
      padding: 20,
      marginBottom: 10,
      marginTop: 20,
      backgroundColor: 'white',
      borderRadius: 5,
      width: '100%'
    },
};

const inputStyle = {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    fontSize: 18,
    width: '90%',
    height: 100,
    marginTop: 15
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 25,
    marginRight: 16
  },
  title: {
    fontSize: 24,
    color: 'green',
    padding: 10
  },
  adress: {
    fontSize: 14,
    color: 'black',
    padding: 15
  },
  adressContent: {
    flex:1,
    flexWrap: 'wrap'
  },
  subtitle: {
    fontSize: 14
  },
  arrowContainer: {
    position: 'absolute',
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5
  },
  checkbox: {
    margin: 8,
  },
});

export default FinalizarCompra;
