import React, { useState, useEffect, Component } from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from 'react-router-dom';
import { RadioButton } from 'react-native-paper';
Icon.loadFont();

export default function Frete() {
    return (
        <View>
            <Text style={styles.fontBlack} >Distância máxima</Text>
            <TextInput style={styles.input} defaultValue='10 km'></TextInput>
            <View style={styles.btnRadio}>
                <RadioButton
                    value="first" status='unchecked' />
                <Text style={styles.fntBtnRadio}>Taxa fixa</Text>
            </View>
            <View style={styles.btnRadio}>
                <RadioButton color='#00bb22'
                    value="first" status='checked' />
                <Text style={styles.fntBtnRadio}>Taxa variável</Text>
            </View>
            <View style={styles.btnRadio}>
                <RadioButton
                    value="first" status='unchecked' />
                <Text style={styles.fntBtnRadio}>Frete grátis</Text>
            </View>
            <View style={styles.options}>
                <View style={styles.inLineView}>
                    <View style={styles.inLineValue}>
                        <Text style={styles.fntBtnRadio}>Valor</Text>
                        <TextInput style={styles.inputA} defaultValue='R$ 2,00'></TextInput>
                    </View>
                    <View>
                        <Text style={styles.fntBtnRadio}>Distância Limite</Text>
                        <TextInput style={styles.inputA} defaultValue='10 Km'></TextInput>
                    </View>
                </View>
                <View style={styles.inLineView}>
                    <View style={styles.inLineValue}>
                        <Text style={styles.fntBtnRadio}>Valor</Text>
                        <TextInput style={styles.inputA} defaultValue='R$ 2,00'></TextInput>
                    </View>
                    <View>
                        <Text style={styles.fntBtnRadio}>Distância Limite</Text>
                        <TextInput style={styles.inputA} defaultValue='10 Km'></TextInput>
                    </View>
                </View>
                <View style={styles.inLineView}>
                    <View style={styles.inLineValue}>
                        <Text style={styles.fntBtnRadio}>Valor</Text>
                        <TextInput style={styles.inputA} defaultValue='R$ 2,00'></TextInput>
                    </View>
                    <View>
                        <Text style={styles.fntBtnRadio}>Distância Limite</Text>
                        <TextInput style={styles.inputA} defaultValue='10 Km'></TextInput>
                    </View>
                </View>
            </View>
            <View style={styles.optA}>
                <Button color='#00bb22' style={styles.opt} title="Salvar alterações" />
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
        marginRight: 10,
        marginBottom: 5,
        marginLeft: 8
    },
    inline: {
        flexDirection: 'row',
        paddingBottom: 5
    },
    inputA: {
        backgroundColor: '#BEBEBE',
        color: '#808080',
        width: 150,
        textAlign: 'left',
        borderRadius: '3px',
        marginRight: 10,
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
        paddingBottom: 5,
        paddingTop: 5,
        marginLeft: 8
    },
    optA: {
        marginRight: 10,
        marginBottom: 10,
        borderRadius: '3px',
        color: '#00bb22',
        height: 30,
        paddingTop:10,
        marginLeft: 8
    },
    opt: {
        color: '#ffff',
    },
    btnRadio: {
        flexDirection: 'row',
    },
    fntBtnRadio: {
        marginTop: 9,
        fontWeight: '500',
    },
    inLineView: {
        flexDirection: 'row',
        fontWeight: '500',
        marginTop: 5,
        marginLeft: 8
    },
    options: {
        marginTop: 5,
    }
})

