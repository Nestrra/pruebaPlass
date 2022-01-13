import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getUsuario } from '../api/api';




export const Card = () => {

    const [usuario, setusuario] = useState(null)

    const getUsuarios = async () => {
        const usuario = await getUsuario();
        setusuario(usuario.doc);
    }


    useEffect(() => {
        getUsuarios();
    }, [])

    return (
        <View style={styles.container}  >
            <Text style={styles.text}>Usuario</Text>

            {
                usuario && usuario.map(usuario => {
                    (
                        <View style={styles.card}>

                            <Text style={styles.text}>Nombre: {usuario.data().nombre}</Text>
                            <Text style={styles.text}>Apellido: {usuario.data().apellido}</Text>
                            <Text style={styles.text}>Correo: {usuario.data().correo}</Text>
                        </View>
                    )

                })
            }




        </View>
    )
}




const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    text: {
        fontSize: 18,
        marginBottom: 15,
        fontWeight: 'bold',
        color: 'black'
    },

    card: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 250,
        width: 250,
        backgroundColor: 'red',
        borderRadius: 8,
    },


})
