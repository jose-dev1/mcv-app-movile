import axios from 'axios';

export const INICIAR_SESION = async (data, callback) => {
    await axios.post('http://192.168.0.17:4321/login', {
        userCorreo: data.correo,
        userPassword: data.pass,
    })
        .then(response => callback(response.data))
        .catch(function (error) {
            console.log(error);
        });
};