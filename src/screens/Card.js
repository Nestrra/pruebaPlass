import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { db } from '../database/firebase';
import { collection, getDocs } from 'firebase/firestore';




export const Card = () => {

    const [user, setUser] = useState([]);

    const usuarioColl = collection(db, 'usuarios');

    useEffect(() => {

        const getUsuarios = async () => {

            const data = await getDocs(usuarioColl);
            console.log(data);
            setUser(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
        }
        getUsuarios();
    }, []);



    return (
        <View>
            <Text>{user.nombre} </Text>
            <Text>{user.apellido} </Text>
            <Text>{user.correo} </Text>
        </View>
    )
}



