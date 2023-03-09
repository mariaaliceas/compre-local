import React, { useState, useEffect, Component } from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from 'react-router-dom';
import { Product } from './product';
import { RadioButton } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
Icon.loadFont();

export default function EditaProduto(props) {
    const produto = props.route.params.produto;
    const typesOfW = ["Kg", "Unid"];
    let tipoVenda = 0;
    if (produto.tipoVenda === 'Encomenda') {
        tipoVenda = 1;
    }
    if (produto.tipoVenda === 'Chat') {
        tipoVenda = 2;
    }
    const [checked, setChecked] = useState(tipoVenda);
    let img;
    if (produto.imagem === 'orange') {
        img = require('../../assets/laranja.png');
    }
    if (produto.imagem === 'lemon') {
        img = require('../../assets/limao.png');
    }
    return (
        <View>
            <View style={styles.img}>
                <Image
                    style={styles.avatar}
                    source={img}
                />
                <View style={styles.texto}>
                    <Text style={styles.font}>{produto.nome}</Text>
                    <Text style={styles.fonte}>{produto.preco}</Text>
                    <Text style={styles.fontes}>Estoque: {produto.estoque}Kg</Text>
                </View>
            </View>
            {['Varejo', 'Encomenda', 'Apenas chat'].map((data, key) => {
                return (
                    <View key={key}>
                        {checked === key ?
                            <View style={styles.btnRadio}>
                                <RadioButton color='#00bb22'
                                    value="first" status='checked' />
                                <Text style={styles.fntBtnRadio} >{data}</Text>
                            </View>
                            :
                            <View style={styles.btnRadio}>
                                <RadioButton color='#00bb22' onPress={() => { setChecked(key) }}
                                    value="first" status='unchecked' />
                                <Text style={styles.fntBtnRadio} >{data}</Text>
                            </View>
                        }
                    </View>
                )
            })}
            <Text style={styles.fontBlack} >Nome</Text>
            <View style={styles.pl}>
                <TextInput style={styles.input} defaultValue={produto.nome}></TextInput>
            </View>
            <View>
                <Text style={styles.fontBlack}>Estoque</Text>
                <View style={styles.img}>
                    <View style={styles.pl}>
                        <TextInput style={styles.input} defaultValue={produto.estoque}></TextInput>
                    </View>
                    <SelectDropdown buttonStyle={styles.prod} defaultValue={'Kg'}
                        buttonTextStyle={styles.fntDpdown}
                        rowStyle={styles.prod}
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
            <View>
                <Text style={styles.fontBlack}>Preço</Text>
                <View style={styles.img}>
                    <View style={styles.pl}>
                        <TextInput style={styles.input} defaultValue={produto.preco}></TextInput>
                    </View>
                    <SelectDropdown buttonStyle={styles.prod} defaultValue={'Kg'}
                        buttonTextStyle={styles.fntDpdown}
                        rowStyle={styles.prod}
                        dropdownBackgroundColor={styles.prod}
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
            <View style={styles.optA}>
                <Button color='#00bb22' style={styles.opt} title="Alterar imagem" />
            </View>
            <View style={styles.optA}>
                <Button color='#00bb22' style={styles.opt} title="Salvar alterações" />
            </View>
            <View style={styles.optA}>
                <Button color='#FF8C00' style={styles.optD} title="Excluir produto" />
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
        flexDirection: 'row',
        paddingBottom: 5
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
        paddingLeft: 10,
        marginBottom: 10,
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
        height: 25,
        paddingLeft: 1,
        color: '#00bb22',
        paddingBottom: 5
    },
    fntDpdown: {
        fontSize: 15,
        textAlign: 'left'
    },
    optA: {
        color: '#00bb22',
        marginRight: 10,
        marginBottom: 10,
        borderRadius: '3px',
        height: 30,
        paddingLeft: 10,
        marginTop: 10
    },

    opt: {
        color: '#ffff',


    },
})



