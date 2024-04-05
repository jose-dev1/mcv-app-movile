import React, {useState,useEffect} from "react";
import { LocalStorage } from "../utils/LocalStorage";
import { ConectionClient } from "../api/conecction_client";

const PasswordViewModel = () => {
  const [errorMessage, setErrorMessage] = useState('')

  const [values, setValues] = useState({
    contraseña:'',
    confirmarContraseña:''
  })

  const onChange = (property:string,value:any) =>{setValues({...values,[property]:value})}
  
  const actualizar = async () =>{
    if(isValidForm()) {
      try {
        const { getItem } = LocalStorage();
        const userDataJSON = await getItem('user');
        const userData = JSON.parse(userDataJSON as any);
        const { updatePassword } = ConectionClient();
        const updatedPasswordData = await updatePassword(userData.correo_usuario,values);
        return updatedPasswordData;
    } catch (error) {
        console.error("Ocurrió un error al actualizar los datos del cliente:", error);
        throw error;
    }
    }
    return 0
  }

  const isValidForm = ():boolean => {
    if(values.contraseña===''){
      setErrorMessage('La contraseña es requerida')
      return false
    }

    if(values.confirmarContraseña===""){
      setErrorMessage('La verificacion de contraseña es requerida')
      return false
    }    

    if(values.confirmarContraseña!== values.contraseña){
      setErrorMessage('Las contraseñas no coinciden')
      return false
    }    
    
    return true

  }

  return{
    ...values,
    onChange,
    actualizar,
    errorMessage
  }
}

export default PasswordViewModel