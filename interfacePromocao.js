import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  Image,
  TextInput,
  Button,
  Alert,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.titulo}>
          Cadastro Promoção
        </Text>
        <View style={styles.Cinfo}>
          <Image
          style={styles.foto}
          source={{
            uri: 'https://th.bing.com/th/id/OIP.kvx2noL6fBp2gP301OoFlQHaE7?pid=ImgDet&rs=1',
          }}
          />
          <Text style={styles.Tinfo}>
            Pão de Batata {'\n'} 0000003510
          </Text>
        </View>
        <View>
          <Text style={styles.campos}>Data de inicio da promoção</Text>
        <TextInput style={styles.input} value={Date} placeholder="Insira data de inicio" keyboardType='numeric' />
        </View>
        <View>
          <Text style={styles.campos}>Data de fim da promoção</Text>
        <TextInput style={styles.input} value={Date} placeholder="Insira data de fim" keyboardType='numeric' />
        </View>
        <View>
          <Text style={styles.campos}>Porcentagem de desconto</Text>
        <TextInput style={styles.input} value={Date} placeholder="Insira uma porcentagem de desconto" keyboardType='numeric' />
        </View>
        <View>
          <Text style={styles.campos}>Periodicidade</Text>
        <TextInput style={styles.input} value={Date} placeholder="Escolha uma periodicidade" keyboardType='numeric' />
        </View>
        <View style={styles.fixToText}>
        <Button
          color="#00bb22"
          title="Salvar"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
  titulo: {
    marginTop: 15,
    fontSize: 35,
    color: 'white',
    backgroundColor: '#00bb22',
    textAlign: 'center',
    borderRadius: 10,
  },
  foto: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  Cinfo: {
    margin: 15,
    flexDirection: 'row',
  },
  Tinfo: {
    backgroundColor: 'rgba(0,187,34,0.5)',
    color: 'white',
    margin: 15,
    fontSize: 20,
    width: 200,
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: 'green'
  },
  campos: {
    fontSize: 20,
  },
  fixToText: {
    justifyContent: 'center',
    width: 150,
  },
});

export default App;