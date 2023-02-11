import React, { useState, useEffect, Component } from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from 'react-router-dom';
import { Product } from './product';
Icon.loadFont();

export default function Categoria(parametros) {
    //console.log(parametros)
    const goToScreen3 = () => {
        parametros.nave.navigation.push("Categoria");
    };
    return (
        <View>
            <Text style={styles.fontBlack} >Nome da categoria</Text>
            <TextInput style={styles.input} defaultValue='Produtos'></TextInput>
            <Text style={styles.fontBlack}>Descrição da categoria</Text>
            <TextInput style={styles.input} defaultValue='Compre direto pelo app! Delivery ou Retirada na loja'></TextInput>
            <View style={styles.optA}>
                <Button color='#00bb22' style={styles.opt} title="Alterar imagem da capa" />
            </View>
            <View style={styles.optA}>
                <Button color='#00bb22' style={styles.opt} title="Salvar alterações" />
            </View>
        </View>)
}


const styles = StyleSheet.create({
    button: {
        marginRight: 10,

    },
    input: {
        backgroundColor: '#BEBEBE',
        color: '#808080',
        borderRadius: '3px',
        marginRight: 10
    },
    inline: {
        flexDirection: 'row',
        paddingBottom: 5
    },
    inputA: {
        backgroundColor: '#BEBEBE',
        color: '#808080',
        width: 50,
        textAlign: 'center',
        borderRadius: '3px',
        marginRight: 10
    },
    pad: {
        marginRight: 10,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: '3px',
    },
    fontBlack: {
        color: 'black',
        fontWeight: '500',
        paddingBottom: 5
    },
    optA: {
        marginRight: 10,
        marginBottom: 10,
        borderRadius: '3px',
        color: '#00bb22',
        height: 30,

    },

    opt: {
        color: '#ffff',


    },
})