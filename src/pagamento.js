import {CheckBox, Text, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';

export default function pagamento(){
    const [isSelected, setSelection] = useState(false);

    return(
        <View style={styles.container}>
            <>
                <Text style={styles.titulo}>Métodos de Pagamento</Text>
                <View style={styles.checkboxContainer}>
                <CheckBox
                value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
                <Text style={styles.label}>PIX</Text>
                </View>
                <View style={styles.checkboxContainer}>
                <CheckBox
                value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
                <Text style={styles.label}>Pagamento na hora da entrega</Text>
                </View>

            </>

        </View>

    );


}

const styles = StyleSheet.create({
    container: {
    backgroundColor:'green',
    flex:1
        
      },
      titulo:{
      marginTop:80,
      marginBottom:40,
      color:'white',
      marginLeft:20,
      fontSize:30
      
      },
      checkboxContainer: {
      display:'flex',
      flexDirection:'row',
      marginLeft:20,
      marginBottom:20,
      
       
      },
      checkbox: {
      fontSize:20
      
      
      },
      label: {
      color:'white',
      paddingLeft:10,
      fontSize:15
        
      }


})