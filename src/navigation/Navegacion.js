import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator()

import React from 'react'
import { Card } from '../screens/Card';
import { HomeScreen } from '../screens/HomeScreen';

export const Navegacion = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='card' component={Card}
            />
            <Stack.Screen
                name='home' component={HomeScreen}
            />
        </Stack.Navigator>
    )
}
