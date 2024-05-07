import axios from 'axios';
import { LOCAL_HOST } from '@env'
import { AXIOS } from './api_connection';

export const VerHospitalizaciones = () => {
  const verHospitalizaciones = async (petId) =>{
    try {
      const result =  await AXIOS.get(`/hospitalizaciones/pet/${petId}`); 
      return result.data

    } catch (error) {
      console.log('Error al traer los datos' + error)
      throw error; 
    }
  }

  return {
    verHospitalizaciones
  }
}
