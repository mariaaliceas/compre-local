import React, { useState, useEffect, Component } from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View, Button, StyleSheet, Label } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from 'react-router-dom';
import { Product } from './product';

export default function Configs(parametros) {
    //console.log(parametros)
    const goToScreen2 = () => {
        parametros.nave.navigation.push("Produto");
    };
    const goToScreen4 = () => {
        parametros.nave.navigation.push("Frete");
    };
    return (
        <View>
            <Text style={styles.fontBlack} >Endereço</Text>
            <TextInput style={styles.input} defaultValue='Rua'></TextInput>
            <Text style={styles.fontBlack}>Telefone</Text>
            <TextInput style={styles.input} defaultValue='44-99999999'></TextInput>
            <Text style={styles.fontBlack}>Horário de atendimento</Text>
            <View style={styles.inline}>
                <TextInput style={styles.inputA} defaultValue='08:00'></TextInput>
                <TextInput style={styles.inputA} defaultValue='12:30'></TextInput>
            </View>
            <View style={styles.inline}>
                <TextInput style={styles.inputA} defaultValue='13:30'></TextInput>
                <TextInput style={styles.inputA} defaultValue='20:00'></TextInput>
            </View>
            <View style={styles.pad}>
                <Button color='#00bb22' style={styles.button} title="Configurar frete" onPress={goToScreen4} />
            </View>
            <Text style={styles.fontBlack} >Seus produtos:</Text>
            <View style={styles.optA}>
                <Button color='#00bb22' style={styles.opt} title="Produtos" onPress={goToScreen2}>
                </Button>
            </View>
            <View style={styles.optA}>
                <Button color='#00bb22' style={styles.opt} title="Encomendas" />
            </View>
            <View style={styles.optA}>
                <Button color='#00bb22' style={styles.opt} title="Ver avaliações" />
            </View>
            <View style={styles.optA}>
                <Button color='#00bb22' style={styles.opt} title="Ver histórico de venda" />
            </View>
        </View>
    );
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

