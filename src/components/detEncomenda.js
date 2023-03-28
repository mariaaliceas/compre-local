import React, { useState, useEffect, Component } from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from 'react-router-dom';
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
            <Text style={styles.fontBlack}>Preço</Text>
            <View>
                <TextInput style={styles.input} defaultValue={encomenda.valor}></TextInput>
            </View>
            <Text style={styles.fontBlack}>Quantidade:
                <Text style={styles.input}>{encomenda.quantidade}</Text>
            </Text>
            <Text style={styles.fontBlack}>Volume:
                <Text style={styles.input}>{encomenda.volume}</Text>
            </Text>
            <View>
                <Text style={styles.fontBlack}>Detalhes:</Text>
                <Text style={styles.fontBlack}>Data da encomenda:
                    <Text style={styles.input}>{encomenda.dataPedido}</Text>
                </Text>
                <Text style={styles.fontBlack}>Data da entrega:
                    <Text style={styles.input}>{encomenda.dataEntrega}</Text>
                </Text>
                <Text style={styles.fontBlack}>Forma de Pagamento:
                    <Text style={styles.input}>{encomenda.pagamento}</Text>
                </Text>
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
    fontBlack: {
        paddingLeft: 10,
        marginBottom: 5

    },
    fonte: {
        fontSize: 15,
        color: '#00bb22'
    },
    input: {
        paddingLeft: 10,
        fontSize: 15,
        color: 'gray'
    },
    optA: {
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: '3px',
        color: '#00bb22',
        height: 30,
    }
});



