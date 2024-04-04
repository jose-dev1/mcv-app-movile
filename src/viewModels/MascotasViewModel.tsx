
import React, {useState,useEffect} from "react";
import { LocalStorage } from "../utils/LocalStorage";
import { ConectionClient } from "../api/conecction_client";
import { VerMascotas } from "../api/get_mascotas";

const MascotaViewModel = () => {
  useEffect(()=>{
    const {getItem} = LocalStorage()
    getItem('client').then((item)=>{
      const data = JSON.parse(item as any)
      return data 
    })
    .then(
        (data:any)=>{
          console.log("Data del cliente",data);
            const {verMascotas} = VerMascotas() 
            console.log(verMascotas(data.id_cliente))
            return  verMascotas(data.id)
        }

    )
    .then((response:any)=>setValues(response))
  },[])

  const [values, setValues] = useState(
    []
  )


  return{
    values
  }
}

export default MascotaViewModel