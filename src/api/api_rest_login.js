import axios from 'axios';
import { LOCAL_HOST } from '@env'
import { LocalStorage } from '../utils/LocalStorage';

export const INICIAR_SESION = async (data, callback) => {
    await axios.post(`http://192.168.230.6:4321/login`, {
        userCorreo: data.correo,
        userPassword: data.pass,
    }).then(response => {
        if (response.data.success) {
            const { save } = LocalStorage()
            save('user',JSON.stringify(response.data.user))
            save('client',JSON.stringify(response.data.client))
            callback(response.data)
        }
    })
        .catch(function (error) {
            console.log(error);
        });
};