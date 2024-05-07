import axios from "axios";
import { LOCAL_HOST } from '@env'
import { AXIOS } from "./api_connection";
export const ConectionData = async () => {
    const dataGenero = async () => {
        try {
            const response = await AXIOS.get(`/registro/genero`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    return {
        dataGenero
    }

}

export const DataTypeDoc = async () => {
    const dataDoc = async () => {
        try {
            const response = await AXIOS.get(`/registro/documento`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    return {
        dataDoc
    }

}


