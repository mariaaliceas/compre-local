import React, { useState, useEffect, Component } from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from 'react-router-dom';
import { Categoria } from './categ';
import { EditaProduto } from './editProduct';

Icon.loadFont();

export default function detEncomenda(props) {
    const encomenda = props.route.params.encomenda;
    return (
        <View>
            <Text style={styles.fontBlack} >Nome do produto</Text>
            <View>
                <TextInput style={styles.input} defaultValue={encomenda.produto}></TextInput>
            </View>
            <View>
                <Text style={styles.fontBlack}>Preço</Text>
                <View style={styles.img}>
                    <View style={styles.pl}>
                        <TextInput style={styles.input} defaultValue={encomenda.valor}></TextInput>
                    </View>
                    <View>
                        <Text>Quantidade:{encomenda.quantidade}</Text>
                        <Text>Volume:{encomenda.volume}</Text>
                    </View>
                </View>
            </View>
            <View>
                <Text style={styles.fontBlack}>Detalhes:</Text>
                <Text>Data da encomenda: {encomenda.dataPedido}</Text>
                <Text>Data da entrega: {encomenda.dataEntrega}</Text>
                <Text>Forma de Pagamento: {encomenda.pagamento}</Text>
                
            </View>
            <View style={styles.optA}>
                <Button color='#FF8C00' style={styles.optD} title="Cancelar" />
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



