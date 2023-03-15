import React, {useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import axios from 'axios';

const Cart = ({ navigation }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:3002/carrinho');
      // console.log(result.data);
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <View>
      {data.map(item => (
        <View key={item.cnpj}>
          <TouchableOpacity style={styles.itemContainer}
          onPress={() => navigation.navigate('ItensCarrinho', {
            carrinhoId: item.idCarrinho,
            comercioName: item.nomeComercio
          })}
          >
            <Image source={require('../assets/capim_conveniencia.png')} style={styles.image} />
            <View>
              <Text style={styles.title}>{item.nomeComercio}</Text>
              <Text style={styles.subtitle}>{item.total} iten(s)</Text>
            </View>
            <View style={styles.arrowContainer}>
              <Ionicons name="arrow-forward-outline" size={40} color="#006600" />
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  )
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
    fontSize: 20
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
});

export default Cart;
