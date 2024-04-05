import axios from 'axios';
import { LOCAL_HOST } from '@env'

export const ConectionServices = () => {
  const getServices = async (id) => {
    try {
      const result = await axios.get(`http://${LOCAL_HOST}:4321/info_mascotas/historial/${id}`)
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













