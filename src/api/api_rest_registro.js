import axios from 'axios';

export const REGISTRO_USUARIO = async (data) => {
    try {
        const response = await axios.post(`http://192.168.0.11:4321/registro`, {
            userCorreo: data.correo,
            userPassword: data.pass,
            userRol: data.rol,
            userGenero: data.genero
        }).then(response => {
            return response.data;
        })
    } catch (error) {
        console.log(error);
        throw error;
    }
}