import React from "react";
import { Text, View, Image, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
  
const PedidoConfirmado = ({ route, navigation }) => {
  const params = route.params;
  const comercio = params.comercio;

  return (
    <ScrollView automaticallyAdjustKeyboardInsets={true}>
        <View style={styles.itemContainer}>
            <Image source={require('../assets/bar_beto.png')} style={styles.image} />
            <View>
            <Text style={styles.title}>{comercio.nomeComercio}</Text>
            </View>
        </View>
        <View style={{width: '90%', marginLeft:20, borderRadius: 10, height: 5, backgroundColor: 'green'}} />
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 50, paddingHorizontal: 10}}>
            <Text style={{color:'green', fontSize: 36, fontWeight: 'bold'}}>Pedido Confirmado!</Text>
            <Text style={{color: 'green', fontSize:24}}>Código #202110180015</Text>
            <Text style={{color: 'green', textAlign: 'center', marginVertical: 10, fontSize: 18}}>
                Você pode rever esse código no seu histórico de compras. quando receber seu pedido, confirme seu código com o do entregador
            </Text>
        </View>
        <View style={{marginVertical: 10, paddingHorizontal: 20}}>
            <TouchableOpacity
            onPress={() => navigation.navigate('Home')}  
            >
                <Text style={{color:'green', width: '80%', fontSize: 24, fontWeight: 'bold'}}>Ver pedido no seu histórico de compras</Text>
                <View style={styles.arrowContainer}>
                    <Ionicons name="arrow-forward-outline" size={40} color="#006600" />
                </View>
                <View style={{width: '95%', marginLeft:20, borderRadius: 10, height: 5, backgroundColor: 'green'}} />
            </TouchableOpacity>
        </View>
    </ScrollView>
  );
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
  
export default PedidoConfirmado;