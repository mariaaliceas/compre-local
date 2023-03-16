import React, { useState, useEffect, Component } from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from 'react-router-dom';
import { RadioButton } from 'react-native-paper';
import Logo from './logo';
import Encomenda from './encomenda';
Icon.loadFont();

export default function HistVenda(props) {
    const goToScreen9 = (encomenda) => {
        props.navigation.push("detEncomenda", {encomenda});
    }
    const goToScreen10 = (pedido) => {
        props.navigation.push("detPedido", {pedido});
    }
    const imagem = props.route.params.imagem;
    const histVendas = props.route.params.histVendas;
    return (
        <View>
            <Logo imagem={imagem}></Logo>
            <Text style={styles.fontBlack} >Vendas</Text>
            {histVendas.map((histVenda) => {
                if (histVenda.tipoVenda === 'pedido') {
                    return (<View style={styles.optA}>
                        <Button color='#00bb22' style={styles.opt} title={'Pedido nº ' + histVenda.numero} onPress={() => goToScreen10(histVenda)}/>
                    </View>)
                }
                if (histVenda.tipoVenda === 'encomenda') {
                    return (<View style={styles.optA}>
                        <Button color='#f7a138' style={styles.opt} title={'Encomenda nº' + histVenda.numero} onPress={() => goToScreen9(histVenda)}/>
                    </View>)
                }
            })}
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
        marginLeft: 8
    },
    opt: {
        color: '#ffff',
    },
    fontBlack: {
        color: 'black',
        fontWeight: '500',
        paddingBottom: 1,
        marginRight: 10,
        marginBottom: 10,
        borderRadius: '3px',
        height: 30,
        paddingTop: 10,
        marginLeft: 8
    },
})