import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView, TouchableOpacity, TextInput, Pressable, FlatList } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import Icon from 'react-native-ico-material-design';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profile from './screens/ProfileScreen';
import Cart from './screens/CartScreen';
import ItensCarrinho from './screens/ItensCarrinho';
import FinalizarCompra from './screens/FinalizarCompraScreen';
import PedidoConfirmado from './screens/PedidoConfirmadoScreen';
import Comercio from './src/components/Comercio';
import Servicos from './src/components/Servicos';
import axios from 'axios';

var iconHeight = 26;
var iconWidth = 26;
var userId = 1;

const HomeScreen = ({ navigation }) => {
  const [usuarioInfo, setUser] = useState([]);
  const [language, setLanguage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('http://192.168.237.136:3002/users/' + userId);
      const user = result.data;
      setUser(user);
    };

    fetchData();
  }, []);

    return (
        <>
          <SafeAreaView style={styles.containerSafeArea}>
            <ScrollView style={styles.container} >
              <View style={styles.greetingContainer}>
                <Text style={styles.greetingText}>Olá, {usuarioInfo.map(user=>(user.nome))}</Text>
                <Image
                  style={styles.avatar}
                  source={require('./assets/avatar.png')} />
              </View>
              <View style={styles.cardsContainer}>
                <View style={styles.card}>
                  <Text style={styles.cardTitle}>Do que você precisa?</Text>
                  <View style={{width: '90%', height: 5, backgroundColor: 'green'}} />
                  <RNPickerSelect
                    useNativeAndroidPickerStyle={false}
                    style={pickerStyle}
                    selectedValue={language}
                    onValueChange={(language) => setLanguage(language)}
                    placeholder={{
                      label: 'Escolha uma opção',
                      value: null,
                    }}
                    items={[
                        { label: "Comercio", value: "comercio" },
                        { label: "Servico", value: "servico" },
                    ]}
                 />
                  <TextInput
                    style={inputStyle}
                    placeholder="Digite sua busca"
                    keyboardType="default"
                  />
                </View>
              
                <Comercio usuario={usuarioInfo} />
    
                <Servicos usuario={usuarioInfo} />
    
                <View style={styles.card}>
                  <Text style={styles.cardTitle}>Ofertas</Text>
                  <Text style={styles.cardSubtitle}>Confira os melhores preços</Text>
                  <View style={[{width: '90%', height: 5, backgroundColor: 'green', marginLeft: 10, marginBottom: 5, marginTop: 5}]} />
                  <Text style={styles.cardSubtitle}>Destaques:</Text>
                  <ScrollView 
                    horizontal={true} 
                    style={styles.horizontalContainer} 
                    showsHorizontalScrollIndicator={false}
                  >  
                    <View style={styles.horizontalContainerContent}>
                      <TouchableOpacity>
                        <View style={styles.horizontalCardContainer}>
                          <Image source={require('./assets/laranja_pera.jpg')} style={styles.image} />
                          <View style={styles.textContainer}>
                            <Text style={styles.textContainer.text}>Laranja Pera</Text>
                            <Text style={styles.textContainer.subtitle}>Capim Conveniencia</Text>
                            <Text style={styles.textContainer.price}>R$ 3,40/kg (-15%)</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View> 
    
                    <View style={styles.horizontalContainerContent}>
                      <TouchableOpacity>
                        <View style={styles.horizontalCardContainer}>
                          <Image source={require('./assets/batata_frita.png')} style={styles.image} />
                          <View style={styles.textContainer}>
                            <Text style={styles.textContainer.text}>Proção Bata-frita G</Text>
                            <Text style={styles.textContainer.subtitle}>Bar do Beto</Text>
                            <Text style={styles.textContainer.price}>R$ 8,00/kg (-25%)</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View> 
    
                    <View style={styles.horizontalContainerContent}>
                      <TouchableOpacity>
                        <View style={styles.horizontalCardContainer}>
                          <Image source={require('./assets/coca-cola.png')} style={styles.image} />
                          <View style={styles.textContainer}>
                            <Text style={styles.textContainer.text}>Refrigerante 350ml</Text>
                            <Text style={styles.textContainer.subtitle}>Bar do Beto</Text>
                            <Text style={styles.textContainer.price}>R$ 3,50</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View> 
    
                  </ScrollView>
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
          <View style={navContainer.navContainer}>
                  <View style={navContainer.navBar}>
                    <Pressable 
                        onPress={() => navigation.navigate('Cart', {
                          usuario: usuarioInfo
                        })}
                        style={navContainer.iconBehave}
                        android_ripple={{borderless: true, radius: 50}}
                    >
                      <Icon name="shopping-cart" height={iconHeight} width={iconWidth} color="green" />
                    </Pressable>
  
                    <Pressable onPress={() => navigation.navigate('Home')} 
                    style={navContainer.iconBehave}
                    android_ripple={{borderless: true, radius: 50}}>
                      <Icon name="home-button" height={iconHeight} width={iconWidth} color="green" />
                    </Pressable>
  
                    <Pressable 
                        onPress={() => navigation.navigate('Profile')}
                        style={navContainer.iconBehave}
                        android_ripple={{borderless: true, radius: 50}}
                        >
                      <Icon name="user-shape" height={iconHeight} width={iconWidth} color="green" />
                    </Pressable>
                  </View>
                </View>
        </>
    )
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName={"Home"}
        screenOptions={{
            headerTitleAlign: 'left',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: 'green'
            }
        }}
        >
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
                title: 'Pagina Inicial',
            }}
        />
        <Stack.Screen 
            name="Cart" 
            component={Cart}
            options={{
                title: 'Seu Carrinho',
            }} 
        />
        <Stack.Screen 
            name="ItensCarrinho" 
            component={ItensCarrinho}
            options={{
                title: 'Itens',
            }} 
        />
        <Stack.Screen 
            name="FinalizarCompra" 
            component={FinalizarCompra}
            options={{
                title: 'Finalizar Compra',
            }} 
        />
        <Stack.Screen 
            name="PedidoConfirmado" 
            component={PedidoConfirmado}
            options={{
                title: 'Pedido Confirmado',
            }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const pickerStyle = {
    inputIOS: {
        color: 'black',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 10,
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 5,
        width: '50%'
    },
    placeholder: {
        color: 'black',
      },
    inputAndroid: {
      color: 'white',
      padding: 10,
      marginBottom: 10,
      marginTop: 20,
      backgroundColor: 'white',
      borderRadius: 5,
      width: '50%'
    },
  };
  
  const inputStyle = {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    width: '90%',
    marginTop: 15
  };
  
  const navContainer = StyleSheet.create({
    navContainer: {
      position: 'absolute',
      alignItems: 'center',
      left: '5%',
      bottom: 10
    },
    navBar: {
      flexDirection: 'row',
      backgroundColor: '#eee',
      width: '90%',
      justifyContent: 'space-evenly',
      borderRadius: 40
    },
    iconBehave: {
      padding: 14
    }
  });
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
    },
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
      subtitle: {
        fontSize: 16,
        fontWeight: '700',
        color: 'green'
      },
      price: {
        color: 'green',
        fontWeight: 'light'
      }
    },
    image: {
      width: 80,
      height: 80,
      borderRadius: 10,
      marginTop: 15,
      marginRight: 5
    },
    containerSafeArea:{
      backgroundColor: 'green',
      flex: 1
    },
    header: {
      backgroundColor: 'green',
      height: 60,
      alignItems: 'start',
      justifyContent: 'center',
      paddingTop: 0
    },
    headerText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18,
      paddingLeft: 20,
    },
    greetingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 10,
      marginTop:10,
      marginHorizontal:30,
      justifyContent: 'space-between'
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
    greetingText: {
      padding: 10,
      fontSize: 30,
      color: 'green'
    },
    avatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      alignSelf: 'center',
    },
    cardsContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 10,
      marginTop:10,
      marginBottom:50
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

export default App;