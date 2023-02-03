import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const data = [
  {
    id: 1,
    image: require('../assets/capim_conveniencia.png'),
    text: 'Capim Conveniência',
    subtitle: '6 itens'
  },
  {
    id: 2,
    image: require('../assets/capim_conveniencia.png'),
    text: 'Bar do Beto',
    subtitle: '3 itens'
  },
];

const Item = ({ image, text, subtitle }) => (
  <TouchableOpacity style={styles.itemContainer}>
    <Image source={image} style={styles.image} />
    <View>
      <Text style={styles.title}>{text}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
    <View style={styles.arrowContainer}>
      <Ionicons name="arrow-forward-outline" size={40} color="#006600" />
    </View>
  </TouchableOpacity>
);

const Cart = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Item image={item.image} text={item.text} subtitle={item.subtitle} />}
      keyExtractor={item => item.id.toString()}
    />
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
    fontSize: 24
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
