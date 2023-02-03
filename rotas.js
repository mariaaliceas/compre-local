import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {login} from './login';
import {cadastro} from './cadastro';
import {finalCadastro} from './finalCadastro';
import {cadastroComercio1} from './cadastroComercio1';
import {cadastroComercio2} from './cadastroComercio2';

const Stack = createNativeStackNavigator();

export default function rotas(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Cadastro"
          component={cadastro}
          
        />
        <Stack.Screen name="Login" 
        component={login} />

        <Stack.Screen name="FinalCadastro" 
        component={finalCadastro} />
        
        <Stack.Screen name="CadastroComercio1" 
        component={cadastroComercio1} />

        <Stack.Screen name="CadastroComercio2" 
        component={cadastroComercio2} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};