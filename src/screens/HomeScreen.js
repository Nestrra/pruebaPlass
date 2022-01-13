// import { collection, addDoc } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';

import { db } from '../database/firebase'
import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'




export const HomeScreen = () => {

 const usuarioColl = collection(db, 'usuarios');

    const [state, setstate] = useState({

        nombre: '',
        apellido: '',
        correo: ''
    });

    const handleChange = (name, value) => {

        setstate({ ...state, [name]: value });

    }

    const crearusuario = async () => {
        console.log(state.nombre)
            try {
            const docRef = await addDoc(usuarioColl, {
                nombre:state.nombre,
                apellido:state.apellido,
                correo:state.correo,
            });
            console.log("Document written with ID: ", docRef);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }



    return (


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