import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Alert, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Logo(props) {
  let img;
  if (props.imagem === 'capim_conveniencia') {
    img = require('../../assets/capim_conveniencia.png');
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={img}
      />
      <View>
        <Text style={styles.text}>Capim Conveniência</Text>
        <View style={styles.stars}>
          <Icon size={15} color='#00bb22' name='star'></Icon>
          <Icon size={15} color='#00bb22' name='star'></Icon>
          <Icon size={15} color='#00bb22' name='star'></Icon>
          <Icon size={15} color='#00bb22' name='star'></Icon>
          <Icon size={15} color='#00bb22' name='star'></Icon>
        </View>
      </View>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignSelf: 'left',
    flexDirection: 'row',
    padding: 24
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 25,
    alignSelf: 'left'
  },
  text: {
    color: 'black',
    paddingLeft: 40,
    fontWeight: "bold",
    paddingTop: 30,
    fontSize: 15
  },
  stars: {
    flexDirection: 'row',
    paddingLeft: 40
  }
});

