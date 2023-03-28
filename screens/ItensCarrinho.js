import React, {useEffect, useState} from "react";
import { Text, View, FlatList, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import axios from 'axios';

const Item = ({ image, text, subtitle, quantidade }) => (
  <View style={styles.itemContainer}>
    <Image source={image} style={styles.image} />
    <View>
      <Text style={styles.title}>{text}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.subtitle}>Quant: {quantidade}</Text>
    </View>
  </View>
);

const ItensCarrinho = ({ route, navigation }) => {
  const params = route.params;
  const comercio = params.comercio;
  const idCarrinho = comercio.idCarrinho;
  const nomeComercio = comercio.nomeComercio;
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(global.api_ip + '/itens-carrinho/' + idCarrinho);
      setData(result.data);
    };

    fetchData();
  }, []);

  const total = data.reduce((accumulator, item) => accumulator + item.valorTotal, 0);

  return (
    <ScrollView>
      <View>
        <View style={styles.itemContainer}>
          <Image source={require('../assets/capim_conveniencia.png')} style={styles.image} />
          <View>
            <Text style={styles.title}>{nomeComercio}</Text>
          </View>
        </View>
        <View style={{width: '90%', marginLeft:20, borderRadius: 10, height: 5, backgroundColor: 'green'}} />
        <View>
          {data.map(item => (
            <Item
            key={item.idItemCompra}
            image={require('../assets/capim_conveniencia.png')}
            text={item.nome}
            subtitle={item.preco.toFixed(2) + '/' + item.unidadeMedida}
            quantidade={item.quantidade} />
          ))}
        </View>
        <View style={{width: '90%', marginLeft:20, borderRadius: 10, height: 5, backgroundColor: 'green'}} />
        <TouchableOpacity 
          style={styles.itemContainer}
          onPress={() => navigation.navigate('FinalizarCompra', {
            usuario: route.params.usuario,
            comercio: comercio,
            total: total
          })}  
        >
          <View>
            <Text style={styles.title}>Confirmar compra</Text>
            <Text style={styles.subtitle}>Total: R$ {total.toFixed(2)}</Text>
          </View>
          <View style={styles.arrowContainer}>
            <Ionicons name="arrow-forward-outline" size={40} color="#006600" />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 25,
    marginRight: 16
  },
  title: {
    fontSize: 24,
    color: 'green'
  },
  subtitle: {
    fontSize: 14,
    color: 'green'
  },
  arrowContainer: {
    position: 'absolute',
    right: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5
  },
});
  
export default ItensCarrinho;