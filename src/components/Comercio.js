import React, {useEffect, useState} from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import axios from 'axios';

const Comercio = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://localhost:3002/comercio/comercio');
      console.log(result.data);
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <ScrollView 
    horizontal={true} 
    style={styles.horizontalContainer} 
    showsHorizontalScrollIndicator={false}
  >
      {data.map(item => (
        <View key={item.cnpj} style={styles.horizontalContainerContent}>
          <TouchableOpacity>
            <View style={styles.horizontalCardContainer}>
              <Image source={require('../../assets/bar_beto.png')} style={styles.image} />
              <View style={styles.textContainer}>
                  <Text style={styles.textContainer.text}>{item.nomeComercio}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
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
  });

  export default Comercio;