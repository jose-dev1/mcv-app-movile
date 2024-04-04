import axios from 'axios';
import { LOCAL_HOST } from '@env'

export const VerMascotas = () => {
  const verMascotas = async (cliente_id) =>{
    try {
    const result =  await axios.get(`http://${LOCAL_HOST}:4321/info_mascotas/${cliente_id}`); 
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
