import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

// const data = [
//   {
//     id: 1,
//     image: require('../assets/capim_conveniencia.png'),
//     text: 'Capim Conveniência',
//     subtitle: '6 itens',
//     route: 'ItensCapimConveniencia'
//   },
//   {
//     id: 2,
//     image: require('../assets/bar_beto.png'),
//     text: 'Bar do Beto',
//     subtitle: '3 itens',
//     route: 'ItensBarDoBeto'
//   },
// ];

// const Item = ({ image, text, subtitle, route, navigation }) => (
//   <TouchableOpacity style={styles.itemContainer}
//     onPress={() => navigation.navigate(route)}
//   >
//     <Image source={image} style={styles.image} />
//     <View>
//       <Text style={styles.title}>{text}</Text>
//       <Text style={styles.subtitle}>{subtitle}</Text>
//     </View>
//     <View style={styles.arrowContainer}>
//       <Ionicons name="arrow-forward-outline" size={40} color="#006600" />
//     </View>
//   </TouchableOpacity>
// );

const Cart = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity style={styles.itemContainer}
      onPress={() => navigation.navigate('ItensCapimConveniencia')}
      >
      <Image source={require('../assets/capim_conveniencia.png')} style={styles.image} />
      <View>
        <Text style={styles.title}>Capim Conveniencia</Text>
        <Text style={styles.subtitle}>6 itens</Text>
      </View>
      <View style={styles.arrowContainer}>
        <Ionicons name="arrow-forward-outline" size={40} color="#006600" />
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.itemContainer}
    onPress={() => navigation.navigate('ItensBarDoBeto')}
    >
      <Image source={require('../assets/bar_beto.png')} style={styles.image} />
      <View>
        <Text style={styles.title}>Bar do Beto</Text>
        <Text style={styles.subtitle}>3 itens</Text>
      </View>
      <View style={styles.arrowContainer}>
        <Ionicons name="arrow-forward-outline" size={40} color="#006600" />
      </View>
    </TouchableOpacity>
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
