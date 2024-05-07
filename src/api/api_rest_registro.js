import axios from 'axios';
import { LOCAL_HOST } from '@env'
import { AXIOS } from './api_connection';
export const REGISTRO_USUARIO = async (data) => {
    try {
        const response = await AXIOS.post(`/registro`, {
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

export const REGISTRO_CLIENTE = async (values) => {
    try {
        console.log(values.primer_apellido_cliente);
        const response = await AXIOS.post(`/registro/registro_cliente`, {
            primer_nombre_cliente: values.primer_nombre_cliente,
            segundo_nombre_cliente: values.segundo_nombre_cliente,
            primer_apellido_cliente: values.primer_apellido_cliente,
            segundo_apellido_cliente: values.segundo_apellido_cliente,
            id_tipo_documento: values.id_tipo_documento,
            numero_documento_cliente: values.numero_documento_cliente,
            lugar_expedicion_documento: values.lugar_expedicion_documento,
            direccion_cliente: values.direccion_cliente,
            telefono_cliente: values.telefono_cliente,
            estado_cliente: values.estado_cliente,
            id_usuario: values.id_usuario
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};
