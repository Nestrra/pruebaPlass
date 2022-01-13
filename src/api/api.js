
import { collection, addDoc, getDocs, query } from 'firebase/firestore';
import { db } from '../database/firebase'


export const crearUusuario = (nombre, apellido, correo)=> {
    console.log(nombre, apellido, correo)
    addDoc(collection(db, 'usuarios'),{

        nombre,
        apellido,
        correo

    })

}


export const getUsuario = async () =>{

    const data = await getDocs.apply(query(collection(db, 'usuarios')))
    return data;
}