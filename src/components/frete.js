import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import { TextInput, Text, View, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';
Icon.loadFont();

export default function Frete(props) {
    console.log(props);
    const frete = props.route.params.frete;
    const [checked, setChecked] = useState(frete.tipo === 'Frete grátis' ? 2 : frete.tipo === 'Taxa variável' ? 1 : 0);
    const [textInput, alteraDistanciaMax] = useState(frete.distanciaMax);
    const [textInputValor, alteraValor] = useState(frete.valores[0].valor);
    const [textInputDistLim, alteraDistanciaLimite] = useState(frete.valores[0].distanciaLim);
    const alteraFrete = () => {
        console.log(frete.id);
        const valorRadio = checked === 2 ? 'Frete grátis' : checked === 1 ? 'Taxa variável' : 'Taxa fixa'
        const dados = {id:frete.id, tipo:valorRadio, distanciaMax:textInput,valor:textInputValor, distanciaLim: textInputDistLim}; 
        const result = axios.put('http://localhost:3000/fretes',dados);
        console.log(result)
    }

    return (
        <View>
            <Text style={styles.fontBlack} >Distância máxima</Text>
            <TextInput style={styles.input} onChangeText={text => alteraDistanciaMax(text)} defaultValue={frete.distanciaMax}></TextInput>
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
                        <TextInput style={styles.inputA} onChangeText={text => alteraValor(text)} value={valor.valor}></TextInput>
                    </View>
                    <View>
                        <Text style={styles.fntBtnRadio}>Distância Limite</Text>
                        <TextInput style={styles.inputA} onChangeText={text => alteraDistanciaLimite(text)} value={valor.distanciaLim}></TextInput>
                    </View>
                </View>)
            }) : <></>}
            {checked === 0 ? frete.valores.map((valor) => {
                return (<View style={styles.inLineView}>
                    <View style={styles.inLineValue}>
                        <Text style={styles.fntBtnRadio}>Valor</Text>
                        <TextInput style={styles.inputA} onChangeText={text => alteraValor(text)} value={valor.valor}></TextInput>
                    </View>
                </View>)
            }) : <></>}
            <View style={styles.optA}>
                <Button color='#00bb22' style={styles.opt} title="Salvar alterações" onPress={alteraFrete} />
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

