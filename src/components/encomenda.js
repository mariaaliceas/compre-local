import React, { useState, useEffect, Component } from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from 'react-router-dom';
import { Categoria } from './categ';
import { EditaProduto } from './editProduct';
import { Configs } from './Configs';
import {DetEcomenda} from './detEncomenda'; 
Icon.loadFont();

export default function Encomenda(parametros) {
    const goToScreen9 = () => {
        parametros.nave.navigation.push("detEncomenda");
    }
    return (
        <View>
            <View style={styles.optA}>
                <Button color='#f7a138' style={styles.opt} title="Encomenda nº 001" onPress={goToScreen9}/>
            </View>
            <View style={styles.optA}>
                <Button color='#f7a138' style={styles.opt} title="Encomenda nº 002" />
            </View>
            <View style={styles.optA}>
                <Button color='#f7a138' style={styles.opt} title="Encomenda nº 003" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    optA: {
        marginRight: 10,
        marginBottom: 10,
        borderRadius: '3px',
        color: '#00bb22',
        height: 30,
        paddingTop: 10,
        marginLeft: 8
    },
    opt: {
        color: '#ffff',
    }
})