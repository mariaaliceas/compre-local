import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Alert, Button } from 'react-native';


export default function Logo() {

  return (
    <View style={styles.container}>
      <Image
        style={styles.avatar}
        source={require('../../assets/capim_conveniencia.png')}
      />
      <Text style={styles.text}>Capim Conveniência</Text>
      
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
    padding: '30px',
    fontWeight: "bold"
  }
});

