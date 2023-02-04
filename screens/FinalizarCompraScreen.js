import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import Icon from 'react-native-ico-material-design';
import Checkbox from 'expo-checkbox';

const FinalizarCompra = ({ navigation }) => {
    const [isChecked, setChecked] = useState(true);

  return (
    <ScrollView automaticallyAdjustKeyboardInsets={true}>
        <View style={styles.itemContainer}>
            <Image source={require('../assets/bar_beto.png')} style={styles.image} />
            <View>
            <Text style={styles.title}>Bar do Beto</Text>
            </View>
        </View>
        <View style={{width: '90%', marginLeft:20, borderRadius: 10, height: 5, backgroundColor: 'green'}} />
        <View style={{backgroundColor: 'lightgreen', width: '90%', marginLeft:20, marginTop: 10, borderRadius: 10}}>
            <Text style={styles.title}>Total: R$ 28,00</Text>
        </View>
        <View style={{marginLeft:20, marginRight: 20}}>
            <RNPickerSelect
                useNativeAndroidPickerStyle={false}
                style={pickerStyle}
                placeholder={{ label: "Entrega", value: 'Entrega' }}
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: "Retirada", value: "Retirada" },
                ]}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RNPickerSelect
                    useNativeAndroidPickerStyle={false}
                    style={pickerStyle}
                    placeholder={{ label: "Endereço 1", value: 'Rua dos bobos, 00' }}
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: "Endereço 2", value: "Avenida Brasil, 1234" },
                    ]}
                />
                <View style={{marginLeft: 50}}>
                    <Text style={{fontSize:20}}>Rua dos bobos, 00</Text>
                    <Text style={{color: 'green', fontSize: 20}}>(Frete: R$ 4,00)</Text>
                </View>
            </View>

            <View >
                <Text style={styles.title}>Selecione o método de pagamento</Text>
                <View style={{marginVertical: 5, flexDirection: 'row', alignItems: 'center'}}>
                    <Checkbox style={styles.checkbox} value={true} onValueChange={setChecked} />
                    <Text style={{color:'gray', fontSize: 20}}>Cartão de crédito/débito</Text>
                </View>
                <View style={{marginVertical: 5, flexDirection: 'row', alignItems: 'center'}}>
                    <Checkbox style={styles.checkbox} disabled value={false} onValueChange={setChecked} />
                    <Text style={{color:'gray', fontSize: 20}}>Dinheiro</Text>
                </View>
            </View>

            <View style={{marginBottom: 20}}>
                <Text style={styles.title}>Comentários</Text>
                <TextInput
                    style={inputStyle}
                    placeholder="Digite alguma coisa"
                    keyboardType="default"
                  />
            </View>

            <View style={{marginBottom: 20}}>
                <TouchableOpacity 
                    style={{width: '90%', padding:10, backgroundColor: 'green', borderRadius: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'}}
                    onPress={() => navigation.navigate('PedidoConfirmado')}
                >
                    <Text style={{color: 'white', fontSize: 24}}>Finalizar Compra</Text>
                    <Icon name="shopping-cart" height={20} width={20} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
  );
};

const pickerStyle = {
    inputIOS: {
        color: 'white',
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

export default FinalizarCompra;
