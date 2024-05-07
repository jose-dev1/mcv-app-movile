import axios from 'axios';
import { LOCAL_HOST } from '@env'
import { AXIOS } from './api_connection';

export const ConectionServices = () => {
  const getServices = async (id) => {
    try {
      const result = await AXIOS.get(`/info_mascotas/historial/${id}`)
      return(result.data[0])
    } catch (error) {
      console.log('Error al traer los datos' + error)
      throw error; 
    }
  }

  return {
    getServices
  }
}













