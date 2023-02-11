import React, { useState, useEffect, Component } from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from 'react-router-dom';
import {Categoria} from './categ';
Icon.loadFont();

    export default function Product({navigation}) {
    const goToScreen3 = () => {
        navigation.push("Categoria");
    };
    console.log(navigation);    
    return (
        <View nave={navigation}>
            <View style={styles.prod}>
                <Button color='#00bb22' title="Alterar configurações da categoria" onPress={goToScreen3}/>
            </View>
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
                <View style={styles.arrowright}>
                    <Icon size={25} color='#00bb22' name='arrow-right'></Icon>
                </View>
            </View>
            <View style={styles.img}>
                <Image
                    style={styles.avatar}
                    source={require('../../assets/maça.png')}
                />
                <View style={styles.texto}>
                    <Text style={styles.font}>Maça Fuji</Text>
                    <Text style={styles.fonte}>R$ 7,00</Text>
                    <Text style={styles.fontes}>Estoque: 35kg</Text>
                </View>
                <View style={styles.arrowright}>
                    <Icon size={25} color='#00bb22' name='arrow-right'></Icon>
                </View>
            </View>
            <View style={styles.img}>
                <Image
                    style={styles.avatar}
                    source={require('../../assets/limao.png')}
                />
                <View style={styles.texto}>
                    <Text style={styles.font}>Limão Taiti</Text>
                    <Text style={styles.fonte}>R$ 4,00 </Text>
                    <Text style={styles.fontes}>Estoque: 25kg</Text>
                </View>
                <View style={styles.arrowright}>
                    <Icon size={25} color='#00bb22' name='arrow-right'></Icon>
                </View>
            </View>
            <View style={styles.img}>
                <Image
                    style={styles.avatar}
                    source={require('../../assets/leite.png')}
                />
                <View style={styles.texto}>
                    <Text style={styles.font}>Leite</Text>
                    <Text style={styles.fonte}>R$ 3,00</Text>
                    <Text style={styles.fontes}>Estoque: 30kg</Text>
                </View>
                <View style={styles.arrowright}>
                    <Icon size={25} color='#00bb22' name='arrow-right'></Icon>
                </View>
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
    arrowright: {
        alignSelf: 'right',
        paddingLeft:120,
        paddingTop: 30 
    },
});



