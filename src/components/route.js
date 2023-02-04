import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Configs } from './Configs';
import { Product } from './product';

const Stack = createNativeStackNavigator();

export default function Route() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeComercio"
                    component={HomeComercio} />
                <Stack.Screen name="Produto"
                    component={Product} />
                <Stack.Screen name="Configurações"
                    component={Configs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};