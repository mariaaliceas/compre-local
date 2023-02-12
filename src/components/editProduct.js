import React, { useState, useEffect, Component } from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from 'react-router-dom';
import { Product } from './product';
import { RadioButton } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
Icon.loadFont();

export default function EditaProduto(parametros) {
    const typesOfW = ["Kg", "Unid"];
    return (
        <View>
            <View style={styles.img}>
                <Image
                    style={styles.avatar}
                    source={require('../../assets/laranja.png')}
                />
                <View style={styles.texto}>
                    <Text style={styles.font}>Laranja</Text>
                    <Text style={styles.fonte}>R$ 3,00</Text>
                    <Text style={styles.fontes}>Estoque: 30kg</Text>
                </View>
            </View>
            <View style={styles.btnRadio}>
                <RadioButton color='#00bb22'
                    value="first" status='checked' />
                <Text style={styles.fntBtnRadio}>Varejo</Text>
            </View>
            <View style={styles.btnRadio}>
                <RadioButton
                    value="first" status='unchecked' />
                <Text style={styles.fntBtnRadio}>Encomenda</Text>
            </View>
            <View style={styles.btnRadio}>
                <RadioButton
                    value="first" status='unchecked' />
                <Text style={styles.fntBtnRadio}>Apenas chat</Text>
            </View>
            <Text style={styles.fontBlack} >Nome</Text>
            <View style={styles.pl}>
                <TextInput style={styles.input} defaultValue='Laranja'></TextInput>
            </View>
            <View>
                <Text  style={styles.fontBlack}>Estoque</Text>
                <View style={styles.img}>
                    <View style={styles.pl}>
                        <TextInput style={styles.input} defaultValue='30'></TextInput>
                    </View>
                    <SelectDropdown buttonStyle={styles.prod} defaultValue={'Kg'} 
                        data={typesOfW}
                        onSelect={(selectedItem, index) => {
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem;
                        }}
                        rowTextForSelection={(item, index) => {
                            return item;
                        }}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 25,
        alignSelf: 'left'
    },
    img: {
        flexDirection: 'row'
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
    btnRadio: {
        flexDirection: 'row',
    },
    fntBtnRadio: {
        marginTop: 9,
        fontWeight: '500',
    },
    input: {
        backgroundColor: '#BEBEBE',
        color: '#808080',
        borderRadius: '3px',
        marginRight: 10,
        paddingLeft: 10
    },
    fontBlack: {
        color: 'black',
        fontWeight: '500',
        paddingBottom: 5,
        marginTop: 5,
        paddingLeft: 10
    },
    pl: {
        paddingLeft: 10
    },
    prod: {
        marginRight: 10,
        marginBottom: 10,
        borderRadius: '3px',
        height: 30,
        paddingLeft: 10,
    },
})



