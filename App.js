import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, SafeAreaView, Image, ScrollView, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.containerSafeArea}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Pagina Inicial</Text>
        </View>
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
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Nova Compra</Text>
              <Text style={styles.cardSubtitle}>Ver negóciois perto de você</Text>
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
                        <Text>Bar do Beto</Text>
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
                        <Text>Capim Conveniência</Text>
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
                        <Text>Riacho Roupas</Text>
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
                        <Text>Riacho Roupas</Text>
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
              <ScrollView 
                horizontal={true} 
                style={styles.horizontalContainer} 
                showsHorizontalScrollIndicator={false}
              >  
                <View style={styles.horizontalContainerContent}>  
                    <Button
                        title="Jair Jardinagem"  
                        color="#FF3D00"
                    />  
                </View>  
                <View style={styles.horizontalContainerContent}>  
                    <Button
                        title="Eduardo Encanador"  
                        color="#3D00FF"  
                    />  
                </View>  
                <View style={styles.horizontalContainerContent}>  
                    <Button
                        title="Elias Eletricista"  
                        color="#FFFF3D"  
                    />  
                </View>  
                <View style={styles.horizontalContainerContent}>  
                    <Button
                        title="Diana Diarista"  
                        color="#FF3DFF"  
                    />  
                </View>  
              </ScrollView>
            </View>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>Ofertas</Text>
              <Text style={styles.cardSubtitle}>Confira os melhores preços</Text>
              <Text style={styles.cardSubtitle}>Destaques:</Text>
              <ScrollView 
                horizontal={true} 
                style={styles.horizontalContainer} 
                showsHorizontalScrollIndicator={false}
              >  
                <View style={styles.horizontalContainerContent}>  
                    <Button
                        title="Laranja Pera"  
                        color="#FF3D00"
                    />  
                </View>
                <View style={styles.horizontalContainerContent}>  
                    <Button
                        title="Proção Btata-frita G"  
                        color="#3D00FF"  
                    />  
                </View>  
                <View style={styles.horizontalContainerContent}>  
                    <Button
                        title="Refrigerante 350ml"  
                        color="#FFFF3D"  
                    />  
                </View>  
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
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
    marginTop: 15,
    marginRight: 20
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
    marginTop:10
  },
  card: {
    backgroundColor: 'lightgreen',
    width: '100%',
    height: 220,
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