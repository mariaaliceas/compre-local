import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View, Button, StyleSheet, Label } from 'react-native';

export default function Configs() {
    return (
        <View>
            <Text style={styles.fontBlack} >Endereço</Text>
            <TextInput style={styles.input} defaultValue='Rua'></TextInput>
            <Text style={styles.fontBlack}>Telefone</Text>
            <TextInput style={styles.input} defaultValue='44-99999999'></TextInput>
            <Text style={styles.fontBlack}>Horário de atendimento</Text>
            <View style={styles.inline}>
                <TextInput style={styles.inputA} defaultValue='08:00'></TextInput>-
                <TextInput style={styles.inputA} defaultValue='12:30'></TextInput>
            </View>
            <View style={styles.inline}>
                <TextInput style={styles.inputA} defaultValue='13:30'></TextInput>-
                <TextInput style={styles.inputA} defaultValue='20:00'></TextInput>
            </View>
            <View style={styles.pad}>
                <Button color='#00bb22' style={styles.button} title="Configurar frete" />
            </View>
            <Text style={styles.fontBlack} >Seus produtos:</Text>
            <View style={styles.optA}>
                <Button color='#e0ffe1' style={styles.opt} title="Produtos" />
            </View>
            <View style={styles.optA}>
                <Button color='#e0ffe1' style={styles.opt} title="Encomendas" />
            </View>
            <View style={styles.optA}>
                <Button color='#e0ffe1' style={styles.opt} title="Panificadora" />
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
        marginRight: 10
    },
    inline: {
        flexDirection: 'row',
        paddingBottom: 5
    },
    inputA: {
        backgroundColor: '#BEBEBE',
        color: '#808080',
        width: 50,
        textAlign: 'center',
        borderRadius: '3px',
        marginRight: 10
    },
    pad:{
        marginRight:10,        
        marginBottom:10,
        borderRadius: '3px',
    },
    fontBlack:{
        color:'black',
        fontWeight: '500'
    },
    optA:{
        marginRight:10,        
        marginBottom:10,
        borderRadius: '3px',
        color:'#00bb22'
    },
    opt:{
        
    },
})

