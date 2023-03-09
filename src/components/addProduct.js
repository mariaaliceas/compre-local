import React, { useState, useEffect, Component } from 'react';
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
    return (
        <View>
            <Text style={styles.fontBlack} >Nome do produto</Text>
            <View>
                <TextInput style={styles.input} defaultValue='Nome do produto'></TextInput>
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
            <View>
                <Text style={styles.fontBlack}>Preço</Text>
                <View style={styles.img}>
                    <View style={styles.pl}>
                        <TextInput style={styles.input} defaultValue='R$ 0,00'></TextInput>
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
                        <TextInput style={styles.input} defaultValue='0'></TextInput>
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
                <Button color='#00bb22' style={styles.opt} title="Salvar alterações" />
            </View>
            <View style={styles.optA}>
                <Button color='#FF8C00' style={styles.optD} title="Cancelar" />
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



