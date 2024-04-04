import axios from "axios";

export const ConectionData = async () => {
    try {
        const response = await axios.get('http://192.168.0.11:4321/registro/genero');
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
