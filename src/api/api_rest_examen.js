import { LOCAL_HOST } from '@env'
import axios from 'axios'

export const GET_EXAMEN = () => {
    const getExamenbyId = async (cliente_id) => {
        try {
            const result = await axios.get(`http://${LOCAL_HOST}:4321/registro/descarga_examen/${cliente_id}`)
            return result.data[0]
        } catch (error) {
            console.log('Error al traer los datos' + error)
            throw error;
        }
    }
    return {
        getExamenbyId
    }
}

export const DESCARGA_EXAMEN = () => {
    const descargaExamen = async (id) => {
        try {
            const result = await axios.get(`http://${LOCAL_HOST}:4321/examenesVeterinario/${id}`)
            return result.data
        } catch (error) {
            console.log('Error al traer los datos' + error)
            throw error;
        }
    }
    return {
        descargaExamen
    }
}
