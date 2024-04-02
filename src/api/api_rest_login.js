import axios from 'axios';
import { LOCAL_HOST } from '@env'

export const INICIAR_SESION = async (data, callback) => {
    await axios.post('http://192.168.6.171:4321/login', {
        userCorreo: data.correo,
        userPassword: data.pass,
    }).then(response => {
        if (response.data.success) {
            localStorage.setItem('user', JSON.stringify(response.data.user));
            localStorage.setItem('client', JSON.stringify(response.data.client));
        }
    })
        .catch(function (error) {
            console.log(error);
        });
};