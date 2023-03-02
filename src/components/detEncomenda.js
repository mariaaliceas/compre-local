import React, { useState, useEffect, Component } from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from 'react-router-dom';
import { Categoria } from './categ';
import { EditaProduto } from './editProduct';

Icon.loadFont();

export default function detEncomenda(parametros) {
    return (
        <View nave={navigation}>
            <View style={styles.img}>
                <Image
                    style={styles.avatar}
                    source={require('../../assets/laranja.png')}
                />
                <View style={styles.texto}>
                    <Text style={styles.font}>Laranja</Text>
                    <Text style={styles.fonte}>R$ 3,00</Text>
                    <Text style={styles.fontes}>Quantidade: 3kg</Text>
                </View>
            </View>
            <View style={styles.texto}>
                <Text style={styles.font}>Pagamento na entrega</Text>
                <Text style={styles.fonte}>R$ 30,00</Text>
                <Text style={styles.fontes}>Quantidade: 3kg</Text>
            </View>
            <View style={styles.prod}>
                <Button color='#00bb22' title="Adicionar produto" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    prod: {
        marginRight: 10,
        marginBottom: 10,
        borderRadius: '3px',
        height: 30,
        paddingLeft: 10
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 25,
        alignSelf: 'left'
    },
    img: {
        flexDirection: 'row',
        paddingLeft: 10
    },
    texto: {
        paddingLeft: 10

    },
    font: {
        fontSize: 20
    },
    fonte: {
        fontSize: 15,
        color: '#00bb22'
    },
    fontes: {
        fontSize: 15,
        color: 'gray'
    },
});



