import axios from 'axios';
import { LOCAL_HOST } from '@env'
import { AXIOS } from './api_connection';

export const VerMascotas = () => {
  const verMascotas = async (cliente_id) =>{
    try {
    const result =  await AXIOS.get(`/info_mascotas/${cliente_id}`); 
      return result.data

    } catch (error) {
      console.log('Error al traer los datos' + error)
      throw error; 
    }
  }

  return {
    verMascotas
  }
}
