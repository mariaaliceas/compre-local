import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Image, Text, View, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from 'react-router-dom';
import { EditaProduto } from './editProduct';
Icon.loadFont();

export default function Product(props) {
    const navigation = props.navigation;
    const comercio = props.route.params.comercio;
    const [salvando, setSalvando] = useState(true);
    const [produtos, setProdutos] = useState([]);
    const goToScreen5 = (produto) => {
        navigation.push("EditaProduto", { produto: produto, navigation });

    };
    const goToScreen6 = () => {
        navigation.push("AdicionaProduto", {comercio, navigation });
    }

    useEffect(() => {
        const fetchData = async () => {
            if (!salvando) {
                return
            }
            const result = await axios.get(`http://localhost:3000/produtos/comercio/${comercio.id}`);
            setProdutos(result.data)
        }
        fetchData();
    });
    return (
        <View nave={navigation}>
            {produtos.map((produto) => {
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
                return (<View style={styles.img}>
                    <Image
                        style={styles.avatar}
                        source={img}
                    />
                    <View style={styles.texto}>
                        <Text style={styles.font}>{produto.nome}</Text>
                        <Text style={styles.fonte}>{produto.preco}</Text>
                        <Text style={styles.fontes}>Estoque: {produto.estoque}Kg</Text>
                    </View>
                    <View style={styles.arrowright}>
                        <Icon size={25} color='#00bb22' name='arrow-right' onPress={() => goToScreen5(produto)}></Icon>
                    </View>
                </View>)
            })}

            <View style={styles.prod}>
                <Button color='#00bb22' title="Adicionar produto" onPress={goToScreen6} />
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
        flexDirection: 'row',
        paddingLeft: 10
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
        paddingLeft: 120,
        paddingTop: 30
    },
});



