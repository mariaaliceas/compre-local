import React, {useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import axios from 'axios';

const Servicos = ( usuario ) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://192.168.237.136:3002/comercios/servico');
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Contrate um serviço</Text>
      <Text style={styles.cardSubtitle}>Veja quem está disponível para sua localização</Text>
      <View style={[{width: '90%', height: 5, backgroundColor: 'green', marginLeft: 10, marginBottom: 5, marginTop: 5}]} />
      <ScrollView 
      horizontal={true} 
      style={styles.horizontalContainer} 
      showsHorizontalScrollIndicator={false}
      >
      {data.map(item => (
        <View key={item.cnpj} style={styles.horizontalContainerContent}>
          <TouchableOpacity>
            <View style={styles.horizontalCardContainer}>
              <Image source={require('../../assets/jair_jardinagem.png')} style={styles.image} />
              <View style={styles.textContainer}>
                  <Text style={styles.textContainer.text}>{item.nomeComercio}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    horizontalCardContainer: {
      width : '100%',
      height : 'auto',
      marginBottom : 25,
      borderRadius : 15,
      marginLeft: 10,
      overflow : 'hidden',
      flexDirection: 'row'
    },
    textContainer: {
      flex : 1,
      alignItems : 'center',
      justifyContent : 'center',
      marginTop: 5,
      marginRight: 20,
      text:{
        fontSize: 20,
        fontWeight: '700',
      },
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 10,
      marginTop: 15,
      marginRight: 5
    },
    horizontalContainerContent: {
      flex : 1, 
      justifyContent : 'center',
      width: 260,
      height: 100,
      padding: 10, 
      backgroundColor:"white", 
      borderRadius: 10, 
      margin:5 
    },
    card: {
      backgroundColor: 'lightgreen',
      width: '100%',
      height: 230,
      alignItems: 'left',
      justifyContent: 'center',
      borderRadius: 10,
      margin:20,
      marginBottom: 5,
      paddingLeft: 20,
      paddingBottom: 20,
      paddingTop: 20,
    },
    cardTitle: {
      fontSize: 24,
      fontWeight: '700',
      color: 'green',
      paddingLeft: 12
    },
    cardSubtitle: {
      fontSize: 18,
      fontWeight: 'normal',
      color: 'green',
      paddingLeft: 12
    },
  });

  export default Servicos;