import React, {useEffect} from "react";
import { LocalStorage } from "../utils/LocalStorage";
import { ConectionClient } from "../api/conecction_client";

const EliminarViewModel = () => {

  const Eliminar = async () =>{
      try {
        const { getItem } = LocalStorage();
        const userDataJSON = await getItem('user');
        const userData = JSON.parse(userDataJSON as any);
        const { clear } = ConectionClient();
        const clearUserData = await clear(userData.correo_usuario);
        return clearUserData;
    } catch (error) {
        console.error("Ocurrió un error al desactivar los datos del cliente:", error);
        throw error;
    }
  }

  return{
    Eliminar
  }
}

export default EliminarViewModel