import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from 'react-router-dom';
import { Product } from './product';
import { RadioButton } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
import HomeComercio from './homeComercio';
Icon.loadFont();

export default function EditaProduto(props) {
    const produto = props.route.params.produto;
    const typesOfW = ["Kg", "Unid"];
    let tipoVenda = 0;
    if (produto.tipoVenda === 'Encomenda') {
        tipoVenda = 1;
    }
    const [checked, setChecked] = useState(tipoVenda);
    let img;
    if (produto.imagem === 'orange') {
        img = require('../../assets/laranja.png');
    }
    if (produto.imagem === 'lemon') {
        img = require('../../assets/limao.png');
    }
    if (produto.imagem === 'leite') {
        img = require('../../assets/leite.png');
    }
    if (produto.imagem === 'maca') {
        img = require('../../assets/maca.png');
    }

    const [salvando, setSalvando] = useState(true);
    const [textInput, alteraNomeProduto] = useState(produto.nome);
    const [textInputValor, alteraValorProduto] = useState(produto.preco);
    const [textInputEstoque, alteraEstoqueProduto] = useState();
    const [textTipoEstoque, alteraTipoEstoqueProduto] = useState(produto.tipoEstoque);
    const [textTipoPreco, alteraTipoPreco] = useState(produto.tipoPreco);
    const alteraProduto = () => {
        setSalvando(true);
        const valorRadio = checked === 1 ? 'Encomenda' : 'Varejo';
        const dados = { id: produto.id, nome: textInput, tipo: valorRadio, estoque: textInputEstoque, preco: textInputValor, tipoEstoque: textTipoEstoque, tipoPreco: textTipoPreco };
        const result = axios.put('http://localhost:3000/produtos', dados);
        console.log(result)
    }
    const excluiProduto = () => {
        setSalvando(true);
        //const dados = { id: produto.id};
        const result = axios.delete(`http://localhost:3000/produtos/${produto.id}`);
        console.log(result);
        const navigation = props.route.params.navigation;
        navigation.push('Home')
    }
    

    useEffect(() => {
        const fetchData = async () => {
            if (!salvando) {
                return
            }
            const result = await axios.get(`http://localhost:3000/produtos/${produto.id}`);
            //console.log(result.data);
            setChecked(result.data.tipoVenda === 'Encomenda' ? 1 : 0)
            alteraNomeProduto(result.data.nome);
            alteraValorProduto(result.data.preco);
            alteraEstoqueProduto(result.data.estoque);
            alteraTipoEstoqueProduto(result.data.tipoEstoque);
            alteraTipoPreco(result.data.tipoPreco);
            setSalvando(false);
            console.log(result.data);
        }
        fetchData();
    });
    return (
        <View>
            <View style={styles.img}>
                <Image
                    style={styles.avatar}
                    source={img}
                />
                <View style={styles.texto}>
                    <Text style={styles.font}>{textInput}</Text>
                    <Text style={styles.fonte}>{textInputValor}</Text>
                    <Text style={styles.fontes}>Estoque: {textInputEstoque}Kg</Text>
                </View>
            </View>
            {['Varejo', 'Encomenda'].map((data, key) => {
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
                <TextInput style={styles.input} onChangeText={text => alteraNomeProduto(text)} defaultValue={textInput}></TextInput>
            </View>
            <View>
                <Text style={styles.fontBlack}>Estoque</Text>
                <View style={styles.img}>
                    <View style={styles.pl}>
                        <TextInput style={styles.input} onChangeText={text => alteraEstoqueProduto(text)} defaultValue={textInputEstoque}></TextInput>
                    </View>
                    <SelectDropdown buttonStyle={styles.prod} defaultValue={'Kg'} onChangeText={text => alteraTipoEstoqueProduto(text)}
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
                        <TextInput style={styles.input} onChangeText={text => alteraValorProduto(text)} defaultValue={textInputValor}></TextInput>
                    </View>
                    <SelectDropdown buttonStyle={styles.prod} defaultValue={'Kg'} onChangeText={text => alteraTipoPreco(text)}
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
                <Button color='#00bb22' style={styles.opt} title="Salvar alterações" onPress={alteraProduto} />
            </View>
            <View style={styles.optA}>
                <Button color='#FF8C00' style={styles.optD} title="Excluir produto" onPress={excluiProduto} />
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



