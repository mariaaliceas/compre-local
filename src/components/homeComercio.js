import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './logo';
import Configs from './Configs';
import Headers from './headers';


export default function HomeComercio(navigation) {

    const capim = {
        imagem: '../../assets/capim_conveniencia.png',
        endereco: 'Rua',
        telefone: '99-99999999',
        horarios: {
            entrada: '08:00',
            saidaA: '12:00',
            entradaA: '13:00',
            saida: '18:00'
        },
        frete: {
            distanciaMax: '10 km',
            tipo: 'Tava variável',
            valores: [{
                valor: 'R$2,00',
                distanciaLim: '10 km'
            }]
        }
    }

    return (
        <View style={styles.container}>
            <Logo imagem={capim.imagem}></Logo>
            <Configs comercio={capim} nave={navigation}></Configs>
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        fontSize: 30,
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: '10px'
    }
});
