import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './logo';
import Configs from './Configs';
import Headers from './headers';


export default function HomeComercio(navigation) {

    const capim = {
        imagem: 'capim_conveniencia',
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
        },
        produtos: [{
            nome: 'Laranja',
            imagem: 'orange',
            preco: 'R$ 3,00',
            estoque: '30',
            tipoVenda: 'Varejo'
        },
        {
            nome: 'Limão',
            imagem: 'lemon',
            preco: 'R$ 2,00',
            estoque: '50',
            tipoVenda: 'Encomenda'
        }],
        solicitacoesAtivas: [{
            tipoVenda: 'pedido',
            numero: '001',
            valor: 'R$ 10,00',
            dataPedido: '11/02/2023',
            dataEntrega: '11/02/2023',
            volume: 'Kg',
            quantidade: '1',
            produto:'Laranja',
            pagamento: 'Dinheiro'
        },
        {
            tipoVenda: 'encomenda',
            numero: '002',
            valor: 'R$ 50,00',
            dataPedido: '13/02/2023',
            dataEntrega: '15/02/2023',
            volume: 'Kg',
            quantidade: '5',
            produto:'Pão de ló',
            pagamento: 'Cartão'

        }],
        histVendas: [{
            tipoVenda: 'pedido',
            numero: '001',
            valor: 'R$ 10,00',
            dataPedido: '11/02/2023',
            dataEntrega: '11/02/2023',
            volume: 'Kg',
            quantidade: '1',
            produto:'Laranja',
            pagamento: 'Dinheiro'
        },
        {
            tipoVenda: 'encomenda',
            numero: '002',
            valor: 'R$ 50,00',
            dataPedido: '13/02/2023',
            dataEntrega: '15/02/2023',
            volume: 'Kg',
            quantidade: '5',
            produto:'Pão de ló',
            pagamento: 'Cartão'

        }]
        
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
