import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import axios from 'axios';

const Search = ({ route, navigation }) => {
    const params = route.params;
    const comercio = params.filter;
    const [comercios, setComercios] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios.post('http://192.168.237.136:3002/filter/comercio', {
            comercio: comercio
          });
          setComercios(result.data);
        };
    
        fetchData();
      }, []);

      return (
        <View>
            {comercios.map(item => (
                <View key={item.cnpj} style={styles.itemContainer}>
                    <Image source={require('../assets/capim_conveniencia.png')} style={styles.image} />
                    <View>
                        <Text style={styles.title}>{item.nomeComercio}</Text>
                    </View>
                        <View style={styles.arrowContainer}>
                    </View>
                </View>
            ))}
        </View>
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

export default Search;
