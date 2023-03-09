import React, { useState, useEffect, Component } from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from 'react-router-dom';
import { RadioButton } from 'react-native-paper';
import Logo from './logo';
import Encomenda from './encomenda';
Icon.loadFont();

export default function Feed(props) {
    const imagem = props.route.params.imagem;
    const solicitacoes = props.route.params.solicitacoesAtivas;
    return (
        <View>
            <Logo imagem={imagem}></Logo>
            <Text style={styles.fontBlack} >Solicitações ativas:</Text>
            {solicitacoes.map((solicitacao) => {
                if (solicitacao.tipoVenda === 'pedido') {
                    return (<View style={styles.optA}>
                        <Button color='#00bb22' style={styles.opt} title={'Novo pedido nº ' + solicitacao.numero} />
                    </View>)
                }
                if (solicitacao.tipoVenda === 'encomenda') {
                    return (<View style={styles.optA}>
                        <Button color='#f7a138' style={styles.opt} title={'Nova encomenda nº' + solicitacao.numero} />
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