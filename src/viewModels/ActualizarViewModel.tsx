import React, {useState,useEffect} from "react";
import { LocalStorage } from "../utils/LocalStorage";
import { ConectionClient } from "../api/conecction_client";

const ActualizarViewModel = () => {
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(()=>{
    const {getItem} = LocalStorage()
    getItem('client').then((item)=>{
      const data = JSON.parse(item as any)
      setValues({...data})
    })
  },[])

  const [values, setValues] = useState({
    primer_nombre_cliente:'',
    segundo_nombre_cliente:'',
    primer_apellido_cliente:'',
    segundo_apeliido_cliente:'',
    id_tipo_documento:'',
    numero_documento_cliente:'',
    lugar_expedicion_documento:'',
    direccion_cliente:'',
    telefono_cliente:'',
  })

  const onChange = (property:string,value:any) =>{setValues({...values,[property]:value})}
  
  const actualizar = async () =>{
    if(isValidForm()) {
      try {
        const { getItem } = LocalStorage();
        const userDataJSON = await getItem('user');
        const userData = JSON.parse(userDataJSON as any);
        const { update } = ConectionClient();
        const updatedUserData = await update(values, userData.correo_usuario, userData.password_usuario);
        return updatedUserData;
    } catch (error) {
        console.error("Ocurrió un error al actualizar los datos del cliente:", error);
        throw error;
    }
  }
    return 0
  }

  const isValidForm = ():boolean => {
    if(values.primer_nombre_cliente===''){
      setErrorMessage('El primer nombre es requerido')
      return false
    }

    if(values.primer_apellido_cliente===""){
      setErrorMessage('El primer apellido es requerido')
      return false
    }

    if(values.id_tipo_documento===''){
      setErrorMessage('El tipo de documento es requerido')
      return false
    }

    if(values.numero_documento_cliente===''){
      setErrorMessage('El numero de documento es requerido')
      return false
    }

    if(values.lugar_expedicion_documento===''){
      setErrorMessage('El lugar de expedicion del documento es requerido')
      return false
    }

    if(values.direccion_cliente===''){
      setErrorMessage('La direccion es requerida')
      return false
    }

    if(values.telefono_cliente===''){
      setErrorMessage('El telefono es requerido')
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

export default ActualizarViewModel