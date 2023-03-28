import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './logo';
import Configs from './Configs';
import Headers from './headers';


export default function HomeComercio(navigation) {


    const [teste, setTeste] = useState();

    useEffect(() => {
        if (teste) return 
        const fetchData = async () => {
            const result = await axios.get('http://localhost:3000/1');
            //console.log(result.data);
            setTeste(result.data);
        }
        fetchData();
    });
    //console.log(teste);
    return teste && (
        < View style={styles.container} >
            <Logo imagem={teste.imagem}></Logo>
            <Configs comercio={teste} nave={navigation}></Configs>
        </View >)

        ;
}

const styles = StyleSheet.create({
    container: {
        fontSize: 30,
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: '10px'
    }
});
