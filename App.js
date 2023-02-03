import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView, TouchableOpacity, TextInput, Pressable } from 'react-native';
import RNPickerSelect from "react-native-picker-select";
import Icon from 'react-native-ico-material-design';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profile from './screens/ProfileScreen';
import Cart from './screens/CartScreen';

var iconHeight = 26;
var iconWidth = 26;

const HomeScreen = ({ navigation }) => {
    return (
        <>
          <SafeAreaView style={styles.containerSafeArea}>
            <ScrollView style={styles.container} >
              <View style={styles.greetingContainer}>
                <Text style={styles.greetingText}>Olá, Usuário</Text>
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
                    placeholder={{ label: "Todos", value: null }}
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: "JavaScript", value: "JavaScript" },
                        { label: "TypeScript", value: "TypeScript" },
                        { label: "Python", value: "Python" },
                        { label: "Java", value: "Java" },
                        { label: "C++", value: "C++" },
                        { label: "C", value: "C" },
                    ]}
                 />
                  <TextInput
                    style={inputStyle}
                    placeholder="Digite sua busca"
                    keyboardType="default"
                  />
                </View>
              
                <View style={styles.card}>
                  <View>
                    <Text style={styles.cardTitle}>Nova Compra</Text>
                    <Text style={styles.cardSubtitle}>Ver negóciois perto de você</Text>
                  </View>
                  {/* <View><FontAwesomeIcon icon={ faArrowRight } /></View> */}
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
                          <Image source={require('./assets/bar_beto.png')} style={styles.image} />
                          <View style={styles.textContainer}>
                            <Text style={styles.textContainer.text}>Bar do Beto</Text>
                            <Text>4/5 estrelas</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
    
                    <View style={styles.horizontalContainerContent}>
                      <TouchableOpacity>
                        <View style={styles.horizontalCardContainer}>
                          <Image source={require('./assets/capim_conveniencia.png')} style={styles.image} />
                          <View style={styles.textContainer}>
                            <Text style={styles.textContainer.text}>Capim Conveniência</Text>
                            <Text>4/5 estrelas</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View> 
    
                    <View style={styles.horizontalContainerContent}>
                      <TouchableOpacity>
                        <View style={styles.horizontalCardContainer}>
                          <Image source={require('./assets/riacho_roupas.png')} style={styles.image} />
                          <View style={styles.textContainer}>
                            <Text style={styles.textContainer.text}>Riacho Roupas</Text>
                            <Text>4/5 estrelas</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View> 
    
                    <View style={styles.horizontalContainerContent}>
                      <TouchableOpacity>
                        <View style={styles.horizontalCardContainer}>
                          <Image source={require('./assets/lanchonete_alemao.png')} style={styles.image} />
                          <View style={styles.textContainer}>
                            <Text style={styles.textContainer.text}>Riacho Roupas</Text>
                            <Text>4/5 estrelas</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View> 
                  </ScrollView>
                </View>
    
                <View style={styles.card}>
                  <Text style={styles.cardTitle}>Contrate um serviço</Text>
                  <Text style={styles.cardSubtitle}>Veja quem está disponível para sua localização</Text>
                  <View style={[{width: '90%', height: 5, backgroundColor: 'green', marginLeft: 10, marginBottom: 5, marginTop: 5}]} />
                  <ScrollView 
                    horizontal={true} 
                    style={styles.horizontalContainer} 
                    showsHorizontalScrollIndicator={false}
                  >  
                    <View style={styles.horizontalContainerContent}>
                      <TouchableOpacity>
                        <View style={styles.horizontalCardContainer}>
                          <Image source={require('./assets/jair_jardinagem.png')} style={styles.image} />
                          <View style={styles.textContainer}>
                            <Text style={styles.textContainer.text}>Jair Jardinagem</Text>
                            <Text>4/5 estrelas</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>
    
                    <View style={styles.horizontalContainerContent}>
                      <TouchableOpacity>
                        <View style={styles.horizontalCardContainer}>
                          <Image source={require('./assets/eduardo_encanador.png')} style={styles.image} />
                          <View style={styles.textContainer}>
                            <Text style={styles.textContainer.text}>Eduardo Encanador</Text>
                            <Text>4/5 estrelas</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>  
    
                    <View style={styles.horizontalContainerContent}>
                      <TouchableOpacity>
                        <View style={styles.horizontalCardContainer}>
                          <Image source={require('./assets/elias_eletricista.png')} style={styles.image} />
                          <View style={styles.textContainer}>
                            <Text style={styles.textContainer.text}>Elias Eletricista</Text>
                            <Text>4/5 estrelas</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>  
    
                    <View style={styles.horizontalContainerContent}>
                      <TouchableOpacity>
                        <View style={styles.horizontalCardContainer}>
                          <Image source={require('./assets/diana_diarista.png')} style={styles.image} />
                          <View style={styles.textContainer}>
                            <Text style={styles.textContainer.text}>Diana Diarista</Text>
                            <Text>4/5 estrelas</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    </View>  
    
                  </ScrollView>
                </View>
    
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
                        onPress={() => navigation.navigate('Cart')}
                        style={navContainer.iconBehave}
                        android_ripple={{borderless: true, radius: 50}}
                    >
                      <Icon name="shopping-cart" height={iconHeight} width={iconWidth} color="green" />
                    </Pressable>
  
                    <Pressable onPress={() => {}} style={navContainer.iconBehave}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const pickerStyle = {
    inputIOS: {
        color: 'white',
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