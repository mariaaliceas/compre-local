import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from 'react-router-dom';
import { Product } from './product';
import { RadioButton } from 'react-native-paper';
import SelectDropdown from 'react-native-select-dropdown';
Icon.loadFont();

export default function AdicionaProduto(parametros) {
    const typesOfW = ["Kg", "Unid"];
    const [checked, setChecked] = useState(0);
    const [salvando, setSalvando] = useState(true);
    const [textInput, alteraNomeProduto] = useState();
    const [textInputValor, alteraValorProduto] = useState();
    const [textInputEstoque, alteraEstoqueProduto] = useState();
    const [textTipoEstoque, alteraTipoEstoqueProduto] = useState();
    const [textTipoPreco, alteraTipoPreco] = useState();
    const criaProduto = () => {
        setSalvando(true);
        const valorRadio = checked === 1 ? 'Encomenda' : 'Varejo';
        const dados = { nome: textInput, tipo: valorRadio, idComercio: parametros.route.params.comercio.id, estoque: textInputEstoque, preco: textInputValor, tipoEstoque: textTipoEstoque, tipoPreco: textTipoPreco };
        const result = axios.post('http://localhost:3000/produtos', dados);
        console.log(result)
        const navigation = parametros.route.params.navigation;
        navigation.push('Produto', {comercio:parametros.route.params.comercio})
    }
    const cancelar = () => {
        const navigation = parametros.route.params.navigation;
        navigation.push('Produto', {comercio:parametros.route.params.comercio})
    }
    return (
        <View>
            <Text style={styles.fontBlack} >Nome do produto</Text>
            <View>
                <TextInput style={styles.input} defaultValue='Nome do produto' onChangeText={text => alteraNomeProduto(text)}></TextInput>
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
            <View>
                <Text style={styles.fontBlack}>Preço</Text>
                <View style={styles.img}>
                    <View style={styles.pl}>
                        <TextInput style={styles.input} defaultValue='R$ 0,00' onChangeText={text => alteraValorProduto(text)}></TextInput>
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
                <Text style={styles.fontBlack}>Estoque</Text>
                <View style={styles.img}>
                    <View style={styles.pl}>
                        <TextInput style={styles.input} defaultValue='0'  onChangeText={text => alteraEstoqueProduto(text)}></TextInput>
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
            <View style={styles.optA}>
                <Button color='#00bb22' style={styles.opt} title="Incluir imagem" />
            </View>
            <View style={styles.optA}>
                <Button color='#00bb22' style={styles.opt} title="Salvar alterações" onPress={criaProduto} />
            </View>
            <View style={styles.optA}>
                <Button color='#FF8C00' style={styles.optD} title="Cancelar" onPress={cancelar}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#BEBEBE',
        color: '#808080',
        borderRadius: '3px',
        marginRight: 10,
        marginBottom: 5,
        marginLeft: 8
    },
    fontBlack: {
        color: 'black',
        fontWeight: '500',
        paddingBottom: 5,
        paddingTop: 5,
        marginLeft: 8
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
    img: {
        flexDirection: 'row',
        paddingBottom: 5
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
    btnRadio: {
        flexDirection: 'row',
    },
    fntBtnRadio: {
        marginTop: 9,
        fontWeight: '500',
    },
})



