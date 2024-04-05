import React, {useState,useEffect} from "react";
import { LocalStorage } from "../utils/LocalStorage";

const PerfilUserViewModel = () => {

  useEffect(()=>{
    const {getItem} = LocalStorage()
    getItem('user').then((item)=>{
      const data = JSON.parse(item as any)
      setValues({...data})
      getItem('client').then((item)=>{
        const data = JSON.parse(item as any)
        setValuesClient({...data})
      })
    })
    console.log(values)
  },[])

  const [values, setValues] = useState({
    correo_usuario:'',
  })
  const [valuesClient, setValuesClient] = useState({
    primer_nombre_cliente:'',
    primer_apellido_cliente:''})

  return{
    ...values,
    ...valuesClient
  }
}

export default PerfilUserViewModel