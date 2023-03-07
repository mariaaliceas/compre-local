import React, {useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const Cart = ({ navigation }) => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getComercios = async () => {
    try {
      const response = await fetch('http://localhost:3002/comercios');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getComercios();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({cnpj}) => cnpj}
          renderItem={({item}) => (
            <View>
              <TouchableOpacity style={styles.itemContainer}
              onPress={() => navigation.navigate('ItensCapimConveniencia')}
              >
                <Image source={require('../assets/capim_conveniencia.png')} style={styles.image} />
                <View>
                  <Text style={styles.title}>{item.nomeComercio}</Text>
                  <Text style={styles.subtitle}>6 itens</Text>
                </View>
                <View style={styles.arrowContainer}>
                  <Ionicons name="arrow-forward-outline" size={40} color="#006600" />
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
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
