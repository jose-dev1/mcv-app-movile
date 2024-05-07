import axios from 'axios';
import { LOCAL_HOST } from '@env'
import { AXIOS } from './api_connection';

export const ConectionClient = () => {
  const update = async (value, correo, password) => {
    try {
      delete value.id_usuario
      await AXIOS.put(`/registro/actualizar_cliente/${value.id_cliente}`, {
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

  const clear = async(correo) =>{
    try {
      await AXIOS.put(`/registro/desactivar`,{correo})
      return ('La cuenta ha sido desactivada correctamente')
    } catch (error) {
      console.log('Error al eliminar' + error)
      throw error; 
    }
  }

  const updatePassword = async(correo,values) =>{
    try {
      await AXIOS.patch(`/registro/actualizarPassword/${correo}`,values)
      return ('Contraseña actualizada correctamente')
    } catch (error) {
      console.log('Error al actualizar' + error)
      throw error; 
    }
  }

  return {
    update,
    clear,
    updatePassword
  }
}