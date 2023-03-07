import React, { useState, useEffect, Component } from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from 'react-router-dom';
import { RadioButton } from 'react-native-paper';
Icon.loadFont();

export default function Frete(props) {
    console.log(props);
    const frete = props.route.params.frete;
    const [checked, setChecked] = useState(frete.valores.length === 0 ? 2: frete.valores.length > 1 ? 1 : 0);
    
    return (
        <View>
            <Text style={styles.fontBlack} >Distância máxima</Text>
            <TextInput style={styles.input} defaultValue={frete.distanciaMax}></TextInput>
            {['Taxa fixa', 'Taxa variável', 'Frete grátis'].map((data, key) => {
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

            {checked === 1 ? frete.valores.map((valor) => {
                return (<View style={styles.inLineView}>
                    <View style={styles.inLineValue}>
                        <Text style={styles.fntBtnRadio}>Valor</Text>
                        <TextInput style={styles.inputA} defaultValue={valor.valor}></TextInput>
                    </View>
                    <View>
                        <Text style={styles.fntBtnRadio}>Distância Limite</Text>
                        <TextInput style={styles.inputA} defaultValue={valor.distanciaLim}></TextInput>
                    </View>
                </View>)
            }) : <></>}
            {checked === 0 ? frete.valores.map((valor) => {
                return (<View style={styles.inLineView}>
                    <View style={styles.inLineValue}>
                        <Text style={styles.fntBtnRadio}>Valor</Text>
                        <TextInput style={styles.inputA} defaultValue={valor.valor}></TextInput>
                    </View>
                </View>)
            }) : <></>}
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
        paddingTop: 10,
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

