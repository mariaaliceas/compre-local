import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './logo';
import Configs from './Configs';
import Headers from './headers';


export default function HomeComercio(navigation) {
    return (
        <View style={styles.container}>
            <Logo></Logo>
            <Configs nave={navigation}></Configs>
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
