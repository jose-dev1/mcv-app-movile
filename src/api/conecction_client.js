import axios from 'axios';
import { LOCAL_HOST } from '@env'

export const ConectionClient = () => {
  const update = async (value,correo,password) =>{
    try {
      delete value.id_usuario
      await axios.put(`http://${LOCAL_HOST}:4321/registro/actualizar_cliente/${value.id_cliente}`, {
        correo_usuario: correo,
        contraseña: password,
        ...value
      })
      return ('Los datos han sido actualizados correctamente')
    } catch (error) {
      console.log('Error al actualizar' + error)
      throw error; 
    }
  }

  return {
    update
  }
}