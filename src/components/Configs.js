import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View, Button, StyleSheet } from 'react-native';

export default function Configs() {
    return (
        <View style = {styles.field}>
            <TextInput placeholder='Endereço:' />
            <TextInput placeholder='Telefone:'/>
            <Text>Horário de atendimento</Text>
            <br></br>
            <Button style={styles.button} title="Configurar frete" />
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'white',
        alignSelf: 'left',
        flexDirection: 'row',
        padding: 34
    }
})