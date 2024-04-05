import axios from "axios";
import { LOCAL_HOST } from '@env'
export const ConectionData = async () => {
    const dataGenero = async () => {
        try {
            const response = await axios.get(`http://${LOCAL_HOST}:4321/registro/genero`);
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
            const response = await axios.get(`http://${LOCAL_HOST}:4321/registro/documento`);
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


