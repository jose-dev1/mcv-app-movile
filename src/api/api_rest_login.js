import axios from 'axios';
import {LOCAL_HOST} from '@env'

export const INICIAR_SESION = async (data, callback) => {
    await axios.post(`http://${LOCAL_HOST}:4321/login`, { //cambiar por la ip
        userCorreo: data.correo,
        userPassword: data.pass,
    })
        .then(response => callback(response.data))
        
        .catch(function (error) {
            console.log(error);
        });
};