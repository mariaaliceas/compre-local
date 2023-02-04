import React from "react";
import { Text, View, FlatList, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const data = [
  {
    id: 1,
    image: require('../assets/capim_conveniencia.png'),
    text: 'Leite 1L',
    subtitle: 'R$ 3,50/un',
    quantidade: 1
  },
  {
    id: 2,
    image: require('../assets/capim_conveniencia.png'),
    text: 'Refrigerante 350ml',
    subtitle: 'R$ 3,50/un',
    quantidade: 2
  },
  {
    id: 3,
    image: require('../assets/capim_conveniencia.png'),
    text: 'Salgadinho 75g',
    subtitle: 'R$ 5,0/un',
    quantidade: 2
  },
  {
    id: 4,
    image: require('../assets/capim_conveniencia.png'),
    text: 'Leite 1L',
    subtitle: 'R$ 3,50/un',
    quantidade: 1
  },
  {
    id: 5,
    image: require('../assets/capim_conveniencia.png'),
    text: 'Iogurte 100ml',
    subtitle: 'R$ 3,50/un',
    quantidade: 1
  },
];
  
// const ItensCapimConveniencia = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <TouchableOpacity style={styles.itemContainer}
//         onPress={() => navigation.navigate('ItensCapimConveniencia')}
//         >
//         <Image source={require('../assets/capim_conveniencia.png')} style={styles.image} />
//         <View>
//           <Text style={styles.title}>Capim Conveniencia</Text>
//           <Text style={styles.subtitle}>6 itens</Text>
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// };

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

const ItensCapimConveniencia = ({ navigation }) => {
  return (
    <ScrollView>
      <View>
        <View style={styles.itemContainer}>
          <Image source={require('../assets/capim_conveniencia.png')} style={styles.image} />
          <View>
            <Text style={styles.title}>Capim Conveniencia</Text>
          </View>
        </View>
        <View style={{width: '90%', marginLeft:20, borderRadius: 10, height: 5, backgroundColor: 'green'}} />
        <FlatList
          data={data}
          renderItem={({ item }) => <Item image={item.image} text={item.text} subtitle={item.subtitle} quantidade={item.quantidade} />}
          keyExtractor={item => item.id.toString()}
        />
        <View style={{width: '90%', marginLeft:20, borderRadius: 10, height: 5, backgroundColor: 'green'}} />
        <TouchableOpacity 
          style={styles.itemContainer}
          onPress={() => navigation.navigate('FinalizarCompra')}  
        >
          <View>
            <Text style={styles.title}>Confirmar compra</Text>
            <Text style={styles.subtitle}>Total: R$ 24,00</Text>
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
  
export default ItensCapimConveniencia;