import React, { useState, useEffect, Component } from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from 'react-router-dom';
import { Categoria } from './categ';
import { EditaProduto } from './editProduct';
import { Configs } from './Configs';
import { DetEcomenda } from './detEncomenda';
import Logo from './logo';
Icon.loadFont();

export default function Encomenda(props) {
    console.log(props)
    const goToScreen9 = (encomenda) => {
        props.navigation.push("detEncomenda", {encomenda});
    }
    const imagem = props.route.params.imagem;
    const encomendas = props.route.params.encomendas;
    return (
        <View>
            <Logo imagem={imagem}></Logo>
            <Text style={styles.fontBlack} >Encomendas ativas:</Text>
            {encomendas.map((encomenda) => {
                return (<View style={styles.optA}>
                    <Button color='#f7a138' style={styles.opt} title={'Encomenda nº' + encomenda.numero} onPress={() => goToScreen9(encomenda)}/>
                </View>)
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
        paddingTop: 10,
        marginLeft: 8
    },
    opt: {
        color: '#ffff',
    },
    fontBlack: {
        paddingLeft: 10
    }
})