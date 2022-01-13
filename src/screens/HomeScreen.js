
import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { crearUusuario } from '../api/api';

import { NavigationContainer } from '@react-navigation/native';


export const HomeScreen = () => {



    const [state, setstate] = useState({

        nombre: '',
        apellido: '',
        correo: ''
    });

    const handleChange = (name, value) => {

        setstate({ ...state, [name]: value });

    }

    const crearusuario = async () => {
        crearUusuario(state.nombre, state.apellido, state.correo)
    }



    return (

<NavigationContainer>
        <View style={styles.container}>

            <Text style={styles.text}>Formulario</Text>

            <TextInput
                style={styles.input}
                placeholder='Nombre'
                onChangeText={(value) => handleChange('nombre', value)}

            />
            <TextInput
                style={styles.input}
                placeholder='Apellido'
                onChangeText={(value) => handleChange('apellido', value)}
            />
            <TextInput
                style={styles.input}
                placeholder='Email'
                onChangeText={(value) => handleChange('correo', value)}
            />

            <TouchableOpacity
                style={styles.boton}
                onPress={crearusuario}
            >
                <Text style={styles.textBoton}>Enviar</Text>
            </TouchableOpacity>


        </View>
        </NavigationContainer>
    )
}



const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 25,
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 25,
        textAlign: 'center',
        marginBottom: 18,

    },

    input: {
        height: 45,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
    },
    boton: {
        alignItems: "center",
        backgroundColor: "black",
        padding: 10,
        marginTop: 15,
        borderRadius: 8,
    },

    textBoton: {
        color: "white",

    }


})