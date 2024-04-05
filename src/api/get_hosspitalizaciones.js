import axios from 'axios';
import { LOCAL_HOST } from '@env'

export const VerHospitalizaciones = () => {
  const verHospitalizaciones = async (petId) =>{
    try {
      const result =  await axios.get(`http://${LOCAL_HOST}:4321/hospitalizaciones/pet/${petId}`); 
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
