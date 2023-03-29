import React, { useState, useEffect, Component } from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View, Button, StyleSheet, Label } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from 'react-router-dom';
import { Product } from './product';
import { Feed } from './feed';
import { Encomendas } from './encomenda';

export default function Configs(parametros) {
    //console.log(parametros)
    const goToScreen2 = () => {
        parametros.nave.navigation.push("Produto", { comercio: parametros.comercio });
    };
    const goToScreen4 = () => {
        parametros.nave.navigation.push("Frete", { frete: parametros.comercio.frete });
    };
    const goToScreen7 = () => {
        parametros.nave.navigation.push("Feed", {
            imagem: parametros.comercio.imagem,
            solicitacoesAtivas: parametros.comercio.solicitacoesAtivas
        });
    };
    const goToScreen8 = () => {
        parametros.nave.navigation.push("Encomenda", {
            imagem: parametros.comercio.imagem,
            encomendas: parametros.comercio.solicitacoesAtivas.filter((solicitacao) => solicitacao.tipoVenda === 'encomenda'),
            nave: parametros.nave.navigation
        });

    }
    const goToScreen11 = () => {
        parametros.nave.navigation.push("histVendas", {
            imagem: parametros.comercio.imagem,
            histVendas: parametros.comercio.histVendas
        });
    };


    return (
        <View>
            <Text style={styles.fontBlack} >Endereço</Text>
            <TextInput style={styles.input} defaultValue={parametros.comercio.endereco}></TextInput>
            <Text style={styles.fontBlack}>Telefone</Text>
            <TextInput style={styles.input} defaultValue={parametros.comercio.telefone}></TextInput>
            <Text style={styles.fontBlack}>Horário de atendimento</Text>
            <View style={styles.inline}>
                <TextInput style={styles.inputA} defaultValue={parametros.comercio.horarios.entrada}></TextInput>
                <TextInput style={styles.inputA} defaultValue={parametros.comercio.horarios.saidaA}></TextInput>
            </View>
            <View style={styles.inline}>
                <TextInput style={styles.inputA} defaultValue={parametros.comercio.horarios.entradaA}></TextInput>
                <TextInput style={styles.inputA} defaultValue={parametros.comercio.horarios.saida}></TextInput>
            </View>
            <View style={styles.pad}>
                <Button color='#00bb22' style={styles.button} title="Configurar frete" onPress={goToScreen4} />
            </View>
            <Text style={styles.fontBlack} >Suas opções:</Text>
            <View style={styles.optA}>
                <Button color='#00bb22' style={styles.opt} title="Produtos" onPress={goToScreen2}>
                </Button>
            </View>
            <View style={styles.optA}>
                <Button color='#00bb22' style={styles.opt} title="Feed de sua loja" onPress={goToScreen7} />
            </View>
            <View style={styles.optA}>
                <Button color='#00bb22' style={styles.opt} title="Encomendas" onPress={goToScreen8} />
            </View>
            <View style={styles.optA}>
                <Button color='#00bb22' style={styles.opt} title="Ver histórico de venda" onPress={goToScreen11} />
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

