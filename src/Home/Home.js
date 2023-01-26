import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';

const InitialPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Pagina Inicial</Text>
      </View>
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>Olá, Usuário</Text>
        <Image
          style={styles.avatar}
          source={require('./assets/avatar.png')}
        />
      </View>
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Text style={styles.cardText}>Card 1</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>Card 2</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>Card 3</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    backgroundColor: 'lightgreen',
    padding: 10,
    marginTop:10
  },
  card: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin:10
  },
  cardText: {
    fontSize: 18,
  },
});

export default InitialPage;
