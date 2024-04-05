import axios from 'axios';
import { LOCAL_HOST } from '@env'

export const VerVacunsApi = () => {
  const verVacunas = async (mascotas_id) =>{
    console.log(mascotas_id)
    try {
    const result = await axios.get(`http://${LOCAL_HOST}:4321/carnet/datos-pdf/${mascotas_id}`); 
    console.log('bansdderra')
    return result.data

    } catch (error) {
      console.log('Error al traer los datos en vacuna' + error)
      throw error; 
    }
  }

  return {
    verVacunas
  }
}
