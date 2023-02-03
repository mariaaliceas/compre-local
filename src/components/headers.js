import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Alert, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

export default function Headers() {

  return (
    <View style={styles.container}>
      <View style={styles.arrowleft}>
        <Icon size={25} color='#00bb22' name='arrow-left'></Icon>
      </View>
      <View style={styles.icons}>
        <Icon size={25} color='#00bb22' name='search'></Icon>
        <Icon style={styles.sep} size={25} name='bars' color='#00bb22' />
      </View>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop:5
  },
  arrowleft: {
    alignSelf: 'left',
  },
  icons: {
    flexDirection: 'row',
    marginLeft: 'auto'
  },
  sep:{
    paddingLeft:20,
    paddingRight:10,
  }

});

