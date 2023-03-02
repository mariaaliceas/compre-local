import React, { useState, useEffect, Component } from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from 'react-router-dom';
import { RadioButton } from 'react-native-paper';
import Logo from './logo';
import Encomenda from './encomenda';
Icon.loadFont();

export default function Feed() {

    return (
        <View>
            <Logo></Logo>
            <Text style={styles.fontBlack} >Solicitações ativas:</Text>
            <View style={styles.optA}>
                <Button color='#00bb22' style={styles.opt} title="Novo pedido nº 001" />
            </View>
            <View style={styles.optA}>
                <Button color='#f7a138' style={styles.opt} title="Nova encomenda nº 002" />
            </View>
            <View style={styles.optA}>
                <Button color='#00bb22' style={styles.opt} title="Novo pedido nº 003" />
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