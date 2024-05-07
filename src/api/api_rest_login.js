import axios from 'axios';
import { LOCAL_HOST } from '@env'
import { LocalStorage } from '../utils/LocalStorage';
import { AXIOS } from './api_connection';

export const INICIAR_SESION = async (data, callback) => {
    await AXIOS.post(`/login`, {
        userCorreo: data.correo,
        userPassword: data.pass,
    }).then(response => {
        if (response.data.success) {
            const { save } = LocalStorage()
            save('user', JSON.stringify(response.data.user))
            save('client', JSON.stringify(response.data.client))
            callback(response.data)
        }
    })
        .catch(function (error) {
            console.log(error);
        });
};